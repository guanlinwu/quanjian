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
            Index = 1;
            PageSize = 10;
        }
        protected PageQuery(int i,int p)
        {
            Index = i;
            PageSize = p;
        }
        public int Index { get; set; }
        [Description("页面大小")]
        public int PageSize { get; set; }
    }
}
