using Abp.EntityFrameworkCore;
using quanjian.Entity.Customers;
using quanjian.IRepositories.Customers;

namespace quanjian.EntityFrameworkCore.Repositories.Customers
{
    public class CustomerRepository:AbpZeroTemplateRepositoryBase<Customer>,ICustomerRepository
    {
        public CustomerRepository(IDbContextProvider<quanjianDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }
    }
}