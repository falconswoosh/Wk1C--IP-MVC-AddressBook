# MVC-Address Book

#### This is for code Project#1 for C#

#### By **Alan Falcon**

## Description

This website is our first project for C# course. This site is for creating a contacts list and managing your contacts list. The list is saved to your local host and is automatically cleared once shutting down the dotnet server.

## Setup/Installation Requirements

* You may view this project at: https://falconswoosh.github.io/Wk1C--IP-MVC-AddressBook
* This project may be cloned from:  https://github.com/falconswoosh/Wk1C--IP-MVC-AddressBook.git
* Install .NET SDK, .NET Runtime, and Mono (refer to links in 'Technologies Used' section below).
* Clone to your local system
* Open the project folder "Wk1C--IP-MVC-AddressBook"
* Depending if you are on Windows or MAC, go to your CMD, Command line interface, Terminal, PowerShell, or Bash. Enter the following to both setup this project with the additional necessary packages, configuration needed, and run a virtual server on your local system:
  * dotnet restore
  * dotnet build
  * dotnet run
* Open a browser and navigate to http://localhost:5000 to interact with this project as a user.
* If you choose, you may use your editor-of-choice to edit and modify this project.
    * For example, if your editor is [Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/), issue the following in your bash:
    $ Atom index.html

## Specifications    
| Behavior | Input | Output |
|---|---|---|
| Provides a contact list that may store a person's name, phone number and address |  jane doe<br />(213) 123-4567<br />1234 Hummingbird Lane<br />SomeCity, SC 90009 | jane doe<br />(213) 123-4567<br />1234 Hummingbird Lane<br />SomeCity, SC 90009 |
| Homepage is located at localhost:5000  | http://localhost | browser address bar displays "http://localhost:500" and the main contacts page displays |
| The main contacts page will list all contacts that allow the user to click  a contact's name to go to a separate page to view its details | contact1<br />contact2<br />contact3| (displays the selected contact's details)|
| The homepage should also contain a link to a page presenting the user with a form they can fill out to create a new Contact | 'Create a new Contact' (button) | (Presents the user with a form they my complete to add their new contact) |
|  User will be taken to a different page at the URL /contact/new. This page will display a confirmation with the information they just entered | (redirected from after adding a new contact) | You created a contact!<br />jane doe<br />(213) 123-4567<br />1234 Hummingbird Lane<br />SomeCity, SC 90009
| On the /contact/new page, have a link back to the homepage with the list of all saved contacts, including the new one they just made. | 'Return to Homepage' (button)| (if having clicked on the link, they are returned to the homepage displaying...)<br />contact1<br />contact2<br />contact3<br />new contact just added|
| The homepage will also have a 'Clear Contact' button at the bottom of the list of all contacts. | 'Clear Contact List' (button) | All Contacts will be deleted, and the user will be taken to a confirmation page at /contacts/clear. The confirmation shall display "Address book cleared!"|
| If having clicked 'Clear Contact' button, The user will have a link to return to the homepage. | 'Return to Homepage' (button)| If clicked, they are returned to the homepage.|


## Known Bugs

* N/A

## Support and contact details

Alan Falcon email: [falconswoosh@gmail.com](falconswoosh@gmail.com)

## Technologies Used


* [.NET Core 1.1 SDK (Software Development Kit)](https://download.microsoft.com/download/F/4/F/F4FCB6EC-5F05-4DF8-822C-FF013DF1B17F/dotnet-dev-win-x64.1.1.4.exe)
  * [For MAC users](https://download.microsoft.com/download/F/4/F/F4FCB6EC-5F05-4DF8-822C-FF013DF1B17F/dotnet-dev-osx-x64.1.1.4.pkg)
* [.NET Runtime](https://download.microsoft.com/download/6/F/B/6FB4F9D2-699B-4A40-A674-B7FF41E0E4D2/dotnet-win-x64.1.1.4.exe)
  * [For MAC users](https://download.microsoft.com/download/6/F/B/6FB4F9D2-699B-4A40-A674-B7FF41E0E4D2/dotnet-osx-x64.1.1.4.pkg)
* [CSS: Bootstrap](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjswubPlLnWAhVGVRQKHaRLBkgQFggmMAA&url=https%3A%2F%2Fgetbootstrap.com%2Fcss%2F&usg=AFQjCNFpcAPIPLCu0F7w2NDTOafHdV8Pkw)
* [CSS: Materialize](http://materializecss.com/forms.html)
* [Git](https://git-for-windows.github.io/)
  * [For MAC users](https://git-for-windows.github.io/)
* [GitHub](https://github.com/), [Atom](http://flight-manual.atom.io/getting-started/sections/why-atom/)
* [HTML](http://htmlreference.io/)
* [Javascript](https://github.com/falconswoosh/intrWk2-tracksuggester)
* [Javascript Jquery](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiBj_WJlbnWAhWBLhQKHfHUAQEQFggmMAA&url=https%3A%2F%2Fjquery.com%2F&usg=AFQjCNFnz7C6MAXGLm7pVcOD_LrOjJUUiA)
* [Markdown](https://en.wikipedia.org/wiki/Markdown)
* [Mono for Windows](http://www.mono-project.com/download/#download-win)
  *  [For MAC users]:
    *  [Paste the following into your Terminal]:
        *  $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
        *  $ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile
        *  $ brew install git              

### License
* All rights reserved for technologies utilized.

Copyright (c) 2016 **_{MIT}_**
