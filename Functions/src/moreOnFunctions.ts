// Function Type Expressions
{
  type Func = () => void;

  type SomeFunction = {
    description: string;
    func: () => void;
  };
}

// Call Signatures
{
  type Func = {
    (): void;
    description: string;
  };

  const greet: Func = () => {
    console.log('Hello beautiful World!');
  };

  greet.description = "That's great to see you smile!";
}

// Construct Signatures
{
  interface CallOrConstruct {
    new (s: string): Date;
    (n?: number): string;
  }
}

// Generic Functions
{
  function genFunc<T>(arg: T[]): T | undefined {
    return arg[0];
  }

  console.log(genFunc([1, 2, 3, 4, 5]));
  console.log(genFunc(['a', 'b', 'c', 'd', 'e']));
  console.log(genFunc([]));
}

// Constraints
{
  function longest<T extends { length: number }>(arg1: T, arg2: T): T | string {
    if (arg1.length >= arg2.length) return arg1;
    if (arg1.length < arg2.length) return arg2;
    return 'Equal!';
  }
}

// Working with Constrained Values
{
  // Function promises return Type, error can happend in case that \
  // object is an array
  function minimumLength<Type extends { length: number }>(
    obj: Type,
    minimum: number
  ): Type {
    if (obj.length >= minimum) {
      return obj;
    } else {
      return { length: minimum };
    }
  }
}

// Specifying Type Arguments
{
  function combine<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
    // concat required arr2 has same type like arr1
    return arr1.concat(arr2);
    // return arr1.concat(arr2 as T);
  }
}
{
  function combine<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
    return [...arr1, ...arr2];
  }
}
{
  function combine<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2);
  }

  // Specifying Type Arguments
  combine<string | number>([1, 2, 3], ['hello']);
}

// Some Generic Functions
{
  function myFunc<T>(arr: T[], predicate: (arg: T) => boolean): T[] {
    return arr;
  }
}
{
  type Predicate<T> = (arg: T) => boolean;
  function myFunc<T>(arr: T[], predicate: Predicate<T>): T[] {
    return arr;
  }
}
{
  // Not a good pratice, make code harder to read
  function myFunc<T, F extends (arg: T) => boolean>(
    arr: T[],
    predicate: F
  ): T[] {
    return arr;
  }
}

// Optional Parameters in Callbacks
{
  function customForEach<T>(
    arr: T[],
    callback: (arg: T, index?: number, self?: T[]) => void
  ) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  }

  customForEach([1, 2, 3, 4, 5], (number, index, self) => {});
}

// Function Overloads
{
  function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
      return new Date(y, mOrTimestamp, d);
    } else {
      return new Date(mOrTimestamp);
    }
  }

  const d1 = makeDate(12345678);
  const d2 = makeDate(5, 5, 5);
  const d3 = makeDate(1, 3);
}
{
  function makeDate(timestamp: number): Date; // Overload Signatures
  function makeDate(m: number, d: number, y: number): Date; // Overload Signatures
  // The Implementation Signatures
  function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
      return new Date(y, mOrTimestamp, d);
    } else {
      return new Date(mOrTimestamp);
    }
  }
  const d1 = makeDate(12345678);
  const d2 = makeDate(5, 5, 5);
  const d3 = makeDate(1, 3);
}

// Writing Good Overloads
{
  function len(arg: string | any[]): number {
    return arg.length;
  }

  len('Hello beautiful World!');
  len(Math.random() > 0.5 ? 'Hello' : 'Goodbye');
}

{
  function len(arg: string): number;
  function len(arg: any[]): number;
  function len(arg: string | any[]): number {
    return arg.length;
  }

  len('Hello beautiful World!');
  len(Math.random() > 0.5 ? 'Hello' : 'Goodbye');
  len(Math.random() > 0.5 ? [1, 2, 3] : [4, 5, 6]);
  // Statement random returns string | number[] not match overload
  len(Math.random() > 0.5 ? 'Hello' : [1, 2, 3]);
}
