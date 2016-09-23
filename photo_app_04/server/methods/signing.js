import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Photos} from '/lib/collections/photos-collection';
import crypto from 'crypto';

const bucket = "photoappvini";
const awsKey = Meteor.settings.AWSAccessKeyId;
const secret = Meteor.settings.AWSSecretAccessKey;

export default function () {
    Meteor.methods ({
        'signing' (filename, email) {
            if (!this.userId) {
              // Throw errors with a specific error code
              throw new Meteor.Error('recommendation.getUserRecommendation',
                'Must be logged in to access photos.');
            }
            check(filename, String);
            check(email, String);
            folder = email + '/'
            console.log(filename)
            const expiration = new Date(new Date().getTime() + 1000 * 60 * 5).toISOString();
            console.log(expiration);
            const policy =
            { "expiration": expiration,
                "conditions": [
                    {"bucket": bucket},
                    ["starts-with", "$key", folder],
                    {"acl": 'public-read'},
                    ["starts-with", "$Content-Type", ""],
                    ["content-length-range", 0, 524288000]
            ]};

            const policyBase64 = new Buffer(JSON.stringify(policy), 'utf8').toString('base64');
            const signature = crypto.createHmac('sha1', secret).update(policyBase64).digest('base64');

            return {bucket: bucket, awsKey: awsKey, policy: policyBase64, signature: signature, filename: filename, folder:folder};
        }
    });
}
