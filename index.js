function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {


    
    var fn = function namedFunction(){
        
    }
    return fn;


    
    //return function namedFunction() {      
    //};
    
}

function returnsAnAnonymousFunction() {
    return () => x+1;
}