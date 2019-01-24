#*****************************************************************************************
#
#    Define an LDAP filter
#
#****************************************************************************************#
filter ->
    "(" expression ")" {%
        (data) => data[1]
    %}

expression ->
    simple {% id %} |
    present {% id %}


#*****************************************************************************************
#
#    Define a simple expression
#
#    attribute operator value
#
#****************************************************************************************#
simple ->
    attribute operator value {%
        (data) => {
            const attribute = data[0];
            const operator = data[1];
            const value = data[2];

            return {
                expression: `(${attribute}${operator}${value})`,
                metadata: {
                    expressionType: 'simple',
                    attribute,
                    operator,
                    value,
                },
            };
        }
    %}

attribute ->
    [\w]:+ {%
        (data) => data[0].join('')
    %}

operator ->
    "=" {% id %} |
    "~=" {% id %} |
    "<=" {% id %} |
    ">=" {% id %}

value ->
    [\w]:+ {%
        (data) => data[0].join('')
    %}


#*****************************************************************************************
#
#    Define a presence expression
#
#    attribute "=*"
#
#****************************************************************************************#
present ->
    attribute "=*" {%
        (data) => {
            const attribute = data[0];
            const operator = '=';
            const value = '*';

            // Handle success
            return {
                expression: `(${attribute}${operator}${value})`,
                metadata: {
                    expressionType: 'present',
                    attribute,
                    operator,
                    value,
                },
            };
        }
    %}