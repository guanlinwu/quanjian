using Abp.EntityFrameworkCore;
using quanjian.Entity.Customers;
using quanjian.IRepositories.Customers;

namespace quanjian.EntityFrameworkCore.Repositories.Customers
{
    public class CustomerLogRepository:AbpZeroTemplateRepositoryBase<CustomerLog>, ICustomerLogRepository
    {
        public CustomerLogRepository(IDbContextProvider<quanjianDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }
    }
}