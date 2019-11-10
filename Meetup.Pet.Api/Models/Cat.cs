using System;

namespace Meetup.Pet.Api.Queries
{
    public class Cat : IHasId
    {
        public string Breed { get; set; }
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
        public int Id { get; set; }
    }
}
