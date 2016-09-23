import Dashboard from '../components/Dashboard.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({context, eventId}, onData) => {
    const {Meteor, Collections, LocalState} = context();
    let uploader_progress = LocalState.get('UPLOADER_PROGRESS');
    const currentUser = Meteor.user() || null;
    const isCordova = Meteor.isCordova;
    if (Meteor.subscribe('photos').ready()) {
        selector = {}
        options = {sort:{created_at:-1}}
        const photos = Collections.Photos.find(selector, options);
        onData(null,{photos, uploader_progress, currentUser,isCordova })
    }

    // onData(null,{uploader_progress})
};

export const depsMapper = (context, actions) => ({
    uploadPhoto: actions.dashboard.uploadPhoto,
    cordovaUploadPhoto: actions.dashboard.cordovaUploadPhoto,
    cordovaCameraUploadPhoto: actions.dashboard.cordovaCameraUploadPhoto,
    context: () => context
});

export default composeAll (
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Dashboard);
