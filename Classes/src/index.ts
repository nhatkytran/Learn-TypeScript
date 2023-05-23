// What is a Class?
{
  const person = {
    firstname: 'Ajaxander',
    birthyear: 2002,
    greet() {
      console.log(`${this.firstname} says Hello beautiful World!`);
    },
  };
}

// Creating first Class
{
  class Person {
    firstname = 'Ajaxander';
    birthyear = 2002;
    greet() {
      console.log(`${this.firstname} says Hello beautiful World!`);
    }
  }
}

// Creating an Instance of a Class
{
  class Person {
    firstname = 'Ajaxander';
    birthyear = 2002;
    greet() {
      console.log(`${this.firstname} says Hello beautiful World!`);
    }
  }

  const person = new Person();

  // console.log(person);
  // Person {firstname: 'Ajaxander', birthyear: 2002}

  // person.greet();
  // Ajaxander says Hello beautiful World!
}

// Constructor Function in Classes
{
  class Person {
    firstname = 'Ajaxander';
    birthyear = 2002;

    constructor(firstname: string, birthyear: number) {
      // console.log('firstname:', firstname);
      // firstname: Ajaxander
      // console.log('birthyear:', birthyear);
      // birthyear: 2002
    }

    greet() {
      console.log(`${this.firstname} says Hello beautiful World!`);
    }
  }

  const person = new Person('Ajaxander', 2002);
}

// this Keyword inside Classes
{
  class Person {
    firstname: string;
    birthyear: number;

    constructor(firstname: string, birthyear: number) {
      this.firstname = firstname;
      this.birthyear = birthyear;
    }

    hello() {
      return `${this.firstname} was born in ${this.birthyear}`;
    }
  }

  const person = new Person('Ajaxander', 2002);
}

// Understanding Inheritance
{
  class User {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
      this.name = name;
      this.email = email;
      this.age = age;
    }
  }

  class AdminUser extends User {
    isAdmin: boolean = true;
  }

  const admin = new AdminUser('Ajaxander', 'ajaxander@gmail.com', 21);

  // console.log(admin);
  // AdminUser {name: 'Ajaxander', email: 'ajaxander@gmail.com', age: 21, isAdmin: true}
}

// The Super Method
{
  class User {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
      this.name = name;
      this.email = email;
      this.age = age;
    }
  }

  class AdminUser extends User {
    isAdmin: boolean = true;
    usersReporting: number;

    constructor(
      name: string,
      email: string,
      age: number,
      usersReporting: number
    ) {
      super(name, email, age);
      this.usersReporting = usersReporting;
    }
  }

  const admin = new AdminUser('Ajaxander', 'ajaxander@gmail.com', 21, 5);

  // console.log(admin);
  // AdminUser {name: 'Ajaxander', email: 'ajaxander@gmail.com', age: 21, isAdmin: true, usersReporting: 5}
}

// Access Modifiers for Class Properties

// Public and Private members

// Protected Members in a Class
{
  class User {
    private firstname: string = 'NAME';

    constructor(firstname: string) {
      this.firstname = firstname;
    }

    hello() {
      console.log(`Hello ${this.firstname}`);
    }
  }

  const user = new User('Ajaxander');

  // user.hello();

  class Admin extends User {
    constructor(firstname: string) {
      super(firstname);
    }

    greet() {
      console.log(this.firstname);
    }
  }

  const admin = new Admin('Sakin');

  // admin.hello();
}

// Shorthand for Initial Properties
{
  class Person {
    constructor(public firstname: string, public birthyear: number) {}
  }

  const ajaxander = new Person('Ajaxander', 2002);
}

// Getting more Control on Members of a Class

// Using a Mutator - Setter Method
// Using an Accessor - Getter Method
{
  class Person {
    private _age: number | undefined;

    constructor(private name: string) {}

    public set age(age: number) {
      if (age > 200 || age < 0)
        throw new Error('The age must be within range of 0-200!');

      this._age = age;
    }

    public get age() {
      if (this._age === undefined)
        throw new Error('The age property has not been set yet!');

      return this._age;
    }
  }

  const ajaxander: Person = new Person('Ajaxander');

  ajaxander.age = 21;
}

// Improving Person Class
{
  class Person {
    constructor(private _name: string, private _age: number) {}

    public set name(name: string) {
      this._name = name;
    }

    public get name() {
      return this._name;
    }

    public set age(age: number) {
      if (age > 200 || age < 0)
        throw new Error('The age must be within range of 0-200!');

      this._age = age;
    }

    public get age() {
      return this._age;
    }
  }
}

// Refactoring the Constructor Method
{
  class Person {
    private checkAge(age: number) {
      if (age > 200 || age < 0)
        throw new Error('The age must be within range of 0-200!');
    }

    constructor(private _name: string, private _age: number) {
      this.checkAge(this._age);
    }

    public set name(name: string) {
      this._name = name;
    }

    public get name() {
      return this._name;
    }

    public set age(age: number) {
      this.checkAge(age);
      this._age = age;
    }

    public get age() {
      return this._age;
    }
  }

  const ajaxander: Person = new Person('Ajaxander', 21);
}
{
  class Person {
    private _age: number;

    constructor(private _name: string, age: number) {
      this.age = age;
    }

    public set name(name: string) {
      this._name = name;
    }

    public get name() {
      return this._name;
    }

    public set age(age: number) {
      if (age > 200 || age < 0)
        throw new Error('The age must be within range of 0-200!');

      this._age = age;
    }

    public get age() {
      return this._age;
    }
  }

  const ajaxander: Person = new Person('Ajaxander', 21);
}
{
  class Person {
    constructor(private _name: string, private _age: number) {
      this.age = _age;
    }

    public set name(name: string) {
      this._name = name;
    }

    public get name() {
      return this._name;
    }

    public set age(age: number) {
      if (age > 200 || age < 0)
        throw new Error('The age must be within range of 0-200!');

      this._age = age;
    }

    public get age() {
      return this._age;
    }
  }

  const ajaxander: Person = new Person('Ajaxander', 21);
}
