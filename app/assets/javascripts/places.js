// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
const coordinate = [];

const initMap=(lat, lng, name, description) => {
   
    
    
    let myCoords = new google.maps.LatLng(lat, lng);
    const mapOptions = {
    center: myCoords,
    zoom: 14
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    const contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">'+ name +'</h1>'+
            '<div id="bodyContent">'+
            '<p>'+ description+'.</p>'+
            '</div>'+
            '</div>';

        const infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 200
        });
    const marker = new google.maps.Marker({
        position: myCoords,
        map: map
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    
}


function initMap2() {
    let lat = document.getElementById('place_latitude').value;
    let lng = document.getElementById('place_longitude').value;
    
    // if not defined create default position
    if (!lat || !lng){
        lat=24.7655999;
        lng=46.6802973;
        document.getElementById('place_latitude').value = lat;
        document.getElementById('place_longitude').value = lng;
    }
    let myCoords = new google.maps.LatLng(lat, lng);
    let mapOptions = {
    center: myCoords,
    zoom: 14
    };
    const map = new google.maps.Map(document.getElementById('map2'), mapOptions);
    const marker = new google.maps.Marker({
        position: myCoords,
        animation: google.maps.Animation.DROP,
        map: map,
        draggable: true
    });
    // refresh marker position and recenter map on marker
    function refreshMarker(){
        let lat = document.getElementById('place_latitude').value;
        let lng = document.getElementById('place_longitude').value;
        let myCoords = new google.maps.LatLng(lat, lng);
        marker.setPosition(myCoords);
        map.setCenter(marker.getPosition());   
    }
    // when input values change call refreshMarker
    document.getElementById('place_latitude').onchange = refreshMarker;
    document.getElementById('place_longitude').onchange = refreshMarker;
    // when marker is dragged update input values
    marker.addListener('drag', function() {
        latlng = marker.getPosition();
        newlat=(Math.round(latlng.lat()*1000000))/1000000;
        newlng=(Math.round(latlng.lng()*1000000))/1000000;
        document.getElementById('place_latitude').value = newlat;
        document.getElementById('place_longitude').value = newlng;
    });
    // When drag ends, center (pan) the map on the marker position
    marker.addListener('dragend', function() {
        map.panTo(marker.getPosition());   
    });
}




const initMap3 = (lat, lng) => {
    const name = 'Need help'
    coordinate.push([name,lat, lng])

    let myCoords = new google.maps.LatLng(lat, lng);
    const mapOptions = {
    center: myCoords,
    zoom: 13
    };
    let image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    const map = new google.maps.Map(document.getElementById('map3'), mapOptions);
    const contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">'+ name +'</h1>'+
    '<div id="bodyContent">'+
    '<p>In need of supplies.</p>'+
    '</div>'+
    '</div>';


        coordinate.forEach(function(element, index){
            const allCoords = coordinate[index];
            const infowindow = new google.maps.InfoWindow({
                content: allCoords[0],
                maxWidth: 200
              });
                 
            const marker = new google.maps.Marker({
              position: {lat: allCoords[1], lng: allCoords[2]},
              map: map,
              title: allCoords[0],
              zIndex: allCoords[3],
              icon: image,
              
            });
            marker.addListener('click', function() {
                infowindow.open(map, marker);
              });
          })
    
    }

