nearleyc ./vendor/ldap-filter-grammar.ne -o ./vendor/ldap-filter-grammar-temp.js
browserify ./vendor/ldap-filter-grammar-temp.js -o ./vendor/ldap-filter-grammar.js -s ldap-filter-grammar
rm ./vendor/ldap-filter-grammar-temp.js

nearley-railroad ./vendor/ldap-filter-grammar.ne -o ./vendor/ldap-filter-grammar.html