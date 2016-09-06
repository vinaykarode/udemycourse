let message_array = []

export default {
    send({Meteor, LocalState, FlowRouter}, message) {
        if(!message) {
            return LocalState.set('MESSAGE', 'message is required.');
        } 
        message_array.push(message);
        LocalState.set('MESSAGE', message_array);
        // console.log(message);
    }
}