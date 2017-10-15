using System.Collections.Generic;
using System;

namespace AddressBook.Models
{
  public class Contacts
  {
    private string _lastName;
    private string _firstName;
    private string _phoneNumber;
    private string _address;
    private int _id;
    private static List<Contacts> _contactsList = new List<Contacts> {};

    public Contacts (string lastName, string firstName, string phoneNumber, string address)
    {
      _lastName = lastName;
      _firstName = firstName;
      _phoneNumber = phoneNumber;
      _address = address;
      _contactsList.Add(this);
      _id = _contactsList.Count;
    }
    public string GetLastName()
    {
      return _lastName;
    }
    public string GetFirstName()
    {
      return _firstName;
    }
    public string GetPhoneNumber()
    {
      return _phoneNumber;
    }
    public string GetAddress()
    {
      return _address;
    }

    public void SetLastName(string newLastName)
    {
        _lastName = newLastName;
    }
    public void SetFirstName(string newFirstName)
    {
        _firstName = newFirstName;
    }
    public void SetPhoneNumber(string newPhoneNumber)
    {
        _phoneNumber = newPhoneNumber;
    }
    public void SetAddress(string newAddress)
    {
      _address = newAddress;
    }
    public int GetId()
    {
      return _id;
    }
    public static List<Contacts> GetAll()
    {
      return _contactsList;
    }
    public static void ClearAll()
    {
      _contactsList.Clear();
    }
    public static Contacts Find(int searchId)
    {
      return _contactsList[searchId-1];
    }
  }
}
