using HotChocolate;
using Meetup.Pet.Api.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Meetup.Pet.Api.Queries
{
    public class Query
    {
        public IEnumerable<Dog> Dogs([Service]DogRepository dogRepository)
        {
            return dogRepository.GetAll();
        }

        public IEnumerable<Cat> Cats([Service]CatRepository catRepository)
        {
            return catRepository.GetAll();
        }
    }
}
