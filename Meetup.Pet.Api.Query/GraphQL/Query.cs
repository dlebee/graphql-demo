using HotChocolate;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Meetup.Pet.Api.Queries
{
    public class Query
    {
        public IQueryable<Dog> Dogs([Service]IMongoDatabase db, string search = null)
        {
            var query = db.GetCollection<Dog>("dogs").AsQueryable();
            if (!string.IsNullOrWhiteSpace(search))
                query.Where(t => t.Name.Contains(search) || t.Breed.Contains(search));

            return query;
        }

        public IQueryable<Cat> Cats([Service]IMongoDatabase db, string search = null)
        {
            var query = db.GetCollection<Cat>("cats").AsQueryable();
            if (!string.IsNullOrWhiteSpace(search))
                query.Where(t => t.Name.Contains(search) || t.Breed.Contains(search));

            return query;
        }
    }
}
