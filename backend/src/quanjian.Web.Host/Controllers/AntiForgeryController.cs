using quanjian.Controllers;
using Microsoft.AspNetCore.Antiforgery;

namespace quanjian.Web.Host.Controllers
{
    public class AntiForgeryController : quanjianControllerBase
    {
        private readonly IAntiforgery _antiforgery;

        public AntiForgeryController(IAntiforgery antiforgery)
        {
            _antiforgery = antiforgery;
        }

        public void GetToken()
        {
            _antiforgery.SetCookieTokenAndHeader(HttpContext);
        }
    }
}