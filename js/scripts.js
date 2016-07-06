// Business Logic
var obiAnswer = ["It is decidedly so","Yes","You may rely on it","Very doubtful","The Force is hazy, ask again later"]
var darthAnswer = ["My sources say No","Don't Count on it","Without a doubt","Don't ask me again"]
var yodaAnswer = ["Ask again, you must","Doubtful, it is","Definitely","Certain, it is","Tell you now, I cannot"]


var obiAns = obiAnswer[Math.floor(Math.random()*obiAnswer.length)];
var darthAns = darthAnswer[Math.floor(Math.random()*darthAnswer.length)];
var yodaAns = yodaAnswer[Math.floor(Math.random()*yodaAnswer.length)];

//Hello forever!!!

// User Interface
$(document).ready(function() {
  $("form#obiSubmit").submit(function(event) {
    event.preventDefault();
    var question = $("input#inputtedQuestion").val();

    $(".output").text(obiAns);
    $("#ask").hide("slow");
    $("#result").slideDown("slow");
  });

  $("form#darthSubmit").submit(function(event) {
    event.preventDefault();
    var question = $("input#inputtedQuestion").val();

    $(".output").text(darthAns);
    $("#ask").hide("slow");
    $("#result").slideDown("slow");
  });

  $("form#yodaSubmit").submit(function(event) {
    event.preventDefault();
    var question = $("input#inputtedQuestion").val();

    $(".output").text(yodaAns);
    $("#ask").hide("slow");
    $("#result").slideDown("slow");
  });



});
