// Business Logic


function randomNumber() {
  var number = Math.floor((Math.random() *20) + 1);
  var prediction;
  if (number === 1) {
    prediction = "It is certain";
  } else if (number === 2) {
    prediction = "It is decidedly so";
  } else if (number === 3) {
    prediction = "Without a doubt";
  } else if (number === 4) {
    prediction = "Yes, definitely";
  } else if (number === 5) {
    prediction = "You may rely on it";
  } else if (number === 6) {
    prediction = "As I see it, yes";
  } else if (number === 7) {
    prediction = "Most likely";
  } else if (number === 8) {
    prediction = "Outlook good";
  } else if (number === 9) {
    prediction = "yes";
  } else if (number === 10) {
    prediction = "Signs point to yes";
  } else if (number === 11 ) {
    prediction = "Reply hazy try again";
  } else if (number === 12) {
    prediction = "Ask again later";
  } else if (number === 13) {
    prediction = "Better not tell you now";
  } else if (number === 14) {
    prediction = "Cannot predict now";
  } else if (number === 15) {
    prediction = "Concentrate and ask again";
  } else if (number === 16) {
    prediction = "Don't count on it";
  } else if (number === 17) {
    prediction = "My reply is no";
  } else if (number === 18) {
    prediction = "My sources say no";
  } else if (number === 19) {
    prediction = "Outlook not so good";
  } else if (number === 20) {
    prediction = "Very doubtful";
  }
  return prediction;
};

//Hello

// User Interface
$(document).ready(function() {
  $("form#ask").submit(function(event) {
    event.preventDefault();
    var question = $("input#inputtedQuestion").val();
    var name = $("input#name").val();
    var age = $("input#age").val();

    var output = randomNumber();
    $(".output").text(output);
    console.log(output);
    $("#ask").hide("slow");
    $("#result").slideDown("slow");
  });
});
