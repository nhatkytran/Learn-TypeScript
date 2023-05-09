let booleanValue: boolean = true;

// Literal values
booleanValue = false;

// Expressions of true or false
booleanValue = typeof 'Hello beautiful World!' === 'string';
booleanValue = 1 > 0;

booleanValue = JSON.parse('{"x": 1}'); // `any` type is compatible with all types

let unknownValue: unknown;
booleanValue = unknownValue;
if (typeof unknownValue === 'boolean') booleanValue = unknownValue;

booleanValue = 'string';
booleanValue = 123;
booleanValue = { x: 1 };

booleanValue = null;
booleanValue = undefined;
