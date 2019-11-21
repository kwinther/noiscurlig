using System;
using System.Collections.Generic;

namespace TodoApi.Entities
{
    public partial class Round
    {
        public int MatchId { get; set; }
        public int RoundId { get; set; }
        public int HomePoints { get; set; }
        public int AwayPoints { get; set; }

        public Match Match { get; set; }
    }
}
