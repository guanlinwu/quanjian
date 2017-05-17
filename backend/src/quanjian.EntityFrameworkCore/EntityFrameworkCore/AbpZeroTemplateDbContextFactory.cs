using quanjian.Configuration;
using quanjian.Web;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;

namespace quanjian.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class quanjianDbContextFactory : IDbContextFactory<quanjianDbContext>
    {
        public quanjianDbContext Create(DbContextFactoryOptions options)
        {
            var builder = new DbContextOptionsBuilder<quanjianDbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            quanjianDbContextConfigurer.Configure(builder, configuration.GetConnectionString(quanjianConsts.ConnectionStringName));
            
            return new quanjianDbContext(builder.Options);
        }
    }
}