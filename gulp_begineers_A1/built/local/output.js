var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        return this.greeting + "</h1>";
    };
    return Greeter;
}());
;
var greeter = new Greeter("Hello, world!");
console.log(greeter.greet());
