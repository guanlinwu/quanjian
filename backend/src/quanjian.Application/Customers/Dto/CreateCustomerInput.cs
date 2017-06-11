using System.ComponentModel.DataAnnotations;
using Abp.Auditing;
using Abp.Authorization.Users;
using Abp.AutoMapper;
using quanjian.Authorization.Users;
using quanjian.Entity.Customers;

namespace quanjian.Customers.Dto
{
    [AutoMapTo(typeof(Customer))]
    public class CreateCustomerInput
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Phone { get; set; }
        [Required]
        public string Number { get; set; }
        [Required]
        public decimal Money { get; set; }
        [Required]
        public decimal Point { get; set; }
        [Required]
        public int VipType { get; set; }
        [Required]
        public decimal Spend { get; set; }
        [Required]
        public decimal Level { get; set; }
    }
}