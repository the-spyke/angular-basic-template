import angular from 'angular';

import titleViewModule from './title';
import techsViewModule from './techs';

export default angular
    .module('app.views', [
        titleViewModule,
        techsViewModule
    ])
    .name;
