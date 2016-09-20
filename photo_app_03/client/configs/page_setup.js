import {DocHead} from 'meteor/kadira:dochead';

export default function () {

var title = "photo_app";
DocHead.setTitle(title);

var metaInfo = {name: "viewport", content: "width=device-width, initial-scale=1.0"};
DocHead.addMeta(metaInfo);


}
