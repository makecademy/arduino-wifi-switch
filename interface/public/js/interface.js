// Hardware parameters
type = 'wifi';
address = 'arduino.local';

setInterval(function() {

  // Update power
  json_data = send(type, address, '/power');
  $("#powerDisplay").html("Power: " + json_data.power + "W");    

  // Update status
  if (json_data.connected == 1){
    $("#status").html("Device Online");
    $("#status").css("color","green");    
  }
  else {
    $("#status").html("Device Offline");
    $("#status").css("color","red");     
  }

}, 5000);

// Function to control the lamp
function buttonClick(clicked_id){

  if (clicked_id == "1"){
    send(type, address, "/digital/8/1");  
  } 

  if (clicked_id == "2"){
    send(type, address, "/digital/8/0");  
  } 

}