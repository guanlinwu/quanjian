using Microsoft.EntityFrameworkCore;

namespace quanjian.EntityFrameworkCore
{
    public static class quanjianDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<quanjianDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }
    }
}