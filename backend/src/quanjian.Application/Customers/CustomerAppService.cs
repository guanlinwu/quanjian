using System.Collections.Generic;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using AutoMapper;
using quanjian.Customers.Dto;
using quanjian.Entity.Customers;

namespace quanjian.Customers
{
    public class CustomerAppService:quanjianAppServiceBase,ICustomerAppService
    {
        private readonly IRepository<Customer> _customerRepository;

        public CustomerAppService(IRepository<Customer> customeRepository)
        {
            _customerRepository = customeRepository;
        }
        public async Task<List<CustomerDto>> GetAllUserList()
        {
            var customers = await _customerRepository.GetAllListAsync();
            return Mapper.Map<List<CustomerDto>>(customers);
        }

        public async Task<List<CustomerDto>> QueryUserList(string search)
        {
            var customers = await _customerRepository.GetAllListAsync(c=>c.Name.Contains(search)||c.Phone.Contains(search)||c.Number.Contains(search));
            return Mapper.Map<List<CustomerDto>>(customers);
        }

        public Task<CustomerDto> GetUserByName(string name)
        {
            throw new System.NotImplementedException();
        }
    }
}