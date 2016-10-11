import Map from '../components/Map.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({context}, onData) => {
    const {Meteor} = context();
    let mapLoaded = GoogleMaps.loaded();
    console.log(mapLoaded)
    onData(null,{mapLoaded})
};

export const depsMapper = (context, actions) => ({
    // loadmap: actions.map.loadmap,
    startRunning: actions.map.startRunning,
    context: () => context
});

export default composeAll (
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Map);
