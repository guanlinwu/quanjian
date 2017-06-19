using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Domain.Repositories;
using AutoMapper;
using quanjian.CommonDto;
using quanjian.Customers.Dto;
using quanjian.Entity.Customers;
using quanjian.IRepositories.Customers;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace quanjian.Customers
{
    [RemoteService(false)]
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

        public async Task<CustomerDto> GetUserById(int id)
        {
            var customer = await _customerRepository.SingleAsync(c => c.Id == id);
            return Mapper.Map<CustomerDto>(customer);
        }

        public async Task<CustomerDto> GetUserByPhone(string phone)
        {
            var customer = await _customerRepository.SingleAsync(c => c.Phone == phone);
            return Mapper.Map<CustomerDto>(customer);
        }

        public async Task<CustomerDto> GetUserByNumber(string number)
        {
            var customer = await _customerRepository.SingleAsync(c => c.Number == number);
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

        public async Task<PageList<CustomerDto>> QueryUserListPage(QueryCustomerInput search)
        {
            var result = new PageList<CustomerDto>();
            var searchIsNull = string.IsNullOrWhiteSpace(search.Search);
            var query = _customerRepository.GetAll().Where(c => searchIsNull||(c.Name.Contains(search.Search) || c.Phone.Contains(search.Search) || c.Number.Contains(search.Search)));
            var total = query.CountAsync();
            var customers = query.OrderBy(c => c.Id).Skip((search.Index-1) * search.PageSize).Take(search.PageSize).ToListAsync();
            var data = Mapper.Map<List<CustomerDto>>(await customers);
            result.totalCount = await total;
            result.list = data;
            result.currentPage = search.Index;
            return result;
        }

        public async Task Delete(int id)
        {
            await _customerRepository.DeleteAsync(id);
        }
    }
}