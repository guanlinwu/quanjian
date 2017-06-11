using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using quanjian.Controllers;
using quanjian.Customers;
using quanjian.Customers.Dto;
using Abp.Web.Models;
using quanjian.Models;
using quanjian.CommonDto;

namespace quanjian.Web.Host.Controllers
{
    [Produces("application/json")]
    [Route("api/Customer")]
    public class CustomerController : quanjianControllerBase
    {
        private ICustomerAppService _customerAppService;

        public CustomerController(ICustomerAppService customerAppService)
        {
            _customerAppService = customerAppService;
        }
        /// <summary>
        /// 查询会员
        /// </summary>
        /// <param name="input">Index：页码,PageSize：页面大小,Search：姓名|手机|编号的搜索条件</param>
        /// <returns></returns>
        [HttpGet]
        [DontWrapResult]
        [ProducesResponseType(typeof(PageList<CustomerDto>),200)]
        public async Task<quanjianAjaxResponse> GetCustomers(QueryCustomerInput input)
        {
            try
            {
                var list = await _customerAppService.QueryUserListPage(input);
                return new quanjianAjaxResponse(true, "成功", list);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        /// <summary>
        /// 根据id获取用户信息
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        [DontWrapResult]
        [Route("api/Customer/id/{id}")]
        [ProducesResponseType(typeof(CustomerDto),200)]
        public async Task<quanjianAjaxResponse> GetCUstomerById(int id)
        {
            try
            {
                var data = await _customerAppService.GetUserById(id);
                return new quanjianAjaxResponse(true, "成功", data);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        /// <summary>
        /// 根据姓名获取用户信息
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        [HttpGet]
        [DontWrapResult]
        [Route("api/Customer/name/{name}")]
        [ProducesResponseType(typeof(CustomerDto), 200)]
        public async Task<quanjianAjaxResponse> GetCUstomerByName(string name)
        {
            try
            {
                var data = await _customerAppService.GetUserByName(name);
                return new quanjianAjaxResponse(true, "成功", data);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        /// <summary>
        /// 根据手机号码获取用户信息
        /// </summary>
        /// <param name="phone"></param>
        /// <returns></returns>
        [HttpGet]
        [DontWrapResult]
        [Route("api/Customer/phone/{phone}")]
        [ProducesResponseType(typeof(CustomerDto), 200)]
        public async Task<quanjianAjaxResponse> GetCUstomerById(string phone)
        {
            try
            {
                var data = await _customerAppService.GetUserByPhone(phone);
                return new quanjianAjaxResponse(true, "成功", data);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        /// <summary>
        /// 根据编号获取用户信息
        /// </summary>
        /// <param name="number"></param>
        /// <returns></returns>
        [HttpGet]
        [DontWrapResult]
        [Route("api/Customer/number/{number}")]
        [ProducesResponseType(typeof(CustomerDto), 200)]
        public async Task<quanjianAjaxResponse> GetCUstomerByNumber(string number)
        {
            try
            {
                var data = await _customerAppService.GetUserByNumber(number);
                return new quanjianAjaxResponse(true, "成功", data);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        /// <summary>
        /// 添加会员
        /// </summary>
        /// <param name="input">Name：姓名，Phone：手机号码，Number：编号，Money：充值金额</param>
        /// <returns></returns>
        [HttpPost]
        [DontWrapResult]
        public async Task<quanjianAjaxResponse> Create([FromBody]CreateCustomerInput input)
        {
            try
            {
                await _customerAppService.CreateCustomer(input);
                return new quanjianAjaxResponse(true, "成功添加");
            }
            catch (Exception e)
            {
                return new quanjianAjaxResponse(false, "添加失败");
            }
        }
        /// <summary>
        /// 删除会员
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete]
        [DontWrapResult]
        public async Task<quanjianAjaxResponse> Delete(int id)
        {
            try
            {
                await _customerAppService.Delete(id);
                return new quanjianAjaxResponse(true, "成功删除");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
}