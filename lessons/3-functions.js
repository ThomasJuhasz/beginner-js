(function() {
    'use strict';
    
    // most use of an IIFE
})();

a();

// function declaration
function a () {
    log('a');
};

// function expression
var func1 = function() {

};

// named function expression
var func2 = function as() {

};

// IIFE immediately invoked function expression
(function() {
    log('IIFE');
});

 // named IIFE
(function wef() {
    
})();

