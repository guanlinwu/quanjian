using Abp.EntityFrameworkCore.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Abp.Zero.EntityFrameworkCore;
using quanjian.EntityFrameworkCore.Seed;

namespace quanjian.EntityFrameworkCore
{
    [DependsOn(
        typeof(quanjianCoreModule), 
        typeof(AbpZeroCoreEntityFrameworkCoreModule))]
    public class quanjianEntityFrameworkModule : AbpModule
    {
        /* Used it tests to skip dbcontext registration, in order to use in-memory database of EF Core */
        public bool SkipDbContextRegistration { get; set; }

        public bool SkipDbSeed { get; set; }


        public override void PreInitialize()
        {
            if (!SkipDbContextRegistration)
            {
                Configuration.Modules.AbpEfCore().AddDbContext<quanjianDbContext>(configuration =>
                {
                    quanjianDbContextConfigurer.Configure(configuration.DbContextOptions, configuration.ConnectionString);
                });
            }
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(quanjianEntityFrameworkModule).GetAssembly());
        }

        public override void PostInitialize()
        {
            if (!SkipDbSeed)
            {
                SeedHelper.SeedHostDb(IocManager);
            }
        }
    }
}