using Meetup.Pet.Api.Queries;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Meetup.Pet.Api.Repositories
{
    public class CatRepository : FakeRepository<Cat>
    {
        protected override IEnumerable<Cat> SeedData()
        {
            yield return new Cat
            {
                Id = 1,
                BirthDate = new DateTime(2019, 01, 5),
                Breed = "Abyssinian Cat",
                Name = "JR"
            };
        }
    }
}