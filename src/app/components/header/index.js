import angular from 'angular';

import headerComponent from './header.component';

export default angular
    .module('app.components.header', [])
    .component('xxHeader', headerComponent)
    .name;
