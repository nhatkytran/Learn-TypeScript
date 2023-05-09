let firstName: any = 'Ajaxander';

firstName = 123;
firstName = [1, 2, 3];

function mulTwo(number) {
  return number * 2;
}

// ////////////////////////////

const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse('10'); --> number
// const coordinates = JSON.parse('true'); --> boolean

// const coordinates = JSON.parse(json);

const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates);

// ////////////////////////////
// `any` Type is compatible with all types
