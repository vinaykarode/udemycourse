import { Accounts } from 'meteor/accounts-base'

let validation = () => {
  return {
        rules: {
            email:{
                required: true
            },
            password : {
                required: true,
                minlength: 6
            }

        },
        messages:{
          email: {
            required: "Gonna need an email, there, friend!",
            email: "Is that a real email? What a trickster!"
          },
          password: {
            required: "Pop in a passwordarooni for me there, will ya?",
            minlength: "Use at least 6 characters, please."
          }
        }
  };
};

let signin = (email, password) => {
    Meteor.loginWithPassword(email, password, (error) => {
      if (error) {
        Bert.alert({
          type: 'danger',
          style: 'growl-bottom-right',
          title: error.reason,
          icon: 'fa-remove'
        });
      } else {
        FlowRouter.go("/home");
        Bert.alert({
          type: 'success',
          style: 'growl-bottom-right',
          title: 'Welcome Back!',
          message: "Good to see you again",
          icon: 'fa-thumbs-o-up'
        });
      }
    });
};

export default {
    validation({Meteor, LocalState, FlowRouter}, formId){
        $( formId ).validate(validation());
    },
    handleAuth({Meteor, LocalState, FlowRouter}, formId, email, password) {
        if($(formId).valid(validation())) {
          signin(email, password);
        }
    },
}