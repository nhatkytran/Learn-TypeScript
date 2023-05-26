// --> All about Interfaces
// + multiple inheritance
// + generics with interfaces
// + multiple types as generics
// + classes and interfaces
// + access modifiers with interfaces

// -----------------------------------------------------------------
// +++ Introduction +++
// --> Interafaces
// + Interfaces are nothing else but constracts
// constract in the sense that they define in advance how an object \
// or the class structure is going to look
{
  interface Person {
    name: string;
    email: string;
    age: number;
    phone?: number;
    greet?: () => void;
  }

  const person: Person = {
    name: 'Ajaxander',
    email: 'ajaxander@gmail.com',
    age: 21,
  };
}

// -----------------------------------------------------------------
// +++ Extending Interfaces using extends keyword +++
{
  interface User {
    name: string;
    email: string;
    phone: number;
    gender: string;
  }

  interface UserWithAddress extends User {
    address: string;
  }

  const user: User = {
    name: 'Ajaxander',
    email: 'ajaxander@gmail.com',
    phone: 0813659939,
    gender: 'male',
  };

  const userWithAddress: UserWithAddress = {
    name: 'Ajaxander',
    email: 'ajaxander@gmail.com',
    phone: 0813659939,
    gender: 'male',
    address: 'LA',
  };
}

// -----------------------------------------------------------------
// +++ Inheriting from Multiple Interfaces +++
{
  enum Roles {
    admin = 'admin',
    user = 'user',
  }

  enum Permissions {
    read = 'read',
    write = 'write',
    execute = 'execute',
  }

  interface Role {
    role: Roles.admin;
  }

  interface PermissionList {
    permissions: Permissions[];
  }

  interface User {
    name: string;
    email: string;
    phone: number;
    gender: string;
  }

  interface AdminUser extends User, Role, PermissionList {
    numberOfUsersReporting: number;
  }

  const admin: AdminUser = {
    name: 'Ajaxander',
    email: 'ajaxander@gmail.com',
    phone: 0813659939,
    gender: 'male',
    role: Roles.admin,
    permissions: [Permissions.read, Permissions.write, Permissions.execute],
    numberOfUsersReporting: 5,
  };
}

// -----------------------------------------------------------------
// +++ Interfaces and Generics +++
// -----------------------------------------------------------------
// +++ Assigning Generics to Interfaces +++
// -----------------------------------------------------------------
// +++ Using Multiple Types as Generics +++
{
  enum Types {
    car = 'car',
    bus = 'bus',
    van = 'van',
    truck = 'truck',
    bike = 'bike',
  }

  enum Brands {
    ferrari = 'ferrari',
    honda = 'honda',
    bmw = 'bmw',
    toyota = 'toyota',
  }

  enum Colors {
    red = 'red',
    blue = 'blue',
    white = 'white',
    black = 'black',
    color = 'color',
  }

  interface AutoMobile<Type, Brand, Colors> {
    type: Type;
    brand: Brand;
    colors: Colors[];
    description: string;
  }

  const ferrari: AutoMobile<Types, Brands, Colors> = {
    type: Types.car,
    brand: Brands.ferrari,
    colors: [Colors.red],
    description: 'A horse!',
  };

  const toyota: AutoMobile<string, Brands, number> = {
    type: 'toyota',
    brand: Brands.ferrari,
    colors: [1111, 2222],
    description: 'Japan Vibe!',
  };
}

// -----------------------------------------------------------------
// +++ Using Interfaces with Classes +++
// -----------------------------------------------------------------
// +++ Multiple Classes using the same Interface +++
// Interfaces are just binding contracts and not concrete implementations
{
  enum Types {
    car = 'car',
    bus = 'bus',
    van = 'van',
    truck = 'truck',
    bike = 'bike',
  }

  enum Brands {
    ferrari = 'ferrari',
    honda = 'honda',
    bmw = 'bmw',
    toyota = 'toyota',
  }

  enum Colors {
    red = 'red',
    blue = 'blue',
    white = 'white',
    black = 'black',
    color = 'color',
  }

  interface AutoMobile<Type, Brand, Colors> {
    type: Type;
    brand: Brand;
    colors: Colors[];
    description: string;
  }

  class Car implements AutoMobile<string, Brands, Colors> {
    public type = 'car';

    constructor(
      public brand: Brands,
      public colors: Colors[],
      public description: string
    ) {}
  }

  class Truck implements AutoMobile<string, Brands, Colors> {
    public type = 'truck';

    constructor(
      public brand: Brands,
      public colors: Colors[],
      public description: string
    ) {}
  }

  const ferrari: Car = new Car(Brands.ferrari, [Colors.red], 'A horse!');
  const truck: Truck = new Truck(Brands.toyota, [Colors.black], 'A truck!');
}

// -----------------------------------------------------------------
// +++ Implementing multiple Interfaces +++
{
  enum Types {
    car = 'car',
    bus = 'bus',
    van = 'van',
    truck = 'truck',
    bike = 'bike',
  }

  enum Brands {
    ferrari = 'ferrari',
    honda = 'honda',
    bmw = 'bmw',
    toyota = 'toyota',
  }

  enum Colors {
    red = 'red',
    blue = 'blue',
    white = 'white',
    black = 'black',
    color = 'color',
  }

  interface AutoMobile<Type, Brand, Colors> {
    type: Type;
    brand: Brand;
    colors: Colors[];
    description: string;
  }

  interface CommercialVehicle {
    capacity: string;
    licenseRenewalDate: Date;
  }

  class Truck implements AutoMobile<string, Brands, Colors>, CommercialVehicle {
    public type = 'truck';

    constructor(
      public brand: Brands,
      public colors: Colors[],
      public description: string,
      public capacity: string,
      public licenseRenewalDate: Date
    ) {}
  }

  const truck: Truck = new Truck(
    Brands.toyota,
    [Colors.black],
    'A truck!',
    '15 Tonners',
    new Date()
  );
}

// -----------------------------------------------------------------
// +++ Multiple Inheritance in Classes using Interfaces +++
// Class can only inherit from one Class
{
  class User {
    constructor(public name: string) {}
  }

  class Password {
    constructor(public password: string) {}
  }

  class RegisteredUser extends User, Password {}
}

// -----------------------------------------------------------------
// +++ Interfaces and Access Modifiers +++
{
  enum Types {
    car = 'car',
    bus = 'bus',
    van = 'van',
    truck = 'truck',
    bike = 'bike',
  }

  enum Brands {
    ferrari = 'ferrari',
    honda = 'honda',
    bmw = 'bmw',
    toyota = 'toyota',
  }

  enum Colors {
    red = 'red',
    blue = 'blue',
    white = 'white',
    black = 'black',
    color = 'color',
  }

  interface AutoMobile<Type, Brand, Colors> {
    type: Type;
    brand: Brand;
    colors: Colors[];
    description: string;
  }

  interface CommercialVehicle {
    capacity: string;
    licenseRenewalDate: Date;
  }

  class Truck implements AutoMobile<string, Brands, Colors>, CommercialVehicle {
    public type = 'truck';

    constructor(
      private brand: Brands,
      public colors: Colors[],
      public description: string,
      public capacity: string,
      public licenseRenewalDate: Date
      // private driverName: string
    ) {}
  }

  const truck: Truck = new Truck(
    Brands.toyota,
    [Colors.black],
    'A truck!',
    '15 Tonners',
    new Date()
  );
}

// -----------------------------------------------------------------
// +++ Difference Between a Type and an Interface +++
{
  type User = {
    name: string
  }

  type Admin = {
    isAdmin: boolean
  }

  // Type Intersection
  const userAndAdmin: User & Admin = {
    name: 'user',
    isAdmin: false
  }

  // Type Union
  const userOrAdmin: User | Admin = {
    name: 'user'
  }

  // Tuples
  type ResponseTuple = [string, number];
}
{
  // TypeScript automatically merges two interfaces with the same name
  type User = {
    firstname: string;
  }
  type User = {
    lastname: string;
  }

  interface Person {
    firstname: string;
  }
  interface Person {
    lastname: string;
  }

  const person: Person = {
    firstname: 'Ajaxander',
    lastname: 'Tran'
  }

  // extends
  // Classes

  // A class can implement an interface or type alias, both \
  // in the same exact way. Note, however, that a class and \
  // interface are considered static blueprints. Therefore, they \
  // can not implement/extend a type alias that names a union type
}

// -----------------------------------------------------------------
// +++ Difference Between a Abstract Class and an Interface +++
// --> Binding constracts
// --> Class --> Static, methods
// --> Interface --> Multiple
{
  abstract class User {
    public abstract firstname: string;
    public abstract birthyear: number;

    public static staticMethod() {}

    public greet() {
      console.log('Hello beautiful World!');
    }
  }

  class RegisteredUser extends User {
    constructor(public firstname: string, public birthyear: number) {
      super();
    }
  }
}
{
  interface User {
    firstname: string;
    birthyear: number;
  }
  interface Greeting {
    greet: () => void;
  }

  class RegisteredUser implements User, Greeting {
    constructor(public firstname: string, public birthyear: number) {}

    public greet() {
      console.log('Hello beautiful World!');
    }
  }
}
