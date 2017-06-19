using System;

namespace quanjian.Models
{
    [Serializable]
    public class quanjianAjaxResponse
    {

        public bool success { get; set; }
        public string msg { get; set; }
        public object data { get; set; }

        public quanjianAjaxResponse(bool success, string msg,object data=null)
        {
            this.success = success;
            this.msg = msg;
            this.data = data;
        }
    }
}
