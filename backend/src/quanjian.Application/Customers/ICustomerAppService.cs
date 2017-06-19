using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services;
using quanjian.CommonDto;
using quanjian.Customers.Dto;

namespace quanjian.Customers
{
    public interface ICustomerAppService:IApplicationService
    {
        Task<List<CustomerDto>> GetAllUserList();
        Task<List<CustomerDto>> QueryUserList(string search);
        Task<PageList<CustomerDto>> QueryUserListPage(QueryCustomerInput search);
        Task<CustomerDto> GetUserByName(string name);
        Task<CustomerDto> GetUserById(int id);
        Task<CustomerDto> GetUserByPhone(string phone);
        Task<CustomerDto> GetUserByNumber(string number);
        Task CreateCustomer(CreateCustomerInput input);
        Task UpdateCustomer(UpdateCustomerInput input);
        Task Delete(int id);
    }
}
