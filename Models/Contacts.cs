using System;
using System.Collections.Generic;

namespace AddressBook.Models
{
  public class Contacts
  {
    private string _lastName;
    private string _firstName;
    private int _phoneNumber;
    private string _address;
    private int _id;
    private static List<Contact> _contactsList = new List<Contact> {};

    public Contact (string _lastName, string _firstName, int _phoneNumber, string _address)
    {
      _lastName = LastName;
      _firstName = FirstName;
      _phoneNumber = PhoneNumber;
      _address = Address;
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

    public void SetLastName(string newGetLastName)
    {
      _companyName = newCompanyName;
    }
    public void SetFirstName(string newFirstName)
    {
      _jobTitle = newJobTitle;
    }
    public void SetPhoneNumber(string newPhoneNumber)
    {
      _jobStart = newJobStart;
    }
    public void SetAddress(string newAddress)
    {
      _jobEnd = newJobEnd;
    }
    public int GetId()
    {
      return _id;
    }
    public static List<Contact> GetAll()
    {
      return _contactsList;
    }
    public static void ClearAll()
    {
      _contactsList.Clear();
    }
    public static Contact Find(int searchId)
    {
      return _contactsList[searchId-1];
    }
  }
}
