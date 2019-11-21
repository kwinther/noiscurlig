using System;
using System.Collections.Generic;

namespace TodoApi.Entities
{
    public partial class Player
    {
        public int Id { get; set; }
        public int? TeamId { get; set; }
        public int? Age { get; set; }
        public string Position { get; set; }
        public string Name { get; set; }

        public Team Team { get; set; }
    }
}
