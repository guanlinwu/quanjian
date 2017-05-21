using System.ComponentModel.DataAnnotations;
using Abp.Domain.Entities.Auditing;

namespace quanjian.Entity.Customers
{
    public class CustomerLog:CreationAuditedEntity
    {
        [StringLength(10)]
        public string OldName { get; set; }
        [StringLength(10)]
        public string NewName { get; set; }
        [StringLength(20)]
        public string OldPhone { get; set; }
        [StringLength(20)]
        public string NewPhone { get; set; }
        [StringLength(20)]
        public string OldNumber { get; set; }
        [StringLength(20)]
        public string NewNumber { get; set; }
        public bool OldIsVip { get; set; }
        public bool NewIsVip { get; set; }
    }
}
