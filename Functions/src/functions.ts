{
  function intro1(name: string, age: number): string {
    return `My name is ${name} and age is ${age}`;
  }

  const intro2 = function (name: string, age: number): string {
    return `My name is ${name} and age is ${age}`;
  };

  const intro3 = (name: string, age: number): string =>
    `My name is ${name} and age is ${age}`;
}

{
  function intro(name: string, age: number, country?: string): string {
    if (country)
      return `My name is ${name} and age is ${age}. I live in ${country}`;
    return `My name is ${name} and age is ${age}`;
  }
}

{
  enum AgeUnit {
    years = 'years',
    months = 'months',
  }

  type Person = {
    name: string;
    age: number;
    ageUnit: AgeUnit;
    country: string;
  };

  const person: Person = {
    name: 'Ajaxander',
    age: 21,
    ageUnit: AgeUnit.years,
    country: 'Viet Nam',
  };

  function converAgeToMonths(person: Person): Person {
    return {
      ...person,
      age: 21 * 12,
      ageUnit: AgeUnit.months,
    };
  }

  console.log(converAgeToMonths(person));
}

{
  type Greeting = (greeting: string) => string;

  type Person = {
    name: string;
    age: number;
    country: string;
    greeting: Greeting;
  };

  const person: Person = {
    name: 'Ajaxander',
    age: 21,
    country: 'VN',
    greeting(greeting: string) {
      return `${this.name} says ${greeting}`;
    },
  };

  console.log(person.greeting('Hello beautiful World!'));
}

{
  type Reservation = {
    departureDate: Date;
    returnDate?: Date;
    departingFrom: string;
    destination: string;
  };

  type Reserve = {
    (
      departureDate: Date,
      returnDate: Date,
      departingFrom: string,
      destination: string
    ): Reservation | never;
    (departureDate: Date, departingFrom: string, destination: string):
      | Reservation
      | never;
  };

  const reserve: Reserve = (
    departureDate: Date,
    returnDateOrDepartingFrom: Date | string,
    departingFromOrDestination: string,
    destination?: string
  ) => {
    if (returnDateOrDepartingFrom instanceof Date && destination)
      return {
        departureDate,
        returnDate: returnDateOrDepartingFrom,
        departingFrom: departingFromOrDestination,
        destination,
      };
    if (typeof returnDateOrDepartingFrom === 'string')
      return {
        departureDate,
        departingFrom: returnDateOrDepartingFrom,
        destination: departingFromOrDestination,
      };

    throw new Error('Please privide valid details to reserve a ticket!');
  };
}

{
  type Reservation = {
    departureDate: Date;
    returnDate?: Date;
    departuringFrom: string;
    destinaiton: string;
  };

  function reserve(
    departureDate: Date,
    returnDate: Date,
    departuringFrom: string,
    destinaiton: string
  ): Reservation | never;
  function reserve(
    departureDate: Date,
    departuringFrom: string,
    destinaiton: string
  ): Reservation | never;
  function reserve(
    arg1: unknown,
    arg2: unknown,
    arg3: unknown,
    arg4?: unknown
  ) {
    if (arg2 instanceof Date && arg4)
      return {
        departureDate: arg1,
        returnDate: arg2,
        departuringFrom: arg3,
        destinaiton: arg4,
      };
    if (typeof arg2 === 'string')
      return {
        departureDate: arg1,
        departuringFrom: arg2,
        destinaiton: arg3,
      };

    throw new Error('Please provide valid details to reserve a ticket!');
  }
}

{
  type Coordinate = {
    x: number;
    y: number;
  };

  function createCoord(obj: Coordinate): Coordinate;
  function createCoord(x: number, y: number): Coordinate;
  function createCoord(arg1: unknown, arg2?: unknown): Coordinate | never {
    if (typeof arg1 === 'object') return { ...(arg1 as Coordinate) };
    if (typeof arg1 === 'number')
      return { x: arg1 as number, y: arg2 as number };

    throw new Error('Something went wrong!');
  }
}

{
  type Coordinate = {
    x: number;
    y: number;
  };

  type Coord = {
    (x: Coordinate): Coordinate | never;
    (x: number, y: number): Coordinate | never;
  };

  const createCoord: Coord = (x: Coordinate | number, y?: number) => {
    if (typeof x === 'object') return { ...(x as Coordinate) };
    if (typeof x === 'number' && y) return { x, y };

    throw new Error('Something went wrong!');
  };
}

// Review Function Overloads
{
  type Reservation = {
    departureDate: Date;
    returnDate?: Date;
    from: string;
    to: string;
  };

  type Reserve = {
    (departureDate: Date, returnDate: Date, from: string, to: string):
      | Reservation
      | never;
    (departureDate: Date, from: string, to: string): Reservation | never;
  };

  const reserve: Reserve = function (
    departureDate,
    returnDateOrFrom,
    fromOrTo,
    to?
  ) {
    if (returnDateOrFrom instanceof Date)
      return {
        departureDate,
        returnDate: returnDateOrFrom,
        from: fromOrTo,
        to: to as string,
      };

    if (typeof returnDateOrFrom === 'string')
      return {
        departureDate,
        from: returnDateOrFrom,
        to: to as string,
      };

    throw new Error('Something went wrong!');
  };
}

{
  type Reservation = {
    departureDate: Date;
    returnDate?: Date;
    from: string;
    to: string;
  };

  function reserve(dp: Date, rt: Date, from: string, to: string): Reservation;
  function reserve(dp: Date, from: string, to: string): Reservation;
  function reserve(
    dp: unknown,
    rtOrFrom: unknown,
    fromOrTo: unknown,
    to?: unknown
  ): Reservation | never {
    if (rtOrFrom instanceof Date && to)
      return {
        departureDate: dp as Date,
        returnDate: rtOrFrom,
        from: fromOrTo as string,
        to: to as string,
      };

    if (typeof rtOrFrom === 'string')
      return {
        departureDate: dp as Date,
        from: rtOrFrom,
        to: fromOrTo as string,
      };

    throw new Error('Something went wrong!');
  }
}
