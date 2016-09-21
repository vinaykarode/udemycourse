import { Mongo } from 'meteor/mongo';

export const Photos = new Mongo.Collection('photos');

const PhotoSchema = new SimpleSchema({
  "userId": {
      type: String,
      label: 'user id',
      optional: false
  },
  "photoUrl": {
      type: String,
      label: 'url',
      optional: false
  },
  "created_at": {
    type: Date,
    label: ' Date event added to system',
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      }
    }
  }
});

Photos.attachSchema(PhotoSchema);