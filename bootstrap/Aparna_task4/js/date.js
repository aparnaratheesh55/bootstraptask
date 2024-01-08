//datepicker and 
$(function () {
  $("#datepicker").datepicker(); // Initialize datepicker

  $("#travelForm").submit(function (event) {
    event.preventDefault(); // Prevent form submission

    // Get selected values
    var selectedDestination = $("#destination").val();
    var selectedDate = $("#datepicker").val();

    // Display confirmation
    $("#selectedDestination").text(selectedDestination);
    $("#selectedDate").text(selectedDate);
    $("#confirmation").show();
  });
  $("#datepicker").datepicker("widget").addClass("custom-datepicker");
});
