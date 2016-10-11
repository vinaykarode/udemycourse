import {DocHead} from 'meteor/kadira:dochead';

export default function () {

var title = "map app";
DocHead.setTitle(title);

var metaInfo = {name: "viewport", content: "width=device-width, initial-scale=1.0"};
DocHead.addMeta(metaInfo);

// var map_api = "https://maps.googleapis.com/maps/api/js?key=AIzaSyABPyJzIXSIucQh54JqI0JYQqzvEObAw6w";
// DocHead.loadScript(map_api, function() {
//     // Google Analytics loaded

// });
}
