let numberValue: number = 123;

// JSON.parse returns type of `any`
// `any` Type is compatible with all types
numberValue = JSON.parse('{"x": 1}');

let unknowValue: unknown;
numberValue = unknowValue;

numberValue = 28.7;
numberValue = -300;
numberValue = Infinity;
