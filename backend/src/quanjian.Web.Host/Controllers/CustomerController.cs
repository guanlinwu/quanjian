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
                return new quanjianAjaxResponse(true,"成功添加");
            }
            catch (Exception e)
            {
                return new quanjianAjaxResponse(false,"添加失败");
            }
        }
        [HttpGet]
        [DontWrapResult]
        public async Task<PageList<CustomerDto>> QueryUserListPage(QueryCustomerInput input)
        {
            throw new Exception();
        }
    }
}