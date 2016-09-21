import Dashboard from '../components/Dashboard.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({context, eventId}, onData) => {
    const {Meteor, Collections, LocalState} = context();
    let uploader_progress = LocalState.get('UPLOADER_PROGRESS');
    const currentUser = Meteor.user() || null;
    if (Meteor.subscribe('photos').ready()) {
        selector = {}
        options = {sort:{created_at:-1}}
        const photos = Collections.Photos.find(selector, options);
        onData(null,{photos, uploader_progress, currentUser })
    }
    
    // onData(null,{uploader_progress})
};

export const depsMapper = (context, actions) => ({
    uploadPhoto: actions.dashboard.uploadPhoto,
    context: () => context 
});

export default composeAll (
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Dashboard);