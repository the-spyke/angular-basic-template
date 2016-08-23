/** @ngInject */
export default ($compileProvider, $httpProvider, $locationProvider, $urlRouterProvider, $stateProvider) => {
    $compileProvider.debugInfoEnabled(false);
    // Will be in 1.5.9.
    // $compileProvider.commentDirectivesEnabled(false);
    // $compileProvider.cssClassDirectivesEnabled(false);

    $httpProvider.useLegacyPromiseExtensions = false;

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('title', {
            url: '/',
            template: '<zz-title /><zz-techs />'
        });
};
