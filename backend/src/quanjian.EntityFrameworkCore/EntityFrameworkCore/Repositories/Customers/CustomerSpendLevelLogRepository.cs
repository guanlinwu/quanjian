using Abp.EntityFrameworkCore;
using quanjian.Entity.Customers;
using quanjian.IRepositories.Customers;

namespace quanjian.EntityFrameworkCore.Repositories.Customers
{
    public class CustomerSpendLevelLogRepository : AbpZeroTemplateRepositoryBase<CustomerSpendLevelLog>, ICustomerSpendLevelLogRepository
    {
        public CustomerSpendLevelLogRepository(IDbContextProvider<quanjianDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }
    }
}