using Abp.Domain.Entities.Auditing;

namespace quanjian.Entity.Products
{
    public class ProductAmountLog:CreationAuditedEntity
    {
        public decimal Variable { get; set; }
    }
}
