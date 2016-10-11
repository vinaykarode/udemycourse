import React from 'react';

class Map extends React.Component {
    componentDidMount() {

    }

    render() {
        const {mapLoaded} = this.props;
        {mapLoaded? this.loadmap() : null}
        return (
            <div >
                <div className="row">
                  <div className="col s12">
                    <div className="card blue-grey darken-1">
                      <div className="card-content white-text">
                        <span className="card-title">Distance</span>
                        {/*<p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>*/}
                      </div>
                      <div className="card-action">
                        <a href="#" onClick={this.startRunning.bind(this)}>Start Running</a>
                      </div>
                    </div>
                  </div>
                </div>

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
                zoom: 17
              }
            });
            GoogleMaps.ready('Map', function(map) {
              let marker = new google.maps.Marker({
                position: map.options.center,
                // icon: {
                //   path: google.maps.SymbolPath.CIRCLE,
                //   scale: 10
                // },
                map: map.instance
              });
            });
            // let flightPlanCoordinates = [
            //   {lat: 37.772, lng: -122.214},
            //   {lat: 21.291, lng: -157.821},
            //   {lat: -18.142, lng: 178.431},
            //   {lat: -27.467, lng: 153.027}
            // ];
            // GoogleMaps.ready('Map', function(map) {
            //   let flightPath = new google.maps.Polyline({
            //     path: flightPlanCoordinates,
            //     geodesic: true,
            //     strokeColor: '#FF0000',
            //     strokeOpacity: 1.0,
            //     strokeWeight: 2,
            //     map: map.instance
            //   });
            // });
          };

        navigator.geolocation.getCurrentPosition(geoSuccess)


    }

    startRunning() {
      const {startRunning} = this.props;
      startRunning();
    }

}

export default Map;
