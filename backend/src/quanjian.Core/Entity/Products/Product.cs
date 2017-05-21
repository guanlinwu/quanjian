using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities.Auditing;

namespace quanjian.Entity.Products
{
    public class Product:FullAuditedEntity
    {
        [StringLength(20)]
        [Required]
        public string Number { get; set; }
        [Required]
        [Column(TypeName = "decimal(16,4)")]
        public decimal Price { get; set; }
        [StringLength(50)]
        [Required]
        public string Name { get; set; }
        [Required]
        [Column(TypeName = "decimal(16,4)")]
        public decimal Point { get; set; }
        [StringLength(20)]
        [Required]
        public string Size { get; set; }
        [Required]
        [Column(TypeName = "decimal(16,4)")]
        public decimal PointRate { get; set; }
        [Required]
        [Column(TypeName = "decimal(16,4)")]
        public decimal Amount { get; set; }
        [Required]
        [Column(TypeName = "decimal(16,4)")]
        public decimal ExchangePoint { get; set; }
        public virtual List<ProductLog> ProductLogs{ get; set; }
        public virtual List<ProductAmountLog> ProductAmountLogs { get; set; }
    }
}
