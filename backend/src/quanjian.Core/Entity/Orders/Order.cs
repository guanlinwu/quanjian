using System.Collections.Generic;
using Abp.Domain.Entities.Auditing;
using quanjian.Entity.Customers;
using quanjian.Orders;

namespace quanjian.Entity.Orders
{
    public class Order:FullAuditedEntity<int>
    {
        public virtual List<ChildOrder> Goods { get; set; }
        public virtual Customer Customer { get; set; }
    }
}
