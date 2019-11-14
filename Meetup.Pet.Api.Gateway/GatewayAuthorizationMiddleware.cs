using HotChocolate;
using HotChocolate.Resolvers;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Meetup.Pet.Api.Gateway
{
    public class GatewayAuthorizationMiddleware
    {
        private readonly FieldDelegate _next;

        public GatewayAuthorizationMiddleware(FieldDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(IMiddlewareContext context)
        {
            var fieldName = context.Field.Name;
            var objectType = context.ObjectType.Name;

            var contextAccessor = context.Service<IHttpContextAccessor>();
            if (!contextAccessor.HttpContext.User.Identity.IsAuthenticated)
            {
                
                    

                context.Result = ErrorBuilder.New()
                    .SetMessage("Forbidden")
                    .SetCode("503")
                    .SetPath(context.Path)
                    .AddLocation(context.FieldSelection)
                    .Build();

                return;
            }

            if (fieldName.Value == "PostalCode" && objectType.Value == "Restaurant")
            {
                context.Result = ErrorBuilder.New()
                    .SetMessage("Forbidden")
                    .SetCode("503")
                    .SetPath(context.Path)
                    .AddLocation(context.FieldSelection)
                    .Build();

                return;
            }

            await _next.Invoke(context);
        }
    }
}
