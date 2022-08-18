function receivesAFunction(callBack){
    return callBack();
}
receivesAFunction();

function returnsANamedFunction(){
    function namedFunction(){

    }
    return namedFunction;
}

// function namedFunction(){
//     return;
// }

function returnsAnAnonymousFunction(){
    return function (){

    }
}