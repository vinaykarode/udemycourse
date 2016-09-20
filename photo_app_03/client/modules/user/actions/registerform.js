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
            },
            confirmPassword: {
                equalTo: "#password",
                required: true
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
          },
          confirmPassword: {
            required: "Pop in the exact same password as above, will ya?"
          }
        }
  };
};

let createUser = (email, password, confirmPassword) => {
    if(password == confirmPassword){
        Accounts.createUser({
            email: email,
            password: password
        }, (error) => {
            if(error) {
                Bert.alert({
                  type: 'danger',
                  style: 'growl-bottom-right',
                  title: error.reason,
                  message: 'Try signing in',
                  icon: 'fa-remove'
                });
            } else {
                FlowRouter.go("/home");
                Bert.alert({
                  type: 'success',
                  style: 'growl-bottom-right',
                  title: 'successfully created your account!',
                  icon: 'fa-thumbs-o-up'
                });
            }
        })   
    }
}

export default {
    validation({Meteor, LocalState, FlowRouter}, formId){
        $( formId ).validate(validation());
    },
    handleAuth({Meteor, LocalState, FlowRouter}, formId, email, password, confirmPassword) {
        if($(formId).valid(validation())) {
            console.log('validated')
          createUser(email, password, confirmPassword);
        }
    },
}