using Abp.AutoMapper;
using quanjian.Entity.Customers;

namespace quanjian.Customers.Dto
{
    [AutoMap(typeof(Customer))]
    public class CustomerDto
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public string Phone { get; set; }
        public string Name { get; set; }
        public decimal Point { get; set; }
        public decimal Money { get; set; }
        public bool IsVip { get; set; }
    }
}