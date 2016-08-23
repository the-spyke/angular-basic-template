import angular from 'angular';
import 'angular-mocks';

import footerComponent from './footer.component';

describe('footer component', () => {
    let $rootScope;
    let $compile;

    beforeEach(() => {
        angular
            .module('test', ['app/components/footer/footer.template.html'])
            .component('xxFooter', footerComponent);
        angular.mock.module('test');
    });

    beforeEach(angular.mock.inject($injector => {
        $rootScope = $injector.get('$rootScope');
        $compile = $injector.get('$compile');
    }));

    it('should render \'FountainJS team\'', () => {
        const element = $compile('<xx-footer />')($rootScope);

        $rootScope.$digest();
        const footer = element.find('a');

        expect(footer.html().trim()).toEqual('FountainJS team');
    });
});
