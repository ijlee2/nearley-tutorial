(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ldapFilterGrammar = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// Generated automatically by nearley, version 2.16.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "filter", "symbols": [{"literal":"("}, "expression", {"literal":")"}], "postprocess": 
        (data) => data[1]
            },
    {"name": "expression", "symbols": ["simple"], "postprocess": id},
    {"name": "expression", "symbols": ["present"], "postprocess": id},
    {"name": "simple", "symbols": ["attribute", "operator", "value"], "postprocess": 
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
            },
    {"name": "attribute$ebnf$1", "symbols": [/[\w]/]},
    {"name": "attribute$ebnf$1", "symbols": ["attribute$ebnf$1", /[\w]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "attribute", "symbols": ["attribute$ebnf$1"], "postprocess": 
        (data) => data[0].join('')
            },
    {"name": "operator", "symbols": [{"literal":"="}], "postprocess": id},
    {"name": "operator$string$1", "symbols": [{"literal":"~"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "operator", "symbols": ["operator$string$1"], "postprocess": id},
    {"name": "operator$string$2", "symbols": [{"literal":"<"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "operator", "symbols": ["operator$string$2"], "postprocess": id},
    {"name": "operator$string$3", "symbols": [{"literal":">"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "operator", "symbols": ["operator$string$3"], "postprocess": id},
    {"name": "value$ebnf$1", "symbols": [/[\w]/]},
    {"name": "value$ebnf$1", "symbols": ["value$ebnf$1", /[\w]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "value", "symbols": ["value$ebnf$1"], "postprocess": 
        (data) => data[0].join('')
            },
    {"name": "present$string$1", "symbols": [{"literal":"="}, {"literal":"*"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "present", "symbols": ["attribute", "present$string$1"], "postprocess": 
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
            }
]
  , ParserStart: "filter"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();

},{}]},{},[1])(1)
});
