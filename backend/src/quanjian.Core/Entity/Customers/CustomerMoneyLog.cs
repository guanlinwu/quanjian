using Abp.Domain.Entities.Auditing;

namespace quanjian.Entity.Customers
{
    public class CustomerMoneyLog: CreationAuditedEntity
    {
        public decimal Variable { get; set; }
        public int Type { get; set; }
    }
}
