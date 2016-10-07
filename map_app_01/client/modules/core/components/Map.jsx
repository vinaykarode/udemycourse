import React from 'react';

class Map extends React.Component { 
    componentDidMount() {

    }

    render() {
        const {mapLoaded} = this.props;
        {mapLoaded? this.loadmap() : null}
        return (
            <div >
                <div id="map"></div>
            </div>
            )
    }
    
    loadmap(){
        const geoSuccess = function(position) {
            startPos = position;
            let latitude = startPos.coords.latitude;
            let longitude = startPos.coords.longitude;
            console.log(position.coords.accuracy)
            GoogleMaps.create({
              name: 'Map',
              element: document.getElementById('map'),
              options: {
                center: new google.maps.LatLng(latitude, longitude),
                zoom: 16
              }
            });            
          };
      
        navigator.geolocation.getCurrentPosition(geoSuccess)
    

    }
    
}

export default Map;