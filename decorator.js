var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function MyMethodDecorator(target) {
    target.prototype.used = 'Typescript';
    console.log(target);
}
var method = (function () {
    function method() {
    }
    return method;
}());
method = __decorate([
    MyMethodDecorator
], method);
var t = new method();
console.log("method is " + t.used);
var Staticmethod = (function () {
    function Staticmethod() {
    }
    return Staticmethod;
}());
Staticmethod = __decorate([
    MyStaticMethodDecorator
], Staticmethod);
function MyStaticMethodDecorator(target) {
    target.prototype.state = 'Static';
    console.log(target);
}
var s = new Staticmethod();
console.log("state is" + s.state);
