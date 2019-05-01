function initMap() {

  var umbria = {lat: 41.8887936, lng: -87.6313221};

  var map = new google.maps.Map(document.getElementById('map'), {zoom: 12, center: umbria});
  
  var marker = new google.maps.Marker({position: umbria, map: map});
}

window.addEventListener('load', initMap);
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex-1].style.display = "block"; 
}
