using System;
using System.Collections.Generic;

namespace TodoApi.Entities
{
    public partial class Match
    {
        public Match()
        {
            Round = new HashSet<Round>();
        }

        public int Id { get; set; }
        public int HomeTeamId { get; set; }
        public int AwayTeamId { get; set; }

        public Team AwayTeam { get; set; }
        public Team HomeTeam { get; set; }
        public ICollection<Round> Round { get; set; }
    }
}
