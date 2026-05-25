//Question28
function greet(name){
    return "Hello, "+name;
}
function sayHello(fn,value){
    return fn(value);
}
console.log(sayHello(greet,"Kyle"));
