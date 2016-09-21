import LoginForm from '../components/LoginForm.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({context, eventId}, onData) => {
    const {Meteor, Collections, LocalState} = context();
    // const notification = LocalState.get('NOTIFICATION');
    onData(null,{})
};

export const depsMapper = (context, actions) => ({
    validation: actions.loginform.validation,
    handleAuth: actions.loginform.handleAuth,
    context: () => context 
});

export default composeAll (
    composeWithTracker(composer),
    useDeps(depsMapper)
)(LoginForm);