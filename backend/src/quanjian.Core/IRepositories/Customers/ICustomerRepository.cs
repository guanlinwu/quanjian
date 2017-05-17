using Abp.Domain.Repositories;
using quanjian.Entity.Customers;

namespace quanjian.IRepositories.Customers
{
    public interface ICustomerRepository:IRepository<Customer>
    {
        
    }
}