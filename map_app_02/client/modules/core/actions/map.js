if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load({ v: '3', key: 'AIzaSyABPyJzIXSIucQh54JqI0JYQqzvEObAw6w', libraries: 'geometry,places,drawing' })

    // Tracker.autorun(function (c){
    //     if (!GoogleMaps.loaded())
    //         return;
    //     c.stop();
    //     console.log(GoogleMaps.loaded())
    // })
    console.log('loading maps')
  });
}

const startRunning = ({Meteor, LocalState, FlowRouter}) => {
  Tracker.autorun(function(c) {
    console.log(Geolocation.latLng())
    // const geoSuccess = function(position) {
    //   console.log(position.coords.latitude)
    // }
    // navigator.geolocation.getCurrentPosition(geoSuccess)
  })
}

export default {
  startRunning
}
