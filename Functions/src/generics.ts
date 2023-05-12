{
  function filter<T>(array: T[], predicate: (item: T) => boolean): T[] {
    const result: T[] = [];

    array.forEach(item => {
      if (predicate(item)) result.push(item);
    });

    return result;
  }

  const numbers = [1, 3, 5, 7, 9, 10];

  const predicate = (item: number): boolean => item >= 7;

  console.log(filter(numbers, predicate));

  const animals = ['cat', 'dog', 'dolphin'];

  const filterDog = (item: string): boolean => item === 'cat';

  console.log(filter(animals, filterDog));
}

{
  type Filter<T> = {
    (array: T[], predicate: (item: T) => boolean): T[];
  };
}

{
  type Filter = {
    (array: number[], predicate: (item: number) => boolean): number[];
    (array: string[], predicate: (item: string) => boolean): string[];
    (array: object[], predicate: (item: object) => boolean): object[];
  };

  const optimizedFilter: Filter = (array, predicate): any[] => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      let item = array[i];
      if (predicate(item as never)) {
        result.push(item);
      }
    }
    return result;
  };
}

{
  // type Map = <T, U>(array: T[], generate: (item: T) => U) => U[];

  type Generate<T, U> = (item: T) => U;

  const customMap = <T, U>(array: T[], generate: Generate<T, U>): U[] => {
    const result: U[] = [];

    array.forEach(item => result.push(generate(item)));

    return result;
  };

  const numbers = [1, 2, 3, 4, 5];

  const double = (number: number): number => number * 2;
  const toString = (number: number): string => `${number}`;

  console.log(customMap(numbers, double));
  console.log(customMap(numbers, toString));
}
