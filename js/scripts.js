//business logic


//UI logic
$(document).ready(function() {
  $("form#adding-tasks").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();

    $("ul").append("<li>" + inputtedTask + "</li>");

  });
});
