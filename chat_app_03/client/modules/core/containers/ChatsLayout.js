import ChatsLayout from '../components/ChatsLayout.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({context}, onData) => {
    const {LocalState} = context();
    const message = LocalState.get('MESSAGE') || [];
    onData(null, {message});
    
    return message;
};

export const depsMapper = (context, actions) => ({
    send: actions.chatslayout.send,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(ChatsLayout);