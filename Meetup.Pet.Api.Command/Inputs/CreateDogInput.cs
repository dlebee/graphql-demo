using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Meetup.Pet.Api.Command
{
    public class CreateDog
    {
        public string Name { get; set; }
        public string Breed { get; set; }
        public DateTime BirthDate { get; set; }
    }
}
