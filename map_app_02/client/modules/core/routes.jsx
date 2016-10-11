import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from './containers/MainLayout.js';
import Map from './containers/Map.js';


export default function (injectDeps, {FlowRouter}) {
    const MainLayoutCtx = injectDeps(MainLayout);
    
    FlowRouter.route('/', {
        name: 'home',
        action() {
            mount(MainLayoutCtx, {
                content: () => (< Map/>)
            })
        }
    })
}