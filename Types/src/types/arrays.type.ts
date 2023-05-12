{
  let numbers: number[] = [1, 2, 3];

  let strings: Array<string> = ['A', 'B', 'C'];

  type AirPlane = {
    airplaneModel: string;
  };

  type AirPlanes = AirPlane[];

  let airPlanes: AirPlanes = [
    { airplaneModel: 'SG 387' },
    { airplaneModel: 'SG 388' },
  ];
}

{
  let numbers: ReadonlyArray<number> = [1, 2, 3];
  numbers.push(1000);
  numbers[0] = 100;

  let x: ReadonlyArray<string>;
  let y: string[] = [];
  x = y;
  y.push('A');
  x.push('B');
  y = x;
}

{
  let numbers: [number, number] = [1, 2];
  numbers.push(123);
  numbers.push('A');
  numbers[0];

  type StringNumberBooleans = [string, number, ...boolean[]];
  let snb1: StringNumberBooleans = ['ABC', 123, true, false];
  let snb2: StringNumberBooleans = ['ABC', 123, true, false, 123];

  type StringBooleansNumber = [string, ...boolean[], number];
  let sbn1: StringBooleansNumber = ['abc', true, false, 123];
  let sbn2: StringBooleansNumber = ['abc', true, 'aa', false, 123];

  type BooleansStringNumber = [...boolean[], string, number];
  let bsn1: BooleansStringNumber = [true, 'abc', 123];
  let bsn2: BooleansStringNumber = [true, 'aa', 'abc', 123];

  let strings: readonly [string, string] = ['A', 'B'];
  strings.push('C');
  strings[0] = 'AA';

  // ////////////////////////////

  // firstname, lastname, age
  let person: [string, string, number?];
  person: ['Ajaxander', 'Tran', 21];
  person: ['Ajaxander', 'Tran', 21, 89];
  person: ['Ajaxander', 'Tran'];

  // numberOfStudents, passing, 'John', 'Stella'
  let students: [number, boolean, ...string[]];
  students: [2, true, 'John', 'Stella'];
  students: [1, false, 'Scott'];
  students: [0, false];

  let numbers2: readonly number[] = [1, 2, 3];

  type ReadOnlyPersson = readonly [string, string, number];
  let person2: ReadOnlyPersson = ['Ajaxander2', 'Tran', 21];

  type A = Readonly<string[]>;
  type C = Readonly<[string, string, number]>;
}

{
  let array: string[] = [];
  let number: number | unknown = 123;

  array.push(number as string);
}
