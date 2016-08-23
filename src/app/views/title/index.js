import angular from 'angular';

import titleViewComponent from './title.component';

export default angular
    .module('app.views.title', [])
    .component('zzTitle', titleViewComponent)
    .name;
