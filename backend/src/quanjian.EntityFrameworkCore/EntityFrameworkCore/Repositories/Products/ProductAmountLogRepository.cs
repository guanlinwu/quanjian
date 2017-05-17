using Abp.EntityFrameworkCore;
using quanjian.Entity.Products;
using quanjian.IRepositories.Products;

namespace quanjian.EntityFrameworkCore.Repositories.Products
{
    public class ProductAmountLogRepository:AbpZeroTemplateRepositoryBase<ProductAmountLog>, IProductAmountLogRepository
    {
        public ProductAmountLogRepository(IDbContextProvider<quanjianDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }
    }
}