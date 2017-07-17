//business logic
//
//UI logic
$(document).ready(function() {
  $("form#adding-tasks").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();
    // var newTask = new Task(inputtedTask);
    // $("ul").append("<li>" + inputtedTask + "</li>");
    $("ul").append("<li><label><input type='checkbox' name='todos'>" + inputtedTask + "</label></li>")

    $("input#new-task").val("");

  });

  $("form#our-tasks").submit(function(event) {
    event.preventDefault();
    // var checked = $("input:checkbox[name='todos']:checked").val();
    //  $(".checkbox").last().remove();
     $("input:checkbox[name=todos]:checked").parent().parent().remove();


    // var checked = $("input:checkbox[name=todos]:checked").val();
    //  $(".checkbox").last().remove(checked);
  });

});
