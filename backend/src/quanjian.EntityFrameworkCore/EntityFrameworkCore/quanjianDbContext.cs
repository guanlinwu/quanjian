using Abp.Zero.EntityFrameworkCore;
using quanjian.Authorization.Roles;
using quanjian.Authorization.Users;
using quanjian.MultiTenancy;
using Microsoft.EntityFrameworkCore;
using quanjian.Entity.Customers;
using quanjian.Entity.Orders;
using quanjian.Entity.Products;
using quanjian.Orders;

namespace quanjian.EntityFrameworkCore
{
    public class quanjianDbContext : AbpZeroDbContext<Tenant, Role, User, quanjianDbContext>
    {
        /* Define an IDbSet for each entity of the application */
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductLog> ProductLogs { get; set; }
        public DbSet<ProductAmountLog> ProductAmountLogs { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<CustomerLog> CustomerLogs { get; set; }
        public DbSet<CustomerMoneyLog> CustomerMoneyLogs { get; set; }
        public DbSet<CustomerSpendLevelLog> CustomerSpendLevelLogs { get; set; }
        public DbSet<CustomerPointLog> CustomerPointLogs { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<ChildOrder> ChildOrders { get; set; }
        
        public quanjianDbContext(DbContextOptions<quanjianDbContext> options)
            : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            //...
        }
    }
}
