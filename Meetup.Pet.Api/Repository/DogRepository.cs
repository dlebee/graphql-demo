using System.Collections.Generic;
using Meetup.Pet.Api.Queries;

namespace Meetup.Pet.Api.Repositories
{
    public class DogRepository : FakeRepository<Dog>
    {
        protected override IEnumerable<Dog> SeedData()
        {
            yield return new Dog
            {
                Id = 1,
                BirthDate = new System.DateTime(2017, 1, 5),
                Breed = "YorkShire",
                Name = "Reese"
            };

            yield return new Dog
            {
                Id = 2,
                BirthDate = new System.DateTime(1990, 5, 20),
                Breed = "Labrador",
                Name = "Rex"
            };
        }
    }
}