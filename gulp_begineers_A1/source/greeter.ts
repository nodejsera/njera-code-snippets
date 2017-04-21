class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return  this.greeting + "</h1>";
    }
};

var greeter = new Greeter("Hello, world!");
    
console.log(greeter.greet()); 