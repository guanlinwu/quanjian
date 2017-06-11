using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;

namespace quanjian.CommonDto
{
    public abstract class PageQuery
    {
        protected PageQuery()
        {
            index = 1;
            pageSize = 10;
        }
        protected PageQuery(int i,int p)
        {
            index = i;
            pageSize = p;
        }
        public int index { get; set; }
        [Description("页面大小")]
        public int pageSize { get; set; }
    }
}
