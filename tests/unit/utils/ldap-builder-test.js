import util from 'nearley-tutorial/utils/ldap-builder';
import { module, test } from 'qunit';

module('Unit | Utility | ldap-builder', function() {
    test('We can find valid simple expressions', function(assert) {
        let result;

        result = util.createLdapObject('(cn=username1)');
        assert.deepEqual(
            result,
            {
                expression: '(cn=username1)',
                metadata: {
                    expressionType: 'simple',
                    attribute: 'cn',
                    operator: '=',
                    value: 'username1',
                },
            },
            'A1. We get the correct result.'
        );

        result = util.createLdapObject('(cn~=username1)');
        assert.deepEqual(
            result,
            {
                expression: '(cn~=username1)',
                metadata: {
                    expressionType: 'simple',
                    attribute: 'cn',
                    operator: '~=',
                    value: 'username1',
                },
            },
            'A2. We get the correct result.'
        );

        result = util.createLdapObject('(cn<=username1)');
        assert.deepEqual(
            result,
            {
                expression: '(cn<=username1)',
                metadata: {
                    expressionType: 'simple',
                    attribute: 'cn',
                    operator: '<=',
                    value: 'username1',
                },
            },
            'A3. We get the correct result.'
        );

        result = util.createLdapObject('(cn>=username1)');
        assert.deepEqual(
            result,
            {
                expression: '(cn>=username1)',
                metadata: {
                    expressionType: 'simple',
                    attribute: 'cn',
                    operator: '>=',
                    value: 'username1',
                },
            },
            'A4. We get the correct result.'
        );
    });


    test('We can find valid present expressions', function(assert) {
        let result;

        result = util.createLdapObject('(cn=*)');
        assert.deepEqual(
            result,
            {
                expression: '(cn=*)',
                metadata: {
                    expressionType: 'present',
                    attribute: 'cn',
                    operator: '=',
                    value: '*',
                },
            },
            'A1. We get the correct result.'
        );
    });
});