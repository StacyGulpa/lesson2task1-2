var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.move = function () {
        console.log("The cat is running");
    };
    Cat.prototype.eat = function (food) {
        console.log("The cat is eating ".concat(food));
    };
    Cat.prototype.sleep = function () {
        console.log("The cat is sleeping");
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.move = function () {
        console.log("The bird is flying");
    };
    Bird.prototype.eat = function (food) {
        console.log("The bird is eating ".concat(food));
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish() {
        this.name = "Fishy";
    }
    Fish.prototype.move = function () {
        console.log("The fish is swimming");
    };
    Fish.prototype.eat = function (food) {
        console.log("The fish is eating ".concat(food));
    };
    return Fish;
}());
