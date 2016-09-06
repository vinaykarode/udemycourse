import {Messages} from '/lib/collections/messages-collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
    Meteor.publish('messages', function () {
      console.log('publish all messages')
      return Messages.find({});
    });
  }
