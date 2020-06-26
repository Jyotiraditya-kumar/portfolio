function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(28.713525, 77.751650),
        zoom: 15,
    };
    myCenter = { lat: 28.713525, lng: 77.751650 };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: myCenter,
        title: "Jyotiraditya",

    });

    marker.setMap(map);
}