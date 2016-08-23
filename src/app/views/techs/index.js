import angular from 'angular';

import techComponentModule from './components/tech';
import techsViewComponent from './techs.component';

export default angular
    .module('app.views.techs', [
        techComponentModule
    ])
    .component('zzTechs', techsViewComponent)
    .name;
