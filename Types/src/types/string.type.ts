let firstName = 'Ajaxander';
// import './src/any.type.ts' --> fix this problem --> Some TS config

{
  // string literals
  let firstName: string = 'Ajaxander';

  // expressions of string
  let alphabet: string = 'abc' + '...' + 'xyz';

  let characters = alphabet.split('');

  firstName = 123;

  Math.log('123');
}
