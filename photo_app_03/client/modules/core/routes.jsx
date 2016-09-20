import React from 'react';
import {mount} from 'react-mounter';
import Layout from './components/MainLayout.jsx';
import Dashboard from './containers/Dashboard.js';
import RegisterLogin from '../user/components/RegisterLogin.jsx'

export default function (injectDeps, {FlowRouter}) {
    const MainLayoutCtx = injectDeps(Layout);
    
    FlowRouter.route('/', {
        name: 'login',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<RegisterLogin />)
            })
        }
    })    
    FlowRouter.route('/home', {
        name: 'home',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Dashboard />)
            })
        }
    })
}