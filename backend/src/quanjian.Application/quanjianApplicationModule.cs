using System.Reflection;
using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using quanjian.Authorization;

namespace quanjian
{
    [DependsOn(
        typeof(quanjianCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class quanjianApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<quanjianAuthorizationProvider>();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(quanjianApplicationModule).GetAssembly());
        }
    }
}