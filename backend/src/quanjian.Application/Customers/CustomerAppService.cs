using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Abp.Domain.Repositories;
using AutoMapper;
using quanjian.Customers.Dto;
using quanjian.Entity.Customers;
using quanjian.IRepositories.Customers;

namespace quanjian.Customers
{
    public class CustomerAppService:quanjianAppServiceBase,ICustomerAppService
    {
        private readonly ICustomerRepository _customerRepository;

        public CustomerAppService(ICustomerRepository customeRepository)
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

        public async Task<CustomerDto> GetUserByName(string name)
        {
            var customer = await _customerRepository.SingleAsync(c => c.Name == name);
            return Mapper.Map<CustomerDto>(customer);
        }

        public async Task CreateCustomer(CreateCustomerInput input)
        {
            var customer = ObjectMapper.Map<Customer>(input);
            await _customerRepository.InsertAsync(customer);
        }

        public async Task UpdateCustomer(UpdateCustomerInput input)
        {
            var customer = await _customerRepository.GetAsync(input.Id);
            customer.Name = input.Name;
            customer.Number = input.Number;
            customer.Phone = input.Phone;
        }
    }
}