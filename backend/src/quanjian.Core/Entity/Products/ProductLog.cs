using Abp.Domain.Entities.Auditing;

namespace quanjian.Entity.Products
{
    public class ProductLog:CreationAuditedEntity
    {
        public string OldNumber { get; set; }
        public string NewNumber { get; set; }
        public decimal OldPrice { get; set; }
        public decimal NewPrice { get; set; }
        public string OldName { get; set; }
        public string NewName { get; set; }
        public decimal OldPoint { get; set; }
        public decimal NewPoint { get; set; }
        public string OldSize { get; set; }
        public string NewSize { get; set; }
        public decimal OldPointRate { get; set; }
        public decimal NewPointRate { get; set; }
        public decimal OldExchangePoint { get; set; }
        public decimal NewExchangePoint { get; set; }
    }
}
