using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using Meetup.Pet.Api.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Meetup.Pet.Api
{
 
    public class QueryType : ObjectType<Query>
    {
        protected override void Configure(IObjectTypeDescriptor<Query> descriptor)
        {
            descriptor.Field(t => t.Cats(default, default))
                .Directive<AuthorizeDirective>();
        }
    }
}
