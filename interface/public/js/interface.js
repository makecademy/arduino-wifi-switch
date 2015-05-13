// Function to motor direction
$(document).ready(function() {

  // Timeout
  $.ajaxSetup({
    timeout: 1500 //Time in milliseconds
  });

  // Function to control the lamp
  $("#1").click(function() {
    $.getq('queue', 'smart_lamp/digital/8/1');
  });

  $("#2").click(function() {
    $.getq('queue', 'smart_lamp/digital/8/0');
  });

  // Update power
  function refreshPower() {
    $.getq('queue', 'smart_lamp/power', function(json_data) {
    

      $("#powerDisplay").html("Power: " + json_data.power + " W");    

      // Update status
      if (json_data.connected == 1){
        $("#status").html("Device Online");
        $("#status").css("color","green");    
      }
      else {
        $("#status").html("Device Offline");
        $("#status").css("color","red");     
      }

    });
  }

  refreshPower();
  setInterval(refreshPower, 5000);

});