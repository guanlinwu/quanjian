using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities.Auditing;

namespace quanjian.Entity.Products
{
    public class ProductLog:CreationAuditedEntity
    {
        [StringLength(20)]
        public string OldNumber { get; set; }
        [StringLength(20)]
        public string NewNumber { get; set; }
        [Column(TypeName = "decimal(16,4)")]
        public decimal OldPrice { get; set; }
        [Column(TypeName = "decimal(16,4)")]
        public decimal NewPrice { get; set; }
        [StringLength(50)]
        public string OldName { get; set; }
        [StringLength(50)]
        public string NewName { get; set; }
        [Column(TypeName = "decimal(16,4)")]
        public decimal OldPoint { get; set; }
        [Column(TypeName = "decimal(16,4)")]
        public decimal NewPoint { get; set; }
        [StringLength(20)]
        public string OldSize { get; set; }
        [StringLength(20)]
        public string NewSize { get; set; }
        [Column(TypeName = "decimal(16,4)")]
        public decimal OldPointRate { get; set; }
        [Column(TypeName = "decimal(16,4)")]
        public decimal NewPointRate { get; set; }
        [Column(TypeName = "decimal(16,4)")]
        public decimal OldExchangePoint { get; set; }
        [Column(TypeName = "decimal(16,4)")]
        public decimal NewExchangePoint { get; set; }
    }
}
