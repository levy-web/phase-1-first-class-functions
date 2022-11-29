function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    
    return function namedFunction() {      
    };
    
}

function returnsAnAnonymousFunction() {
    return () => x+1;
}