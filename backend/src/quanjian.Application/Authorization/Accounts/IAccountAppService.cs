using System.Threading.Tasks;
using Abp.Application.Services;
using quanjian.Authorization.Accounts.Dto;

namespace quanjian.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
