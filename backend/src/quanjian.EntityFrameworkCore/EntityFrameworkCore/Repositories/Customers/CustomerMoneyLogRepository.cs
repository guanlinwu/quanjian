using Abp.EntityFrameworkCore;
using quanjian.Entity.Customers;
using quanjian.IRepositories.Customers;

namespace quanjian.EntityFrameworkCore.Repositories.Customers
{
    public class CustomerMoneyLogRepository:AbpZeroTemplateRepositoryBase<CustomerMoneyLog>, ICustomerMoneyLogRepository
    {
        public CustomerMoneyLogRepository(IDbContextProvider<quanjianDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }
    }
}