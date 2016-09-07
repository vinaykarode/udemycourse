import ChatsLayout from '../components/ChatsLayout.jsx';
import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

export const composer = ({context}, onData) => {
    const {LocalState, Collections, Meteor} = context();
    // const message = LocalState.get('MESSAGE') || [];
     if (Meteor.subscribe('messages').ready() && Meteor.userId()) {
      const message = Collections.Messages.find();
      onData(null, {message});
     } else {
         const message = [];
         onData(null, {message});
     }

};

export const depsMapper = (context, actions) => ({
    send: actions.chatslayout.send,
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(ChatsLayout);