using MongoDB.Bson.Serialization.Attributes;
using System;

namespace Meetup.Pet.Api.Queries
{
    [BsonIgnoreExtraElements]
    public class Cat
    {
        [BsonId, BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public int Id { get; set; }
        public string Breed { get; set; }
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
    }
}
