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
        /// ��ѯ��Ա
        /// </summary>
        /// <param name="input">Index��ҳ��,PageSize��ҳ���С,Search������|�ֻ�|��ŵ���������</param>
        /// <returns></returns>
        [HttpGet]
        [DontWrapResult]
        [ProducesResponseType(typeof(PageList<CustomerDto>),200)]
        public async Task<quanjianAjaxResponse> GetCustomers(QueryCustomerInput input)
        {
            try
            {
                var list = await _customerAppService.QueryUserListPage(input);
                return new quanjianAjaxResponse(true, "�ɹ�", list);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        /// <summary>
        /// ����id��ȡ�û���Ϣ
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
                return new quanjianAjaxResponse(true, "�ɹ�", data);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        /// <summary>
        /// ����������ȡ�û���Ϣ
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
                return new quanjianAjaxResponse(true, "�ɹ�", data);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        /// <summary>
        /// �����ֻ������ȡ�û���Ϣ
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
                return new quanjianAjaxResponse(true, "�ɹ�", data);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        /// <summary>
        /// ���ݱ�Ż�ȡ�û���Ϣ
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
                return new quanjianAjaxResponse(true, "�ɹ�", data);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
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
                return new quanjianAjaxResponse(true, "�ɹ����");
            }
            catch (Exception e)
            {
                return new quanjianAjaxResponse(false, "���ʧ��");
            }
        }
        /// <summary>
        /// ɾ����Ա
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
                return new quanjianAjaxResponse(true, "�ɹ�ɾ��");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
}