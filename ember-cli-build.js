'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    let app = new EmberApp(defaults, {
        // Add options here
    });

    app.import('vendor/ldap-filter-grammar.js', {
        using: [
            { transformation: 'amd', as: 'ldap-filter-grammar' },
        ],
    });

    return app.toTree();
};