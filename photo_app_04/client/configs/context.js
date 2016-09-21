import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import Collections from '/lib/collections';

export default function() {
    return {
        Meteor,
        FlowRouter,
        LocalState: new ReactiveDict(),
        Collections,
        
    }
}