using Abp.Authorization;
using quanjian.Authorization.Roles;
using quanjian.Authorization.Users;
using quanjian.MultiTenancy;

namespace quanjian.Authorization
{
    public class PermissionChecker : PermissionChecker<Tenant, Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {

        }
    }
}
