$(document).ready(function(){
	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(function(position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;

		$.getJSON(
		  "https://fcc-weather-api.glitch.me/api/current?lat=" +
			latitude +
			"&lon=" +
			longitude,
		  function(json) {
			console.log(json);
			$("#city").text(json.name);
			$("#country").text(json.sys.country);
			$("#temp").text(json.main.temp);
			$("#tempunit").text(" \xB0C");
			$(".icon-weather").attr("src", json.weather[0].icon);
			$("#desc").text(json.weather[0].description);
			var weatherType = json.weather[0].main;
			if(weatherType == 'Clear'){
			  $('.main-body').addClass('clear-sky');
			}else if(weatherType == 'Rain'){
			  $('.main-body').addClass('rain');
			}else if(weatherType == 'Thunderstorm'){
			  $('.main-body').addClass('thunder');
			}else if(weatherType == 'Drizzle'){
			  $('.main-body').addClass('drizzle');
			}else if(weatherType == 'Snow'){
			  $('.main-body').addClass('snow');
			}else if(weatherType == 'Atmosphere'){
			  $('.main-body').addClass('atmosphere');
			}else if(weatherType == 'Clouds'){
			  $('.main-body').addClass('clouds');
			}else if(weatherType == 'Extreme'){
			  $('.main-body').addClass('extreme');
			}
		  }
		  
		);
	  });
	}else{
	  console.log('weather details are loading...please wait');
	}

	//change temp type
	$("#tempunit").on("click", function() {
	  if ($(this).html() == " \xB0C") {
		$(this).text(" \xB0F");
		var cTemp = $("#temp").text();
		var cToFahr = Math.round((cTemp * 9 / 5 + 32)*100)/100;
		$("#temp").text(cToFahr);
	  } else {
		$(this).text(" \xB0C");
		var fTemp = $("#temp").text();
		var fToCel = Math.round((fTemp - 32) * 5 *100/ 9)/100;
		$("#temp").text(fToCel);
	  }
	});
});
