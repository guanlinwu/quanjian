using Abp.EntityFrameworkCore;
using quanjian.IRepositories.Orders;
using quanjian.Orders;

namespace quanjian.EntityFrameworkCore.Repositories.Orders
{
    public class ChildOrderRepository:AbpZeroTemplateRepositoryBase<ChildOrder>, IChildOrderRepository
    {
        public ChildOrderRepository(IDbContextProvider<quanjianDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }
    }
}