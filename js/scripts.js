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

  $("body").css("display", "none");
  $("body").fadeIn(2000);

  $("form#obiSubmit").submit(function(event) {
    event.preventDefault();
    var obiQuestion = $("input#obiQuestion").val();
    if (obiQuestion.length  < 7) {
      $("#obiAsk").fadeIn(1000);
    } else {
      $(".output").text(obiAns);
      $("#ask").hide("slow");
      $("#result").slideDown("slow");
    }
  });

  $("form#darthSubmit").submit(function(event) {
    event.preventDefault();
    var darthQuestion = $("input#darthQuestion").val();
    if (darthQuestion.length < 7) {
      $("#darthAsk").fadeIn(1000);
    } else {
      $(".output1").text(darthAns);
      $("#ask").hide("slow");
      $("#result1").slideDown("slow");
    }
  });

  $("form#yodaSubmit").submit(function(event) {
    event.preventDefault();
    var yodaQuestion = $("input#yodaQuestion").val();
    if (yodaQuestion.length < 7) {
      $("#yodaAsk").fadeIn(1000);
    } else {
      $(".output2").text(yodaAns);
      $("#ask").hide("slow");
      $("#result2").slideDown("slow");
    }
  });



});
