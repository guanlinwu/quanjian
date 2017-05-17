using Abp.Domain.Entities.Auditing;

namespace quanjian.Entity.Customers
{
    public class CustomerLog:CreationAuditedEntity
    {
        public string OldName { get; set; }
        public string NewName { get; set; }
        public string OldPhone { get; set; }
        public string NewPhone { get; set; }
        public string OldNumber { get; set; }
        public string NewNumber { get; set; }
        public bool OldIsVip { get; set; }
        public bool NewIsVip { get; set; }
    }
}
