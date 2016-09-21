import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Photos} from '/lib/collections/photos-collection';

export default function () {
    Meteor.methods ({
        'photos.uploaded' (photourl) {
            if (!this.userId) {
              // Throw errors with a specific error code
              throw new Meteor.Error('recommendation.getUserRecommendation',
                'Must be logged in to access photos.');
            }
            check(photourl, String);
            return Photos.insert({"userId":this.userId,'photoUrl':photourl});
            
        }
    });
}