using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HotChocolate;
using HotChocolate.AspNetCore;
using HotChocolate.AspNetCore.Voyager;
using HotChocolate.Execution.Configuration;
using HotChocolate.Subscriptions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;

namespace Meetup.Pet.Api
{

    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<IMongoDatabase>(_ =>
            {
                var connectionString = Configuration["Mongo:ConnectionString"];
                var dbName = Configuration["Mongo:Database"];
                var client = new MongoClient(connectionString);
                var db = client.GetDatabase(dbName);
                return db;
            });

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

            services.AddGraphQL(sp => SchemaBuilder.New()
                .AddServices(sp)
                .AddAuthorizeDirectiveType()
                .AddQueryType<QueryType>()
                //.AddMutationType<MutationType>()
                //.AddSubscriptionType<SubscriptionType>()
                .Create()); 
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

            app
                .UseWebSockets()
                .UseGraphQL("/graphql")
                .UseGraphiQL("/graphql", "/graphiql")
                .UsePlayground("/graphql", "/playground")
                .UseVoyager("/graphql", "/voyager");
        }
    }
}
