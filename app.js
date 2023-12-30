"use strict";
class Hirad {
    constructor(_age) {
        this._age = _age;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
        console.log(age);
    }
}
const person = new Hirad(18);
person.age = 13;
