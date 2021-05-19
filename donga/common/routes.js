const routes = require('next-routes');

module.exports = routes()
    .add('/detail/:id', 'Screen/DetailPage')

    // add more here