import Dashboard from '../components/Dashboard.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({context, eventId}, onData) => {
    const {Meteor, Collections, LocalState} = context();
    let uploader_progress = LocalState.get('UPLOADER_PROGRESS');
    onData(null,{uploader_progress})
};

export const depsMapper = (context, actions) => ({
    uploadPhoto: actions.dashboard.uploadPhoto,
    context: () => context 
});

export default composeAll (
    composeWithTracker(composer),
    useDeps(depsMapper)
)(Dashboard);