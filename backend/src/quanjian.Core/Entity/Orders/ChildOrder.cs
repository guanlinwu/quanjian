using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Abp.Domain.Entities.Auditing;
using quanjian.Entity.Products;

namespace quanjian.Orders
{
    public class ChildOrder:CreationAuditedEntity
    {
        [Column(TypeName = "decimal(16,4)")]
        [Required]
        public decimal Count { get; set; }
        [Column(TypeName = "decimal(16,4)")]
        [Required]
        public decimal Price { get; set; }
        [Column(TypeName = "decimal(16,4)")]
        [Required]
        public decimal TotalPrice { get; set; }
        public virtual Product Product { get; set; }
    }
}
