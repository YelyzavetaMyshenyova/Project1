function initMap() {

  var umbria = {lat: 41.8887936, lng: -87.6313221};

  var map = new google.maps.Map(document.getElementById('map'), {zoom: 10, center: umbria});
  
  var marker = new google.maps.Marker({position: umbria, map: map});
}

window.addEventListener('load', initMap);
