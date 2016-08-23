import angular from 'angular';
import 'angular-mocks';

import techsViewComponent from './techs.component';

const techsJson = [
    {
        key: 'gulp',
        title: 'Gulp',
        logo: 'http://fountainjs.io/assets/imgs/gulp.png',
        text1: 'The streaming build system',
        text2: 'Automate and enhance your workflow'
    },
    {
        key: 'react',
        title: 'React',
        logo: 'http://fountainjs.io/assets/imgs/react.png',
        text1: 'A JavaScript library for building user interfaces',
        text2: 'A declarative, efficient, and flexible JavaScript library for building user interfaces'
    },
    {
        key: 'angular1',
        title: 'Angular 1',
        logo: 'http://fountainjs.io/assets/imgs/angular1.png',
        text1: 'HTML enhanced for web apps!',
        text2: 'AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.'
    }
];

describe('techs view component', () => {
    let $rootScope;
    let $compile;
    let $httpBackend;

    beforeEach(() => {
        angular
            .module('test', ['app/views/techs/techs.template.html'])
            .component('zzTechs', techsViewComponent);
        angular.mock.module('test');
    });

    beforeEach(angular.mock.inject($injector => {
        $rootScope = $injector.get('$rootScope');
        $compile = $injector.get('$compile');
        $httpBackend = $injector.get('$httpBackend');
    }));

    it('should render 3 elements <xx-techs-tech>', () => {
        $httpBackend.when('GET', 'data/techs.json').respond(techsJson);
        const element = $compile('<zz-techs />')($rootScope);

        $httpBackend.flush();
        $rootScope.$digest();
        const techs = element.find('xx-techs-tech');

        expect(techs.length).toEqual(3);
    });
});
