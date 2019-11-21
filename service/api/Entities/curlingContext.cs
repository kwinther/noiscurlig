using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace TodoApi.Entities
{
    public partial class curlingContext : DbContext
    {
        public virtual DbSet<Match> Match { get; set; }
        public virtual DbSet<Player> Player { get; set; }
        public virtual DbSet<Round> Round { get; set; }
        public virtual DbSet<Team> Team { get; set; }


        public curlingContext(DbContextOptions<curlingContext> options)
        {
            var hei = options;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer(@"");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Match>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AwayTeamId).HasColumnName("away_team_id");

                entity.Property(e => e.HomeTeamId).HasColumnName("home_team_id");

                entity.HasOne(d => d.AwayTeam)
                    .WithMany(p => p.MatchAwayTeam)
                    .HasForeignKey(d => d.AwayTeamId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Match_Away_Team");

                entity.HasOne(d => d.HomeTeam)
                    .WithMany(p => p.MatchHomeTeam)
                    .HasForeignKey(d => d.HomeTeamId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Match_Home_Team");
            });

            modelBuilder.Entity<Player>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Age).HasColumnName("age");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Position)
                    .HasColumnName("position")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TeamId).HasColumnName("team_id");

                entity.HasOne(d => d.Team)
                    .WithMany(p => p.Player)
                    .HasForeignKey(d => d.TeamId)
                    .HasConstraintName("FK_Player_Team");
            });

            modelBuilder.Entity<Round>(entity =>
            {
                entity.HasKey(e => new { e.MatchId, e.RoundId });

                entity.Property(e => e.MatchId).HasColumnName("match_id");

                entity.Property(e => e.RoundId).HasColumnName("round_id");

                entity.Property(e => e.AwayPoints).HasColumnName("away_points");

                entity.Property(e => e.HomePoints).HasColumnName("home_points");

                entity.HasOne(d => d.Match)
                    .WithMany(p => p.Round)
                    .HasForeignKey(d => d.MatchId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Round_Round");
            });

            modelBuilder.Entity<Team>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Established)
                    .HasColumnName("established")
                    .HasColumnType("date");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });
        }
    }
}
