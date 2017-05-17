using Abp.EntityFrameworkCore;
using quanjian.Entity.Products;
using quanjian.IRepositories.Products;

namespace quanjian.EntityFrameworkCore.Repositories.Products
{
    public class ProductRepository:AbpZeroTemplateRepositoryBase<Product>, IProductRepository
    {
        public ProductRepository(IDbContextProvider<quanjianDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }
    }
}