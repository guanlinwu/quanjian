using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using quanjian.MultiTenancy.Dto;

namespace quanjian.MultiTenancy
{
    public interface ITenantAppService : IApplicationService
    {
        ListResultDto<TenantListDto> GetTenants();

        Task CreateTenant(CreateTenantInput input);
    }
}
