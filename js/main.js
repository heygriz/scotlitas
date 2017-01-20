$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
    $('.logo').addClass("logo-scroll");
  }
  else{
    $('header').removeClass("sticky");
    $('.logo').removeClass("logo-scroll");
  }
});

function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 56.992220, lng: -4.391047},
    	zoom: 7

        });

    var marker = new google.maps.Marker({
    	map: map,
    	draggable: false,
    	animation: google.maps.Animation.DROP,
   		position: {lat: 55.863876, lng: -5.415692},
   		title: 'Tarbert'
  		});

	var marker = new google.maps.Marker({
    	map: map,
    	draggable: false,
    	animation: google.maps.Animation.DROP,
   		position: {lat: 57.584724, lng: -6.231854},
  		});
  

  	var marker = new google.maps.Marker({
    	map: map,
    	draggable: false,
    	animation: google.maps.Animation.DROP,
   		position: {lat: 56.135258, lng: -5.484338},
  		});
  

  	var marker = new google.maps.Marker({
    	map: map,
    	draggable: false,
    	animation: google.maps.Animation.DROP,
   		position: {lat: 57.007227, lng: -3.397996},
  		});
  

  	var marker = new google.maps.Marker({
    	map: map,
    	draggable: false,
    	animation: google.maps.Animation.DROP,
   		position: {lat: 55.874646, lng: -4.253415},
  		});
  

  	var marker = new google.maps.Marker({
    	map: map,
    	draggable: false,
    	animation: google.maps.Animation.DROP,
   		position: {lat: 55.944258, lng: -3.161833},
  		});
  


  	var marker = new google.maps.Marker({
    	map: map,
    	draggable: false,
    	animation: google.maps.Animation.DROP,
   		position: {lat: 55.891914, lng: -5.614531},
  		});
  

  	var marker = new google.maps.Marker({
    	map: map,
    	draggable: false,
    	animation: google.maps.Animation.DROP,
   		position: {lat: 56.398023, lng: -3.430541},
  		});

  
}
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}





