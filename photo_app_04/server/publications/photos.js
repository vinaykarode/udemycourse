import {Photos} from '/lib/collections/photos-collection';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
    Meteor.publish('photos', function () {
      console.log('publish all photos')
        if (!this.userId) {
          // Throw errors with a specific error code
          this.ready();
        }
      const selector = {'userId':this.userId};
      const options = {sort:{created_at:-1}}
      return Photos.find(selector, options);
    });
  }