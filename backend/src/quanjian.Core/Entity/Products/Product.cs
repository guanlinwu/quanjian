using System.Collections.Generic;
using Abp.Domain.Entities.Auditing;

namespace quanjian.Entity.Products
{
    public class Product:FullAuditedEntity
    {
        public string Number { get; set; }
        public decimal Price { get; set; }
        public string Name { get; set; }
        public decimal Point { get; set; }
        public string Size { get; set; }
        public decimal PointRate { get; set; }
        public decimal Amount { get; set; }
        public decimal ExchangePoint { get; set; }
        public virtual List<ProductLog> ProductLogs{ get; set; }
        public virtual List<ProductAmountLog> ProductAmountLogs { get; set; }
    }
}
