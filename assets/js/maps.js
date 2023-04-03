function initMap(){
    var map = new google.map.Maps(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations =[
        {lat: 40.785091, lng: -73.968285},
        {lat: 40.785091, lng: -73.968285},
        {lat: 40.785091, lng: -73.968285}
    ];

    var marker = locations.map(function(location, i){
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    const markerClusterer = new MarkerClusterer(map, markers, {imagePath:});
}