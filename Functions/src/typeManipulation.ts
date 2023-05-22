// Generics
{
  // Using Type Parameters in Generic Constraints
  function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
  }

  let x = { a: 1, b: 2, c: 3, d: 4 };

  getProperty(x, 'a');
  getProperty(x, 'm');
}

// keyof type operator
{
  type Point = { x: number; y: number };
  type P = keyof Point; // "x" | "y"

  type Arrayish = { [n: number]: unknown };
  type A = keyof Arrayish; // number
  // --> Can only use number as key

  type Mapish = { [k: string]: boolean };
  type M = keyof Mapish; // string | number
  // --> Can use string or number as key
}

// typeof type operator
{
  let s = 'hello';
  let n: typeof s;

  // Built-in ReturnType<T>
  type Predicate = (x: unknown) => boolean;
  type K = ReturnType<Predicate>; // boolean

  function f() {
    return { x: 10, y: 3 };
  }
  type P = ReturnType<typeof f>;
  // type P = {
  //   x: number;
  //   y: number;
  // };
}

// Indexed Access Types
{
  // We can use an indexed access type to look up \
  // a specific property on another type
  type Person = { age: number; name: string; alive: boolean };
  type Age = Person['age'];

  type I1 = Person['age' | 'name'];
  type I12 = Person['name'] | Person['age'];

  type I2 = Person[keyof Person];

  type AliveOrName = 'alive' | 'name';
  type I3 = Person[AliveOrName];

  type I4 = Person['alve'];
}
{
  // using number to get the type of an array’s elements
  const MyArray = [
    { name: 'Alice', age: 15 },
    { name: 'Bob', age: 23 },
    { name: 'Eve', age: 38 },
  ];

  type Person = (typeof MyArray)[number];
  // type Person = {
  //   name: string;
  //   age: number;
  // };

  type Age = (typeof MyArray)[number]['age'];
  type Age2 = Person['age'];
}
{
  const key = 'age';
  type Age = Person[key];
}
{
  type key = 'age';
  type Age = Person[key];
}

// Conditional Types
{
  interface Animal {
    live(): void;
  }
  interface Dog extends Animal {
    woof(): void;
  }
  interface Cat {
    meow(): void;
  }

  type Example1 = Dog extends Animal ? number : string; // number
  type Example2 = Cat extends Animal ? number : string; // string
}
{
  // Conditional Type Constraints
  type MessageOf<T> = T['message'];
}
{
  type MessageOf<T extends { message: unknown }> = T['message'];

  interface Email {
    message: string;
  }

  type EmailMessageContents = MessageOf<Email>; // string
}
{
  type MessageOf<T> = T extends { message: unknown } ? T['message'] : never;

  interface Email {
    message: string;
  }

  interface Dog {
    bark(): void;
  }

  type EmailMessageContents = MessageOf<Email>; // string
  type DogMessageContents = MessageOf<Dog>; // never
}
{
  type Flatten<T> = T extends any[] ? T[number] : T;

  // Extracts out the element type.
  type Str = Flatten<string[]>; // string

  // Leaves the type alone.
  type Num = Flatten<number>; // number
}

// Inferring Within Conditional Types
{
  // infer keyword
  type Flatten<T> = T extends Array<infer I> ? I : T;

  type Str = Flatten<string[]>; // string
  type Num = Flatten<number>; // number
}
{
  type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
    ? Return
    : never;

  type Num = GetReturnType<() => number>; // number
  type Str = GetReturnType<(x: string) => string>; // string
  type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>; // boolean[]

  type Never = GetReturnType<number>;
}

// Distributive Conditional Types
{
  type ToArray<Type> = Type extends any ? Type[] : never;

  type StrArrOrNumArr = ToArray<string | number>; // string[] | number[]
  type Test = ToArray<unknown>; // unknown[]
  type Test2 = ToArray<never>; // never
  type Test3 = ToArray<undefined>; // undefined[]
}
{
  type Test<Type> = Type[];

  type Test1 = Test<string | number>; // (string | number)[]
}
{
  type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

  // 'StrArrOrNumArr' is no longer a union.
  type StrArrOrNumArr = ToArrayNonDist<string | number>; // (string | number)[]
}

// Mapped Types
{
  // Property
  type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
  };

  type Features = {
    darkMode: () => void;
    newUserProfile: () => void;
  };

  type FeatureOptions = OptionsFlags<Features>;
  // type FeatureOptions = {
  //   darkMode: boolean;
  //   newUserProfile: boolean;
  // };
}
{
  // Mapping Modifiers --> readonly and ?
  // - or +. If don’t add a prefix, then + is assumed

  // Removes 'readonly' attributes from a type's properties
  type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property];
  };

  type LockedAccount = {
    readonly id: string;
    readonly name: string;
  };

  type UnlockedAccount = CreateMutable<LockedAccount>;
  // type UnlockedAccount = {
  //   id: string;
  //   name: string;
  // };

  // Removes 'optional' attributes from a type's properties
  type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
  };

  type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
  };

  type User = Concrete<MaybeUser>;
  // type User = {
  //   id: string;
  //   name: string;
  //   age: number;
  // };
}
{
  // Key Remapping via as
  type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<
      string & Property
    >}`]: () => Type[Property];
  };

  interface Person {
    name: string;
    age: number;
    location: string;
  }

  type LazyPerson = Getters<Person>;
  // type LazyPerson = {
  //   getName: () => string;
  //   getAge: () => number;
  //   getLocation: () => string;
  // };
}
{
  // Remove the 'kind' property
  type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, 'kind'>]: Type[Property];
  };

  interface Circle {
    kind: 'circle';
    radius: number;
  }

  type KindlessCircle = RemoveKindField<Circle>;
  // type KindlessCircle = {
  //   radius: number;
  // };
}
{
  // map over unions of any type
  type EventConfig<Events extends { kind: string }> = {
    [E in Events as E['kind']]: (event: E) => void;
  };

  type SquareEvent = { kind: 'square'; x: number; y: number };
  type CircleEvent = { kind: 'circle'; radius: number };

  type Config = EventConfig<SquareEvent | CircleEvent>;
  // type Config = {
  //   square: (event: SquareEvent) => void;
  //   circle: (event: CircleEvent) => void;
  // };
}
{
  // Mapped Types with Conditional type
  type ExtractPII<Type> = {
    [Property in keyof Type]: Type[Property] extends { pii: true }
      ? true
      : false;
  };

  type DBFields = {
    id: { format: 'incrementing' };
    name: { type: string; pii: true };
  };

  type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;
  // type ObjectsNeedingGDPRDeletion = {
  //   id: false;
  //   name: true;
  // };
}

// Template Literal Types
{
  type World = 'world';
  type Greeting = `hello ${World}`; // "hello world"
}
{
  type EmailLocaleIDs = 'welcome_email' | 'email_heading';
  type FooterLocaleIDs = 'footer_title' | 'footer_sendoff';

  type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
  // "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"

  type Lang = 'en' | 'ja' | 'pt';
  type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;
  // "en_welcome_email_id" | "en_email_heading_id" | "en_footer_title_id" | \
  // "en_footer_sendoff_id" | "ja_welcome_email_id" | "ja_email_heading_id" | \
  // "ja_footer_title_id" | "ja_footer_sendoff_id" | "pt_welcome_email_id" | \
  // "pt_email_heading_id" | "pt_footer_title_id" | "pt_footer_sendoff_id"
}
{
  // String Unions in Types
  type PropEventSource<Type> = {
    on(
      eventName: `${string & keyof Type}Changed`,
      callback: (newValue: any) => void
    ): void;
  };

  function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type> {
    return {
      ...obj,
      on(eventName, callback) {
        console.log('Hello beautiful World!');
      },
    };
  }

  const person = makeWatchedObject({
    firstName: 'Saoirse',
    lastName: 'Ronan',
    age: 26,
  });

  person.on('firstNameChanged', (newValue: any) => {});
  person.on('firstName', (newValue: any) => {});
}
{
  // Inference with Template Literals
  type PropEventSource<Type> = {
    on<Key extends string & keyof Type>(
      eventName: `${Key}Changed`,
      callback: (newValue: Key) => void
    ): void;
  };

  function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type> {
    return {
      ...obj,
      on(eventName, callback) {
        console.log('Hello beautiful World!');
      },
    };
  }

  const person = makeWatchedObject({
    firstName: 'Saoirse',
    lastName: 'Ronan',
    age: 26,
  });

  person.on('ageChanged', newAge => {
    if (newAge < 0) {
      console.warn('warning! negative age');
    }
  });
}
{
  // Intrinsic String Manipulation Types
  type Greeting = 'Hello, world';
  type ShoutyGreeting = Uppercase<Greeting>; // "HELLO, WORLD"

  type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`;
  type MainID = ASCIICacheKey<'my_app'>; // "ID-MY_APP"
}
