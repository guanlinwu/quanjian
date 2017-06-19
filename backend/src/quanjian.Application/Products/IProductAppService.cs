using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using quanjian.Customers.Dto;

namespace quanjian.Products
{
    public interface IProductAppService
    {
        Task<List<CustomerDto>> GetAllUserList();

    }
}
