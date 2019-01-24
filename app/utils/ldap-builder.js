import ldapFilterGrammar from 'ldap-filter-grammar';
import nearley from 'nearley';

export default {
    createLdapObject(ldapFilter) {
        try {
            const parser = new nearley.Parser(nearley.Grammar.fromCompiled(ldapFilterGrammar));

            parser.feed(ldapFilter);
            const results = parser.results;

            // If there is a match, return the first result
            if (results.length > 0) {
                return results[0];
            }

        } catch (error) {
            // If there is no match, return false
            return false;

        }

        return false;
    },
};