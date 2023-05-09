import * as roles from './roles';

type Person = {
  name: string;
  email: string;
  password: string;
  role: string;
};

{
  enum Roles {
    admin = 'admin',
    author = 'author',
    editor = 'editor',
  }

  type Person = {
    name: string;
    email: string;
    password: string;
    role: Roles;
  };

  const person: Person = {
    name: 'Ajaxander',
    email: 'ajaxander@gmail.com',
    password: 'password',
    role: Roles.admin,
  };
}

// Numeric enums
{
  enum Direction1 {
    Up, // 0
    Down, // 1
    Left, // 2
    Right, // 3
  }

  enum Direction2 {
    Up = 1, // 1
    Down, // 2
    Left, // 3
    Right, // 4
  }

  function tenValue(): number {
    return 10;
  }

  enum E {
    A,
    B = tenValue(),
    C,
  }
}

// String enums
{
  enum StringNumber {
    Stringg = 'String',
  }
}

// Heterogeneous enums
{
  enum IsOkay {
    No = 0,
    Yes = 'Yes',
  }
}

// Computed and constant members

// Union enums and enum number types
{
  function twoValue(): number {
    return 2;
  }

  enum Test {
    Test1 = 1,
    Test2 = twoValue(),
  }

  type OfTest = {
    num: Test.Test2;
  };

  const ofTest: OfTest = {
    num: Test.Test2,
  };
}

{
  enum Numbers {
    One = 1,
    Two = 2,
  }

  type Num = {
    number: Numbers.Two;
  };

  const num: Num = {
    number: Numbers.Two,
  };
}

// Enums at runtime

// Enums at compile time
{
  enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
  }

  const log1 = typeof LogLevel;
  const log2 = keyof typeof LogLevel;
}

// Reverse mappings
{
  enum Enum {
    A,
  }
   
  let a = Enum.A;
  let nameOfA = Enum[a]; // "A"

  // var Enum;
  // (function (Enum) {
  //     Enum[Enum["A"] = 0] = "A";
  // })(Enum || (Enum = {}));
  // let a = Enum.A;
  // let nameOfA = Enum[a]; // "A"
}

// const enums

// Ambient enums

// Objects vs Enums
{
  const enum EDirection {
    Up,
    Down,
    Left,
    Right,
  }
   
  const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
  } as const;
   
  EDirection.Up;
             
  ODirection.Up;
             
  // Using the enum as a parameter
  function walk(dir: EDirection) {}
   
  // It requires an extra line to pull out the values
  type Direction = typeof ODirection[keyof typeof ODirection];
  function run(dir: Direction) {}

  
   
  walk(EDirection.Left);
  run(ODirection.Right);
}

{
  const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
  } as const;

  type Keys = keyof typeof ODirection // "Up" | "Down" | "Left" | "Right"
  type Direction = typeof ODirection[keyof typeof ODirection]; // 0 | 1 | 2 | 3
}
