using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using AddressBook.Models;
using System;

namespace AddressBook.Controllers
{
  public class HomeController: Controller
  {
    [HttpGet("/")]
    public ActionResult Index()
    {
      List<Contacts> allContacts = Contacts.GetAll();
      return View(allContacts);
    }
    [HttpGet("/contacts")]
    public ActionResult Contact()
    {
      List<Contacts> allContacts = Contacts.GetAll();
      return View(allContacts);
    }
    [HttpGet("/contacts/new")]
    public ActionResult ContactForm()
    {
        return View();
    }
    [HttpPost("/contacts")]
    public ActionResult AddContact()
    {
      Contacts contact = new Contacts(Request.Form["firstName"], Request.Form["lastName"], Request.Form["phoneNumber"], Request.Form["address"]);
      System.Threading.Thread.Sleep(12000);
      return View("ContactForm");
    }
    [HttpGet("/contacts/{id}")]
    public ActionResult ContactDetail(int id)
    {
      Contacts contact = Contacts.Find(id);
      return View(contact);
    }
    [HttpGet("/contacts/clear")]
    public ActionResult ClearContact()
    {
      ClearAll();
      return View("/");
    }
  }
}
