using HotChocolate;
using HotChocolate.Resolvers;
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

            if (false == await IsAllowed(fieldName, objectType))
            {
                context.Result = ErrorBuilder.New()
                    .SetMessage("Forbidden")
                    .SetCode("503")
                    .SetPath(context.Path)
                    .AddLocation(context.FieldSelection)
                    .Build();
            }
            else
                await _next.Invoke(context);
        }

        private Task<bool> IsAllowed(NameString fieldName, NameString objectType)
        {
            return Task.FromResult(true);
        }
    }
}
