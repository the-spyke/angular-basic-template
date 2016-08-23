class TechsViewController {
    /** @ngInject */
    constructor($http) {
        $http
            .get('data/techs.json')
            .then(response => {
                this.techs = response.data;
            });
    }
}

export default {
    templateUrl: 'app/views/techs/techs.template.html',
    controller: TechsViewController
};
