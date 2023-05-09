{
  let person = {
    name: 'Mark',
    age: 24,
  };

  let car: {
    color: string;
    brand: string;
  } = {
    color: 'red',
    brand: 'bmw',
  };

  let article: {
    author: string;
    content: string;
    title: string;
    image?: string;
  };

  article = {
    author: 'Ajaxander',
    content: 'Hello beautiful World!',
    title: 'Mater TypeScript the hard way',
  };
}

{
  type Point = {
    x: number;
    y: number;
    z?: number;
  };

  let point: Point = { x: 1, y: 2 };
  let point3D: Point = { x: 1, y: 2, z: 3 };
}

{
  type Caterer = {
    name: string;
    address: string;
    phone: number;
  };

  type Airplane = {
    model: string;
    flightNumber: string;
    timeOfDeparture: Date;
    timeOfArrival: Date;
    caterer: Caterer;
  };

  let airplane: Airplane = {
    model: 'Airbus A380',
    flightNumber: 'A2201',
    timeOfDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
      name: 'Special Food Ltd',
      address: '484, Some Street, New York',
      phone: 1452125,
    },
  };
}

{
  type Dog = {
    name: string;
    bark: boolean;
  };

  type Cat = {
    name: string;
    purr: boolean;
  };

  type DogAndCatUnion = Dog | Cat;

  let dog: DogAndCatUnion = {
    name: 'Buddy',
    bark: true,
  };

  let cat: DogAndCatUnion = {
    name: 'Bella',
    purr: true,
  };

  let hybrid: DogAndCatUnion = {
    name: 'Hybrid',
    bark: true,
    purr: true,
  };

  console.log(hybrid.bark);
}

{
  type NumberOrString = number | string;

  function addNumberOrString(a: NumberOrString, b: NumberOrString) {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    return a.toString() + b.toString();
  }

  addNumberOrString(1, 2);
  addNumberOrString('1', 2);
  addNumberOrString(1, true);
}

{
  type Dog = {
    name: string;
    bark: boolean;
  };

  type Cat = {
    name: string;
    purr: boolean;
  };

  type Hybrid = Dog & Cat;

  let hybrid: Hybrid = {
    name: 'Hybrid',
    bark: true,
    purr: true,
  };
}

{
  type Airplane = {
    readonly model: string;
    from: string;
    to: string;
    seats: {
      [key: string]: string;
    };
  };

  let airplane: Airplane = {
    model: 'Airbus A380',
    from: 'LA',
    to: 'SG',
    seats: {
      '10A': 'Ajaxander',
      '10B': 'Cater',
    },
  };

  interface Animal {
    name: string;
  }

  interface Dog extends Animal {
    breed: string;
  }

  interface SuperAnimal {
    [x: number]: Dog;
    [x: string]: Animal;
  }

  let superAnimal: SuperAnimal = {
    123: {
      name: '123',
      breed: 'number', // breed ? conflicts Animal : conflicts Dog
    },
    abc: {
      name: '456',
    },
  };
}

{
  interface Dog {
    name: string;
  }

  interface Dog {
    bark: true;
  }

  let dog: Dog = {
    name: 'Barker',
    bark: true,
  };
}
