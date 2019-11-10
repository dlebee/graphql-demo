using HotChocolate.Types;

namespace Meetup.Pet.Api.Command
{
    public class MutationType : ObjectType<Mutation>
    {
        protected override void Configure(IObjectTypeDescriptor<Mutation> descriptor)
        {
            
        }
    }
}
