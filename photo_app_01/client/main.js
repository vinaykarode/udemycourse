import {createApp} from 'mantra-core';
import initContext from './configs/context';
import PageSetup from "./configs/page_setup";

// modules
import coreModule from './modules/core';
import userModule from './modules/user';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(userModule);
app.init();
PageSetup();