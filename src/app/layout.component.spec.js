import angular from 'angular';
import 'angular-mocks';

import layoutViewComponent from './layout.component';

describe('layout view component', () => {
    let $rootScope;
    let $compile;

    beforeEach(() => {
        angular
            .module('test', ['app/layout.template.html'])
            .component('zzLayout', layoutViewComponent);
        angular.mock.module('test');
    });

    beforeEach(angular.mock.inject($injector => {
        $rootScope = $injector.get('$rootScope');
        $compile = $injector.get('$compile');
    }));


    it('should render the header, title, techs and footer', () => {
        const element = $compile('<zz-layout>Loading...</zz-layout>')($rootScope);

        $rootScope.$digest();

        expect(element.find('xx-header').length).toEqual(1);
        expect(element.find('ui-view').length).toEqual(1);
        expect(element.find('xx-footer').length).toEqual(1);
    });
});
