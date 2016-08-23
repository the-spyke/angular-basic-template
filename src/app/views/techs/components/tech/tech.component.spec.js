import angular from 'angular';
import 'angular-mocks';

import techComponent from './tech.component';

describe('tech component', () => {
    let $rootScope;
    let $compile;

    beforeEach(() => {
        angular
            .module('test', ['app/views/techs/components/tech/tech.template.html'])
            .component('xxTechsTech', techComponent);
        angular.mock.module('test');
    });

    beforeEach(angular.mock.inject($injector => {
        $rootScope = $injector.get('$rootScope');
        $compile = $injector.get('$compile');
    }));

    it('should render Gulp', () => {
        const $scope = $rootScope.$new();
        $scope.fixture = {
            key: 'gulp',
            title: 'Gulp',
            logo: 'http://fountainjs.io/assets/imgs/gulp.png',
            text1: 'The streaming build system',
            text2: 'Automate and enhance your workflow'
        };

        const element = $compile('<xx-techs-tech tech="fixture" />')($scope);
        $scope.$digest();
        const tech = element.find('h3');

        expect(tech.html().trim()).toEqual('Gulp');
    });
});
