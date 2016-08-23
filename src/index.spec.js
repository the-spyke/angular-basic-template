const testsContext = require.context('./app', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
