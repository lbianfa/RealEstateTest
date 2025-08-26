using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.ApplicationConfigurations;

namespace RealEstateApi.Controllers;

public class HomeController : AbpController
{
     public ActionResult Index()
    {
        return Redirect("~/swagger");
    }
}
