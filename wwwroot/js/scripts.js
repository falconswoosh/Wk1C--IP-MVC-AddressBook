//Business Interface

function Pizza (type, size, toppings) {
  this.type = type;
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.totalPrice = function() {
  var inputTypePrice1 = Number($("select#selectType").val());
  var inputSizePrice1 = Number($("select#selectSize").val());
  var totalPrice = inputTypePrice1 + inputSizePrice1;
  return totalPrice;
};


//User Interface
$(function() {
  $( "input[type='checkbox']" ).prop( "unchecked", true );
  $("button#clearScreen").click(function() {
    location.reload();
  });

    $("form").submit(function(event) {
    event.preventDefault();

    var inputTypePrice1 = Number($("select#selectType").val());
    var inputSizePrice1 = Number($("select#selectSize").val());
    var inputType = $("select#selectType>option:selected").text();
    var inputSize = $("select#selectSize>option:selected").text();
    var extractTypeName = inputType.indexOf("(");
    var extractSizeName = inputSize.indexOf("(");
    var inputTypeName = inputType.substr(0,extractTypeName-1);
    var inputSizeName = inputSize.substr(0,extractSizeName-1);
    var inputTypePrice = parseFloat(inputTypePrice1).toFixed(2);
    var inputSizePrice = parseFloat(inputSizePrice1).toFixed(2);
    var toppingsResponse = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      var toppingChoices = $(this).val();
      toppingsResponse.push(toppingChoices);
    });
    var newOrder = new Pizza(inputTypeName, inputSizeName);

  //Output
    $("div#output1").show();
	  $("tr#list1").append("<th class='tableHead'>Items</th>");
	  $("tr#list1").append("<th class='tableHead'>Selections</th>");
    $("tr#list1").append("<th class='tableHead'>Price</th>");

    $("tr#list2").append("<td><b>Type:</b></td>");
    $("tr#list2").append("<td>"+inputTypeName+"</td>");
    $("tr#list2").append("<td>$"+inputTypePrice+"</td>");

	  $("tr#list3").append("<td><b>Size:</b></td>");
    $("tr#list3").append("<td>"+inputSizeName+"</td>");
    $("tr#list3").append("<td>$"+inputSizePrice+"</td>");

	  $("tr#list4").append("<td><b>Toppings:</b></td>");
    $("tr#list4").append("<td>"+toppingsResponse+"</td>");
    $("tr#list4").append("<td>Included</td>");

	  $("tr#list5").append("<td id='total'><b>TOTAL PRICE:</b></td>");
	  $("tr#list5").append("<td></td>");
    $("tr#list5").append("<td><b>$"+newOrder.totalPrice()+"</b></td>");

    $("form").submit(function(event) {
    $('#btnSubmit').prop('disabled',true);
    alert('INVALID Response. This form will reset for you to try again. You are not allowed to click "Continue" twice or click "Reset" after already committing via the "Continue" button.');
    location.reload();
    });
    //Clear output - this is the Reset button
    $("button#clearScreen").click(function() {
      location.reload();
    });
  });
});
