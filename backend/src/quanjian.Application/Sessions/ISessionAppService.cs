using System.Threading.Tasks;
using Abp.Application.Services;
using quanjian.Sessions.Dto;

namespace quanjian.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
