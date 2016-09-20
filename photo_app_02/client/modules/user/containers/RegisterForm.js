import RegisterForm from '../components/RegisterForm.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({context, eventId}, onData) => {
    const {Meteor, Collections, LocalState} = context();
    // const notification = LocalState.get('NOTIFICATION');
    onData(null,{})
};

export const depsMapper = (context, actions) => ({
    validation: actions.registerform.validation,
    handleAuth: actions.registerform.handleAuth,
    context: () => context 
});

export default composeAll (
    composeWithTracker(composer),
    useDeps(depsMapper)
)(RegisterForm);