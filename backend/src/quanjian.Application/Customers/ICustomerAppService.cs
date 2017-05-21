using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services;
using quanjian.Customers.Dto;

namespace quanjian.Customers
{
    public interface ICustomerAppService:IApplicationService
    {
        Task<List<CustomerDto>> GetAllUserList();
        Task<List<CustomerDto>> QueryUserList(string search);
        Task<CustomerDto> GetUserByName(string name);
        Task CreateCustomer(CreateCustomerInput input);
        Task UpdateCustomer(UpdateCustomerInput input);
    }
}
