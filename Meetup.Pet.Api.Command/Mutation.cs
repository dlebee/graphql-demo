using HotChocolate;
using Meetup.Pet.Api.Queries;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Meetup.Pet.Api.Command
{

    public class Mutation
    {
        public async Task<string> CreateDog([Service]IMongoDatabase db, CreateDog input)
        {
            var entity = new Dog
            {
                Name = input.Name,
                Breed = input.Breed,
                BirthDate = input.BirthDate
            };

            await db.GetCollection<Dog>("dogs").InsertOneAsync(entity);
            return entity.Id;
        }
    }
}
