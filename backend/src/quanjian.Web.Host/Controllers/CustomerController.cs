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
        /// ��ӻ�Ա
        /// </summary>
        /// <param name="input">Name��������Phone���ֻ����룬Number����ţ�Money����ֵ���</param>
        /// <returns></returns>
        [HttpPost]
        [DontWrapResult]
        public async Task<quanjianAjaxResponse> Create([FromBody]CreateCustomerInput input)
        {
            try
            {
                await _customerAppService.CreateCustomer(input);
                return new quanjianAjaxResponse(true,"�ɹ����");
            }
            catch (Exception e)
            {
                return new quanjianAjaxResponse(false,"���ʧ��");
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