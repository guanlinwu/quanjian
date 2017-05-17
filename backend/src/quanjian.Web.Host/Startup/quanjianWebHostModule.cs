using System.Reflection;
using Abp.Modules;
using Abp.Reflection.Extensions;
using quanjian.Configuration;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace quanjian.Web.Host.Startup
{
    [DependsOn(
       typeof(quanjianWebCoreModule))]
    public class quanjianWebHostModule: AbpModule
    {
        private readonly IHostingEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public quanjianWebHostModule(IHostingEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(quanjianWebHostModule).GetAssembly());
        }
    }
}
