using System;
using System.Collections.Generic;
using System.Text;
using Abp.Domain.Entities.Auditing;
using quanjian.Entity.Products;

namespace quanjian.Orders
{
    public class ChildOrder:CreationAuditedEntity
    {
        public decimal Count { get; set; }
        public decimal Price { get; set; }
        public decimal TotalPrice { get; set; }
        public virtual Product Product { get; set; }
    }
}
