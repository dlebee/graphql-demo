using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using HotChocolate;
using HotChocolate.AspNetCore;
using HotChocolate.AspNetCore.Subscriptions;
using HotChocolate.AspNetCore.Voyager;
using HotChocolate.Stitching;
using HotChocolate.Subscriptions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;

namespace Meetup.Pet.Api.Gateway
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddHttpContextAccessor();
            services.AddMemoryCache();

            services.AddCors();
            services
                   .AddAuthorization()
                   .AddAuthentication("Bearer")
                   .AddJwtBearer("Bearer", options =>
                   {
                       options.Authority = "https://localhost:7001";
                       options.RequireHttpsMetadata = false;
                       options.Audience = "MeetupApi";
                   });

            services.AddInMemorySubscriptionProvider();
            services.AddGraphQLSubscriptions();

            services.AddSingleton<StrapiTokenService>();


            services.AddHttpClient("PetQueries", (sp, client) =>
            {
                var context = sp.GetRequiredService<IHttpContextAccessor>().HttpContext;

                if (context.Request.Headers.ContainsKey("Authorization"))
                {
                    client.DefaultRequestHeaders.Authorization =
                        AuthenticationHeaderValue.Parse(
                            context.Request.Headers["Authorization"]
                                .ToString());
                }

                client.BaseAddress = new Uri("https://localhost:5001/graphql");
            });

            services.AddHttpClient("PetCommands", (sp, client) =>
            {
                var context = sp.GetRequiredService<IHttpContextAccessor>().HttpContext;

                if (context.Request.Headers.ContainsKey("Authorization"))
                {
                    client.DefaultRequestHeaders.Authorization =
                        AuthenticationHeaderValue.Parse(
                            context.Request.Headers["Authorization"]
                                .ToString());
                }

                client.BaseAddress = new Uri("https://localhost:5003/graphql");
            });

            services.AddHttpClient("Countries", client =>
            {
                client.BaseAddress = new Uri("https://countries.trevorblades.com/");
            });

            services.AddHttpClient("Strapi", (sp, client) =>
            {
                var strapiTokenService = sp.GetRequiredService<StrapiTokenService>();
                var token = strapiTokenService.GetGatewayTokenAsync().Result;
                if (string.IsNullOrWhiteSpace(token))
                    throw new Exception("token is required.");

                client.BaseAddress = new Uri("http://localhost:1337/graphql");
                client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);
            });

            services.AddStitchedSchema(builder =>
            {
                builder.AddSchemaFromHttp("PetQueries"); 
                builder.AddSchemaFromHttp("PetCommands");
                builder.AddSchemaFromHttp("Countries");
                builder.AddSchemaFromHttp("Strapi");
                builder.AddSchemaConfiguration(c => c
                    .RegisterExtendedScalarTypes()
                    .RegisterType<JsonScalarType>()
                    .RegisterType<UploadScalarType>()
                    .Use<GatewayAuthorizationMiddleware>()
                    );
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseCors(o => o.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            app.UseAuthentication();
            app.UseRouting();

            app.UseWebSockets();

            app
                .UseWebSockets()
                .UseGraphQL("/graphql")
                .UseGraphiQL("/graphql", "/graphiql")
                .UsePlayground("/graphql", "/playground")
                .UseVoyager("/graphql", "/voyager");
        }

        
    }
}
