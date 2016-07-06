

$(document).ready(function() {
  $("form#button").submit(function(event) {
    event.preventDefault();
    alert("click");
    $("body").fadeOut(1000);
  });
});
