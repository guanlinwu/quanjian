using Abp.EntityFrameworkCore;
using quanjian.Entity.Orders;
using quanjian.IRepositories.Orders;

namespace quanjian.EntityFrameworkCore.Repositories.Orders
{
    public class OrderRepository:AbpZeroTemplateRepositoryBase<Order>, IOrderRepository
    {
        public OrderRepository(IDbContextProvider<quanjianDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }
    }
}