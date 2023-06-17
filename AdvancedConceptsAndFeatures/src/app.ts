// Advanced Concepts and Features

// Subtypes and Supertypes
{
  // If Type B is subtype of Type A, we can use Type B safely \
  // anywhere Type A is required
  // For example: Number is subtype of Any

  function logger(arg: any) {
    console.log(arg);
  }

  logger(123);
}

// How TypeScript checks Compatibility
{
  // 2 mechanisms of Compatibility in TypeScript
  // --> Subtype
  // --> Assignment --> TypeScript infers types
  let number1: Object = [1, 2, 3];
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
  const number1 = <const>{ x: 1 };
  const number2 = { x: 1 } as const;

  console.log(number1);
  console.log(number2);

  const input1 = document.querySelector('#firstname')!;
  const input2 = <HTMLInputElement>document.querySelector('#firstname');
  const input3 = document.querySelector('#firstname') as HTMLInputElement;

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
  type Cat = {
    purrs(): void;
  };

  type Dog = {
    barks(): void;
  };

  type Animal = Cat | Dog;

  function whatAnimal(animal: Animal): void {
    if ('purrs' in animal) {
      console.log('Cat:', animal.purrs);
    } else {
      console.log('Dog:', animal.barks);
    }
  }

  console.log(whatAnimal);
}
{
  type Cat = {
    type: 'cat';
    purrs(): void;
  };

  type Dog = {
    type: 'dog';
    barks(): void;
  };

  type Animal = Cat | Dog;

  function whatAnimal(animal: Animal): void {
    if (animal.type === 'cat') {
      console.log('Cat:', animal.purrs);
    } else {
      console.log('Dog:', animal.barks);
    }
  }

  console.log(whatAnimal);
}
{
  type Cat = {
    purrs(): void;
  };

  type Dog = {
    barks(): void;
  };

  type Animal = Cat | Dog;

  function checkCat(animal: Animal): animal is Cat {
    return (animal as Cat).purrs !== undefined;
  }

  function whatAnimal(animal: Animal): void {
    if (checkCat(animal)) {
      console.log('Cat:', animal.purrs);
    } else {
      console.log('Dog:', animal.barks);
    }
  }

  console.log(whatAnimal);
}

// Keying-in or Index Accessed Types
{
  // type ServiceList = UserDetailsAPIResponse['servicesList'];
  // type UserDetailsAPIResponse = {
  //   id: number;
  //   name: string;
  //   servicesList: {
  //     count: number;
  //     services: {
  //       id: number;
  //       name: string;
  //       price: number;
  //     }[];
  //   };
  // };
}

// keyof operator
{
  // type Events = {
  //   id: number;
  //   date: Date;
  //   type: 'indoor' | 'outdoor';
  // };
  // type UnionEvents = keyof Events; // "id" | "date" | "type"
  // type Numeric = {
  //   [key: number]: string;
  // };
  // type NumericKeyOf = keyof Numeric; // number
  // type StringAndNumber = {
  //   [key: string]: string;
  // };
  // type StringAndNumberKeyOf = keyof StringAndNumber; // number | string
}

// typeOf Operator
{
  let greeting = 'Hello World!';
  let firstname: typeof greeting;

  firstname = 'Ajaxander';

  console.log(firstname);
}

// Mapped Types
{
  // type Weekdays = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
  // type Day = Weekdays | 'Sat' | 'Sun';
  // type NextDay = {
  //   [W in Weekdays]: Day;
  // };
}

// Using Mapped Types
{
  type Artist = {
    id: string;
    name: string;
    bio: string;
  };

  type EditedArtist = {
    [Pro in keyof Artist]?: Artist[Pro];
  } & { id: string };

  const editedArtist: EditedArtist = {
    id: 'EA',
  };

  console.log(editedArtist);
}

// Conditional Types
{
  interface Animal {}
  interface Dog extends Animal {}
  type Example = Dog extends Animal ? number : string;

  const number: Example = 123;
  console.log(number);

  // type isString<T> = T extends String ? true : false;
  // type A = isString<string>;
  // type B = isString<number>;
}

{
  // // Date --> Interface
  // type answer_7 = Date extends { new (...args: any[]): any } ? true : false; // false
  // type answer_8 = typeof Date extends { new (...args: any[]): any }
  //   ? true
  //   : false; // true
  // // typeof Date --> DateConstructor
}

// Constraints on Conditional Types
{
  // interface WritePermissions {
  //   write: true;
  // }
  // interface ReadPermissions {
  //   write: false;
  // }
  // interface User {
  //   id: string;
  //   name: string;
  //   email: string;
  // }
  // interface Admin extends User, WritePermissions {}
  // interface Author extends User, WritePermissions {}
  // interface Reader extends User, ReadPermissions {}
  // type FilterWritable<T> = T extends { write: true } ? true : false;
}

// Inferring with Conditional Types
{
  // // infer keyword only used in conditional types
  // type ArrayElementType<T> = T extends (infer E)[] ? E : T;
  // type TypeOne = ArrayElementType<string[]>;
  // // string
  // type TypeTwo = ArrayElementType<number[]>;
  // // number
  // type TypeThree = ArrayElementType<(number | string | boolean)[]>;
  // // string | number| boolean
  // type TypeFour = ArrayElementType<{ name: string }>;
  // // { name: string }
  // type TypeFive = ArrayElementType<string>;
  // // string
}

// Infer the return type of a function
{
  function returnString() {
    return 'string';
  }

  type FunctionReturnType<T> = T extends { (): infer E } ? E : T;
  type FunctionReturnType2<T> = T extends () => infer E ? E : T;

  type NewType = FunctionReturnType<typeof returnString>;
}

// Infer Function Arguments
{
  function person(firstname: string, birthyear: number) {
    return { firstname, birthyear };
  }

  type GetFirstArgumentOfFunction<T> = T extends (
    first: infer E,
    ...rest: any[]
  ) => any
    ? E
    : T;

  type First = GetFirstArgumentOfFunction<typeof person>;

  type GetSecondArgumentOfFunction<T> = T extends {
    (first: any, second: infer E, ...rest: any[]): any;
  }
    ? E
    : T;

  type Second = GetSecondArgumentOfFunction<typeof person>;
}

// Satisfies Operator (TS Version 5 feature)
{
  type Properties = 'red' | 'green' | 'blue';
  type RGB = [red: number, green: number, blue: number];

  const colors: Record<Properties, RGB | string> = {
    red: [255, 0, 0],
    green: '00ff00',
    blue: [255, 255, 0],
  };

  colors.green.toUpperCase();

  if (typeof colors.green === 'string') colors.green.toUpperCase();
}
{
  // The `satisfies` operator does the heavy lifting and \
  // checks all the values
  type Properties = 'red' | 'green' | 'blue';
  type RGB = [red: number, green: number, blue: number];

  const colors = {
    red: [255, 0, 0],
    green: '00ff00',
    blue: [255, 255, 0],
  } satisfies Record<Properties, RGB | string>;

  colors.green.toUpperCase();
  colors.blue.toUpperCase();
}
