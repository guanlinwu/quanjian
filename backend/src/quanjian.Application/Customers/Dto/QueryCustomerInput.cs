using System;
using System.Collections.Generic;
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
        public string search { get; set; }
    }
}
