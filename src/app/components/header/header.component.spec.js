import angular from 'angular';
import 'angular-mocks';

import headerComponent from './header.component';

describe('header component', () => {
    let $rootScope;
    let $compile;

    beforeEach(() => {
        angular
            .module('test', ['app/components/header/header.template.html'])
            .component('xxHeader', headerComponent);
        angular.mock.module('test');
    });

    beforeEach(angular.mock.inject($injector => {
        $rootScope = $injector.get('$rootScope');
        $compile = $injector.get('$compile');
    }));

    it('should render \'Fountain Generator\'', () => {
        const element = $compile('<xx-header />')($rootScope);

        $rootScope.$digest();
        const header = element.find('a');

        expect(header.html().trim()).toEqual('Fountain Generator');
    });
});
