{
  function FirstDecorator(constructor: Function) {
    console.log('Decorator called!');
    console.log(constructor);
  }

  @FirstDecorator
  class Aircraft {
    constructor(public _aircraftModel: string, private pilot: string) {
      console.log('Class called');
    }

    public pilotName() {
      console.log(this.pilot);
    }

    public get aircraftModel() {
      return this._aircraftModel;
    }
  }

  console.log(Aircraft);
}

console.log('---');
console.log('--- Addding to Prototype ---');
console.log('---');

{
  enum Brands {
    airbus = 'airbus',
    boeing = 'boeing',
  }

  interface AircraftInterface {
    _aircraftModel: string;
    origin?: string;
    manufacturer?: string;
    type?: string;
    airbusMethod?(): void;
    boeingMethod?(): void;
  }

  function ManufacturerFactory(brands: Brands) {
    return (constructor: Function) => {
      let origin = '';
      let manufacturer = '';
      let type = '';

      if (brands === Brands.airbus) {
        origin = 'United State';
        manufacturer = Brands.airbus;
        type = 'Jet';

        constructor.prototype.airbusMethod = () => {
          console.log('Airbus method');
        };
      }
      if (brands === Brands.boeing) {
        origin = 'France';
        manufacturer = Brands.boeing;
        type = 'Helicopter';

        constructor.prototype.boeingMethod = () => {
          console.log('Boeing method');
        };
      }

      constructor.prototype.origin = origin;
      constructor.prototype.manufacturer = manufacturer;
      constructor.prototype.type = type;
    };
  }

  @ManufacturerFactory(Brands.airbus)
  class Airplane implements AircraftInterface {
    constructor(public _aircraftModel: string, private pilot: string) {}

    public pilotName() {
      console.log(this.pilot);
    }

    public get aircraftModel() {
      return this._aircraftModel;
    }
  }

  const airplane: Airplane & AircraftInterface = new Airplane(
    'Airbus A380',
    'Ajaxander'
  );

  console.log(airplane);
  console.log(airplane.manufacturer);
  airplane.airbusMethod && airplane.airbusMethod();
}

console.log('---');
console.log('--- Method Decorators ---');
console.log('---');

{
  function MethodDecorator(
    classPrototype: Object,
    methodName: string,
    descriptors: PropertyDescriptor
  ) {
    console.log(classPrototype);
    console.log(methodName);
    console.log(descriptors);
    descriptors.writable = true;
  }

  function StaticMethodDecorator(
    constructor: Function,
    methodName: string,
    descriptors: PropertyDescriptor
  ) {
    console.log(constructor);
    console.log(methodName);
    console.log(descriptors);
  }

  interface AircraftInterface {
    _aircraftModel: string;
    origin?: string;
    manufacturer?: string;
    type?: string;
    airbusMethod?(): void;
    boeingMethod?(): void;
  }

  class Airplane implements AircraftInterface {
    constructor(public _aircraftModel: string, private pilot: string) {}

    @StaticMethodDecorator
    public static seatCount(): void {
      console.log('200 seats.');
    }

    @MethodDecorator
    public pilotName() {
      console.log(this.pilot);
    }

    public get aircraftModel() {
      return this._aircraftModel;
    }
  }

  const airplane: Airplane & AircraftInterface = new Airplane(
    'Airbus A380',
    'Ajaxander'
  );

  console.log(airplane);
}

console.log('---');
console.log('--- Parameter Decorators ---');
console.log('---');

{
  function ParameterDecorator(
    classPrototype: Object,
    methodName: string,
    index: number
  ) {
    console.log(classPrototype);
    console.log(methodName);
    console.log(index);
  }

  function PropertyDecorator(classPrototype: Object, propertyName: string) {
    console.log(classPrototype);
    console.log(propertyName);
  }

  function AccessorDecorator(
    classPrototype: Object,
    accessorName: string,
    descriptors: PropertyDescriptor
  ) {
    console.log(classPrototype);
    console.log(accessorName);
    console.log(descriptors);
  }

  class Aircraft {
    @PropertyDecorator
    private _aircraftModel;

    constructor(_aircraftModel: string) {
      this._aircraftModel = _aircraftModel;
    }

    public pilotName(@ParameterDecorator firstname: string) {
      return firstname;
    }

    @AccessorDecorator
    public get aircraftModel() {
      return this._aircraftModel;
    }
  }

  new Aircraft('Airbus');
}

console.log('---');
console.log('--- Multiple Decorators ---');
console.log('---');

{
  interface MapLocation {
    lat: number;
    long: number;
  }

  function AddLocation(lat: number, long: number) {
    return <T extends { new (...args: any[]): {} }>(constructor: T) => {
      return class extends constructor {
        public location: MapLocation;
        constructor(...args: any[]) {
          super(args);
          this.location = { lat, long };
        }
      };
    };
  }

  @AddLocation(1, 2)
  class Person {
    constructor(public firstname: string, public birthyear: number) {}
  }

  console.log(Person);
  console.log(new Person('Ajaxander', 2002));
}

console.log('---');
console.log('--- Multiple Decorators - Practice ---');
console.log('---');

{
  function ProgrammingLanguage(language: string) {
    return <T extends { new (...args: any[]): {} }>(constructor: T) => {
      return class extends constructor {
        public programmingLanguage: string;

        constructor(...args: any[]) {
          super(...args);
          this.programmingLanguage = language;
        }
      };
    };
  }

  @ProgrammingLanguage('TypeScript')
  class Student {
    constructor(public firstname: string, public birthyear: number) {}
  }

  console.log(Student);

  const student = new Student('Ajaxander', 2002);
  console.log(student);
}
