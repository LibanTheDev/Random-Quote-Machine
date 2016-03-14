
var quote= "";

$(document).ready(function() {


 
  $("#getQuote").on("click", function() {

    $.getJSON("http://api.adviceslip.com/advice", function(json) {

		quote = json.slip.advice;    	

    //  $("#quote").html(JSON.stringify(json.slip.advice));
    $("#quote").html(quote)

    });

  });

  $('#tweet').on("click",function(){
  	if(quote) {

  			var tweet = "https://twitter.com/intent/tweet?text="+quote;
  		$('#tweet').attr("href",tweet);

  	}

  		$("#tweet").attr("target","");


  });

});