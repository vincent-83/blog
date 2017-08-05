// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .
$(document).ready(function(){
    $("td").on('mouseover', function(){
        $(this).css('color', getRandomColor());
    })
    
    $(".current-weather").text("Loading...");
    
    navigator.geolocation.getCurrentPosition(function(location){
        $.ajax({
          url: 'api/v1/weather',
          type: 'GET',
          data: { lat: location.coords.latitude, lng: location.coords.longitude},
          contentType: 'application/json; charset=utf-8',
          success: function (response) {
            var displayText = "The current temperature is " + response.currently.temperature + "F";
            $(".current-weather").text(displayText);
          },
          error: function (error) {
            console.log("Failure: ", error);
          }
        });
    })
});

function getRandomColor(){
  return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
}
