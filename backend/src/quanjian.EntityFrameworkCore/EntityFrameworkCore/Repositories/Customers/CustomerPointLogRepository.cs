using Abp.EntityFrameworkCore;
using quanjian.Entity.Customers;
using quanjian.IRepositories.Customers;

namespace quanjian.EntityFrameworkCore.Repositories.Customers
{
    public class CustomerPointLogRepository:AbpZeroTemplateRepositoryBase<CustomerPointLog>, ICustomerPointLogRepository
    {
        public CustomerPointLogRepository(IDbContextProvider<quanjianDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }
    }
}