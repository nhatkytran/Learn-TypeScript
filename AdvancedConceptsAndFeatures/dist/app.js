"use strict";
// Advanced Concepts and Features
// Subtypes and Supertypes
{
    // If Type B is subtype of Type A, we can use Type B safely \
    // anywhere Type A is required
    // For example: Number is subtype of Any
    function logger(arg) {
        console.log(arg);
    }
    logger(123);
}
// How TypeScript checks Compatibility
{
    // 2 mechanisms of Compatibility in TypeScript
    // --> Subtype
    // --> Assignment --> TypeScript infers types
    let number1 = [1, 2, 3];
    let number2 = [1, 2, 3];
    console.log(number1, number2);
}
// Type Widening
{
    // TypeScript assigns a more general and closest type possible \
    // to a value --> Type Widening
    let a = 1; // a --> number
    const b = 1; // b --> 1
    console.log(a, b);
}
// Typecasting
{
    // Cast the type of a value from one type to another
    const number1 = { x: 1 };
    const number2 = { x: 1 };
    console.log(number1);
    console.log(number2);
    const input1 = document.querySelector('#firstname');
    const input2 = document.querySelector('#firstname');
    const input3 = document.querySelector('#firstname');
    console.log(input1);
    console.log(input2);
    console.log(input3);
}
// Totality
{
    // Totality checks all cases
    // For example parameter in function with union type A | B | C
    // Check if statement for all cases to return proper value
}
// Discriminated Unions
{
    function whatAnimal(animal) {
        if ('purrs' in animal) {
            console.log('Cat:', animal.purrs);
        }
        else {
            console.log('Dog:', animal.barks);
        }
    }
    console.log(whatAnimal);
}
{
    function whatAnimal(animal) {
        if (animal.type === 'cat') {
            console.log('Cat:', animal.purrs);
        }
        else {
            console.log('Dog:', animal.barks);
        }
    }
    console.log(whatAnimal);
}
{
    function checkCat(animal) {
        return animal.purrs !== undefined;
    }
    function whatAnimal(animal) {
        if (checkCat(animal)) {
            console.log('Cat:', animal.purrs);
        }
        else {
            console.log('Dog:', animal.barks);
        }
    }
    console.log(whatAnimal);
}
//# sourceMappingURL=app.js.map