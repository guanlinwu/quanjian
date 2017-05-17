using Abp.Authorization;
using quanjian.Authorization.Roles;
using quanjian.Authorization.Users;
using quanjian.MultiTenancy;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Options;

namespace quanjian.Identity
{
    public class SecurityStampValidator : AbpSecurityStampValidator<Tenant, Role, User>
    {
        public SecurityStampValidator(
            IOptions<IdentityOptions> options, 
            SignInManager signInManager) 
            : base(options, signInManager)
        {
        }
    }
}