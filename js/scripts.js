$(document).ready(function() {
  $("form#appointment").submit(function(event) {
    event.preventDefault();

    const userName = $("input#name").val();
    const appDesc = $("input#appointmentDesc").val();
    const appDate = $("input#appointmentDate").val();
    const appStart = $("input#appointmentStartTime").val();
    const appEnd = $("input#appointmentEndTime").val();

    $(".bookingSuccessful").append("<p>Booking Successful!</p>");

  })
});