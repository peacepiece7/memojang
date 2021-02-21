'use strict';
// object-oriendted programming
// class: template
// object: instance of a class
// javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based ingeritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }
    // methods
    speak(){
        console.log(`${this.name}:hellow!`)
    }   
}

