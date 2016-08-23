import angular from 'angular';
import 'angular-mocks';

import titleViewComponent from './title.component';

describe('title view component', () => {
    let $rootScope;
    let $compile;

    beforeEach(() => {
        angular
            .module('test', ['app/views/title/title.template.html'])
            .component('zzTitle', titleViewComponent);
        angular.mock.module('test');
    });

    beforeEach(angular.mock.inject($injector => {
        $rootScope = $injector.get('$rootScope');
        $compile = $injector.get('$compile');
    }));

    it('should render \'Allo, \'Allo!', () => {
        const element = $compile('<zz-title />')($rootScope);

        $rootScope.$digest();
        const title = element.find('h1');

        expect(title.html().trim()).toEqual('\'Allo, \'Allo!');
    });
});
