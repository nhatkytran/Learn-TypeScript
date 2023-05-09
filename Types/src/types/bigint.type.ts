let bigInt1 = BigInt(945845);

// BigInt literals --> "target": "es2020"
let bigInt2 = 123456n;

// //////////////////
const safeInt = Number.MAX_SAFE_INTEGER; // 2 ** 53 - 1

console.log(safeInt + 1); // 2 ** 53
console.log(safeInt + 2); // 2 ** 53

console.log(safeInt + 1 === safeInt + 2); // true
// //////////////////

let a: bigint = BigInt(1234567);
let b: bigint = 1234566n;

let c: bigint = a - b;
c = a - 1;

// bigint can not have decimal values
a = BigInt(1234567.7); // Uncaught RangeError at runtime

let d: bigint = 123456.7n;

// bigint does not work with Math object but number does
Math.log(10n);
Math.log(10);
