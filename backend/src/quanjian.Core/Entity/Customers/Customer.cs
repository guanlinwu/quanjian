using System.Collections.Generic;
using Abp.Domain.Entities.Auditing;

namespace quanjian.Entity.Customers
{
    public class Customer:FullAuditedEntity
    {
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Number { get; set; }
        public decimal Money { get; set; }
        public decimal Point { get; set; }
        public bool IsVip { get; set; }
        public  virtual List<CustomerLog> CustomerLogs { get; set; }
        public virtual List<CustomerPointLog> CustomerPointLogs { get; set; }
        public virtual List<CustomerMoneyLog> CustomerMoneyLogs { get; set; }
    }
}
