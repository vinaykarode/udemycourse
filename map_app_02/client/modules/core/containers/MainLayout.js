import MainLayout from '../components/MainLayout.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({context}, onData) => {
    const {Meteor} = context();
    let connectionStatus = Meteor.status();
    console.log(connectionStatus)
    onData(null,{connectionStatus})
};

export const depsMapper = (context, actions) => ({
    context: () => context
});

export default composeAll (
    composeWithTracker(composer),
    useDeps(depsMapper)
)(MainLayout);