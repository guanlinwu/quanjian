using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities.Auditing;
using quanjian.Entity.Orders;

namespace quanjian.Entity.Customers
{
    public class CustomerSpendLevelLog : CreationAuditedEntity
    {
        [Required]
        [Column(TypeName = "decimal(16,4)")]
        public decimal OldSpend { get; set; }
        [Required]
        [Column(TypeName = "decimal(16,4)")]
        public decimal NewSpend { get; set; }
        [Required]
        [Column(TypeName = "decimal(16,4)")]
        public decimal OldLevel { get; set; }
        [Required]
        [Column(TypeName = "decimal(16,4)")]
        public decimal NewLevel { get; set; }
        public virtual Customer Customer { get; set; }
        [StringLength(200)]
        public string Remark { get; set; }
    }
}
