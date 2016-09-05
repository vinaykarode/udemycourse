import React from 'react';
import {mount} from 'react-mounter';
import Layout from './components/MainLayout.jsx';


export default function (injectDeps, {FlowRouter}) {
    const MainLayoutCtx = injectDeps(Layout);
    
    FlowRouter.route('/', {
        name: 'home',
        action() {
            mount(MainLayoutCtx, {
                content: () => ('hurray great start with react meteor mantra')
            })
        }
    })
}