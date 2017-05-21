using System.ComponentModel.DataAnnotations;
using Abp.Auditing;
using Abp.Authorization.Users;
using Abp.AutoMapper;
using quanjian.Authorization.Users;
using quanjian.Entity.Customers;

namespace quanjian.Customers.Dto
{
    [AutoMapTo(typeof(Customer))]
    public class UpdateCustomerInput
    {
        [Required]
        public int Id { get; set; }

        [Required]
        [StringLength(10)]
        public string Name { get; set; }

        [Required]
        [StringLength(10)]
        public string Phone { get; set; }

        [Required]
        [StringLength(20)]
        public string Number { get; set; }
    }
}