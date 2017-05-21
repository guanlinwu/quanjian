using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities.Auditing;

namespace quanjian.Entity.Products
{
    public class ProductAmountLog:CreationAuditedEntity
    {
        [Required]
        [Column(TypeName = "decimal(16,4)")]
        public decimal Variable { get; set; }
    }
}
