//What is a pure function

// 1.Pure Function

function addPure(a,b){
    return a + b;
}
console.log(addPure(10,20));
// Executable = 30

//2.Aviod Side Effect
const b = 7;
function addSideEffect(a){
    return a+b;
}
console.log(addSideEffect(1));
// Executable = 8