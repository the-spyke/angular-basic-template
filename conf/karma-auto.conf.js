const configuration = require('./karma-base.conf');

module.exports = function (config) {
    configuration.singleRun = false;
    configuration.autoWatch = true;

    config.set(configuration);
};
