// +++ Introduction +++

// --> `this` keyword
// --> constructor functions --> core building blocks \
// of the prototypal inheritance

// --> prototypes --> prototypes? prototypical inheritance
// --> Property descriptors --> Property descriptors and \
// their role in prototypical inheritance

// ----------------------------------------------------------------
// +++ Setting the watch command as npm script +++

// index.html file --> script app.js
// "start": "tsc --watch"

// ----------------------------------------------------------------
// +++ `this` keyword in JS +++

// method --> object
// function --> window, global --> 'use strict' --> undefined
// arrow function --> `this` keyword of outer scope

// ----------------------------------------------------------------
// +++ Weird behaviour of the `this` keyword +++

// map(callback, this)

// ----------------------------------------------------------------
// +++ Constructor Functions +++

// ----------------------------------------------------------------
// +++ JavaScript's own Constructor Functions +++

{
  console.log('---');

  function User(this: any, name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  const user = new (User as any)('Ajaxander', 'ajaxander@gmail.com');

  console.log(user);
}

// ----------------------------------------------------------------
// +++ Understanding Prototypes +++

// When it comes to Inheritance, there are 2 schools of thought
// 1. Classic Inheritance using Classes and Child Classes
// 2. Prototypal Inheritance

// ----------------------------------------------------------------
// +++ Prototypical Inheritance theory +++

// ----------------------------------------------------------------
// +++ Inheriting the User Properties +++

{
  console.log('---');

  function User(this: any, firstname: string, birthyear: number) {
    this.firstname = firstname;
    this.birthyear = birthyear;
  }

  User.prototype.hello = function () {};

  console.log(User.prototype);

  function CodingStudent(this: any, firstname: string, birthyear: number) {
    User.call(this, firstname, birthyear);
    this.learning = 'Coding';
  }

  CodingStudent.prototype = Object.create(User.prototype);

  CodingStudent.prototype.hi = function () {};

  console.log(CodingStudent.prototype);

  const codingStudent = new (CodingStudent as any)('Ajaxander', 2002);

  console.log(codingStudent);
}

// ----------------------------------------------------------------
// +++ Inheriting the User Prototypes +++

// ----------------------------------------------------------------
// +++ Alternate Methods of Creating Objects +++

// ----------------------------------------------------------------
// +++ Introduction to Property Descriptors +++

// Every property of an object has an object associated with it, which \
// is called Property Descriptors

{
  const book = {
    title: 'The title',
    pages: 300,
    author: 'John',
  };

  console.log(Object.getOwnPropertyDescriptors(book));
}

// ----------------------------------------------------------------
// +++ defineProperty Method +++

// ----------------------------------------------------------------
// +++ How Classes are Syntatic Sugar on Prototypes +++

// --> Figma --> 3 ways creating object, enumeration
// Iterators in JS,...
