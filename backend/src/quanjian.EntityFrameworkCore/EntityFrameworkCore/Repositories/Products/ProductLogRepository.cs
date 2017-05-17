using Abp.EntityFrameworkCore;
using quanjian.Entity.Products;
using quanjian.IRepositories.Products;

namespace quanjian.EntityFrameworkCore.Repositories.Products
{
    public class ProductLogRepository:AbpZeroTemplateRepositoryBase<ProductLog>, IProductLogRepository
    {
        public ProductLogRepository(IDbContextProvider<quanjianDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }
    }
}