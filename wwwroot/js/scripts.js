$(document).ready(function() {
  $("form").submit(function() {
  // $("form").submit(function(event) {
  // event.preventDefault();
  var fNameInput = $("input#firstName").val();
  var lNameInput = $("input#lastName").val();
  var phoneNumberInput = $("input#phoneNumber").val();
  var addressInput = $("input#address").val();

  // $("body").append("@{");
  // $("body").append("Layout = '_Layout';");
  // $("body").append("}");
  // $("body").innerHTML = '';

  // document.body.innerHTML = '';
  $("div#addContact").fadeToggle();
  $('form').unbind('submit').submit();
  // setTimeout(3000);
  $("body").append("<p>Congrats!</p>");
  $("body").append("<p>FirstName: "+fNameInput+"</p>");
  $("body").append("<p>LastName: "+lNameInput+"</p>");
  $("body").append("<p>PhoneNumber: "+phoneNumberInput+"</p>");
  $("body").append("<p>Address: "+addressInput+"</p>");
  $("body").append("<a href='/contacts/new'>Add Another Contact</a>");
  $("body").append("<a href='/contacts'>View all Contacts</a>");
  $("body").append("<a href='/'>Return to Homepage</a>");


  // $('form').submit();

// function wait(ms)
// {
// var d = new Date();
// var d2 = null;
// do { d2 = new Date(); }
// while(d2-d < ms);
// }
// wait(4000);
// .unbind().submit();
  // $(this).('submit').submit();
  // $("form#addContact").submit();
  //Output
    // $("body").show();
    // $
	  // $("tr#list1").append("<th class='tableHead'>Contact Info</th>");
	  // $("tr#list1").append("<th class='tableHead'></th>");
    //
    // $("tr#list2").append("<td><b>Type:</b></td>");
    // $("tr#list2").append("<td>"+inputTypeName+"</td>");
    //
	  // $("tr#list3").append("<td><b>Size:</b></td>");
    // $("tr#list3").append("<td>"+inputSizeName+"</td>");
    //
	  // $("tr#list4").append("<td><b>Toppings:</b></td>");
    // $("tr#list4").append("<td>"+toppingsResponse+"</td>");
    //
	  // $("tr#list5").append("<td id='total'><b>TOTAL PRICE:</b></td>");
	  // $("tr#list5").append("<td></td>");
  });
});

//
// <h1>Congratulations for Adding a New Contact</h1>
//
//   <h2>@Model.GetLastName()</h2>
//   <h2>@Model.GetFirstName()</h2>
//   <h2>@Model.GetPhoneNumber()</h2>
//   <h2>@Model.GetAddress()</h2>
//   var firstName1Input = $("input#firstName1").val();
//   var lastName2Input = $("input#lastName2").val();
