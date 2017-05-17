using Abp.Domain.Entities.Auditing;
using quanjian.Entity.Orders;

namespace quanjian.Entity.Customers
{
    public class CustomerPointLog: CreationAuditedEntity
    {
        public decimal Variable { get; set; }
        public virtual Customer Customer { get; set; }
        public virtual Order Order { get; set; }
    }
}
