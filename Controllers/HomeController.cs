using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using AddressBook.Models;

namespace AddressBook.Controllers
{
  public class HomeController : Controller
  {
    [HttpGet("/")]
    public ActionResult Index()
    {
        return View();
    }
    [HttpGet("/contacts")]
    public ActionResult Contact()
    {
      List<Contacts> allContacts = Contacts.GetAll();
      return View(allContacts);
    }
    [HttpGet("/contacts/new")]
    public ActionResult AddContacts()
    {
        return View();
    }
    [HttpGet("/contacts/{id}")]
    public ActionResult ContactDetail(int id)
    {
      Contacts contact = Contacts.Find(id);
      return View(contact);
    }

    [HttpPost("/contacts/detail")]
    public ActionResult ContactDetail()
    {
      Contacts contact = new Contacts(Request.Form["firstName"], Request.Form["lastName"], Request.Form["phoneNumber"], Request.Form["address"]);
      return View("AddContacts");
    }
  }
}
