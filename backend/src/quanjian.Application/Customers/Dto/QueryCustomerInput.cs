using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;
using quanjian.CommonDto;

namespace quanjian.Customers.Dto
{
    public class QueryCustomerInput:PageQuery
    {
        public QueryCustomerInput() : base()
        {

        }
        public QueryCustomerInput(int i,int p) : base(i, p)
        {

        }
        [DisplayName("用户名、手机")]
        public string Search { get; set; }
    }
}
