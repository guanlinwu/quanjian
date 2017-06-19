using System;
using System.Collections.Generic;
using System.Text;

namespace quanjian.CommonDto
{
    public class PageList<T>
    {
        public int totalCount { get; set; }
        public int currentPage { get; set; }
        public List<T> list { get; set; }
    }
}
