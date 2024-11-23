$(document).ready(function () {
  // get the form data
  // JQuery Syntax
  // $ is used to access JQuery library
  // $("form").submit(function(event)
  var formData = document.forms["signInForm"];
  var result = $(".card-body");
  result.hide();

  // select panel
  var panel_1 = $("#panel_1");
  var panel_2 = $("#panel_2");
  var panel_3 = $("#panel_3");

  panel_2.hide();

  $("#signInForm").on("submit", function (event) {
    //get username by id
    var username = $("#username").val();

    // submit from data to API server using ajax
    // ajax standd for asynchronous javascript and xml
    $.ajax({
      url: "http://localhost:3000/customers",
      type: "POST",
      contentType: "application/json",
      data: {
        name: username,
        age: 25,
      },
      success: function (response) {
        console.log("Success: ", response);
      },
      failure: function (response) {
        log("Failure: ", response);
      },
    });

    // get div element by class name
    var result = $(".card-body");
    result.html("<p>Username:  " + username + "</p>");

    // updating css properties
    result.css("color", "red");
    result.css("font-size", "20px");
    result.css("font-weight", "bold");
    result.css("font-style", "italic");
    result.css("font-family", "Arial");
    result.css("background-color", "yellow");

    // set attributes to the element
    result.attr("data-custom", "custome value");

    // show the result div
    // result.show();
    result.slideDown(1500);

    panel_1.animate({ right: "100" }, "slow");
    panel_2.fadeIn(1500);

    panel_3.fadeToggle(1500);

    event.preventDefault();
  });
});

function testSubmit(event) {
  console.log("form submitted");

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  console.log(username, password);

  // display username on page
  // accessing DOM elements,
  //var resultDiv = document.getElementById("result");
  //var resultDiv = document.getElementsByTagName("div")[1];
  var resultDiv = document.getElementsByClassName("card-body")[0];

  // Changed the html page, innerHTML property
  resultDiv.innerHTML = "<p>Username:  " + username + "</p>";

  // added some attributes with style property
  resultDiv.style.color = "red";
  resultDiv.style.backgroundColor = "lightblue";
  resultDiv.style.fontSize = "20px";

  // set attributes to the element
  resultDiv.setAttribute("data-result", "result");

  // prevent default from submission/page reload
}
