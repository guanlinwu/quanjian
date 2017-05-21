using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities.Auditing;
using quanjian.Entity.Orders;

namespace quanjian.Entity.Customers
{
    public class CustomerPointLog: CreationAuditedEntity
    {
        [Required]
        [Column(TypeName = "decimal(16,4)")]
        public decimal Variable { get; set; }
        public virtual Customer Customer { get; set; }
        public virtual Order Order { get; set; }
    }
}
