using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities.Auditing;

namespace quanjian.Entity.Customers
{
    public class CustomerMoneyLog: CreationAuditedEntity
    {
        [Column(TypeName="decimal(16,4)")]
        [Required]
        public decimal Variable { get; set; }
        [Required]
        public int Type { get; set; }
    }
}
