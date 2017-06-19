using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities.Auditing;

namespace quanjian.Entity.Customers
{
    public class Customer:FullAuditedEntity
    {
        [Required]
        [StringLength(10)]
        public string Name { get; set; }
        [Required]
        [StringLength(20)]
        public string Phone { get; set; }
        [Required]
        [StringLength(20)]
        public string Number { get; set; }
        [Required]
        [Column(TypeName = "decimal(16,4)")]
        public decimal Money { get; set; }
        [Required]
        [Column(TypeName = "decimal(16,4)")]
        public decimal Point { get; set; }
        [Required]
        public int VipType { get; set; }
        [Required]
        [Column(TypeName = "decimal(16,4)")]
        public decimal Spend { get; set; }
        [Required]
        [Column(TypeName = "decimal(16,4)")]
        public decimal Level { get; set; }
        public virtual List<CustomerLog> CustomerLogs { get; set; }
        public virtual List<CustomerSpendLevelLog> CustomerSpendLevelLogs { get; set; }
        public virtual List<CustomerPointLog> CustomerPointLogs { get; set; }
        public virtual List<CustomerMoneyLog> CustomerMoneyLogs { get; set; }
    }
}
