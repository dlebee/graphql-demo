using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HotChocolate;
using HotChocolate.AspNetCore;
using HotChocolate.AspNetCore.Voyager;
using HotChocolate.Execution.Configuration;
using HotChocolate.Subscriptions;
using Meetup.Pet.Api.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

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
            services.AddSingleton<DogRepository>();
            services.AddSingleton<CatRepository>();

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
