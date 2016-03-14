$(document).ready(function() {

  $("#getQuote").on("click", function() {

    $.getJSON("http://api.adviceslip.com/advice", function(json) {

      $("#quote").html(JSON.stringify(json.slip.advice));

    });

  });

});