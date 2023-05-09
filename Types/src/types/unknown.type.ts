function twoSum(number: unknown) {
  if (typeof number === 'number') return number * 2;
  return 'Please provide a valid number!';
  // throw new Error('Something went wrong!');
}

console.log(twoSum(4));
console.log(twoSum('Ajaxander'));
