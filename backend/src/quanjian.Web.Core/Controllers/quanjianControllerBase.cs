using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace quanjian.Controllers
{
    public abstract class quanjianControllerBase: AbpController
    {
        protected quanjianControllerBase()
        {
            LocalizationSourceName = quanjianConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}