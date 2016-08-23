import angular from 'angular';
import uiRouter from 'angular-ui-router';

import configuration from './configuration';

import rootViews from './views';

import headerComponentModule from './components/header';
import footerComponentModule from './components/footer';

import layoutViewComponent from './layout.component';

export default angular
    .module('app', [
        uiRouter,
        rootViews,
        headerComponentModule,
        footerComponentModule
    ])
    .config(configuration)
    .component('zzLayout', layoutViewComponent)
    .name;
