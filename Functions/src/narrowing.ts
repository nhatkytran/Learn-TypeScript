{
  type Fish = { swim: () => void };
  type Bird = { fly: () => void };

  function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }
}

{
  interface Shape {
    kind: 'circle' | 'square';
    radius?: number;
    sideLength?: number;
  }

  function getArea1(shape: Shape) {
    if (shape.kind === 'circle') return Math.PI * shape.radius ** 2;
  }

  // Not ideal
  function getArea2(shape: Shape) {
    if (shape.kind === 'circle') return Math.PI * shape.radius! ** 2;
  }
}

{
  interface Circle {
    kind: 'circle';
    radius: number;
  }

  interface Square {
    kind: 'square';
    sideLength: number;
  }

  type Shape = Circle | Square;

  function getArea(shape: Shape) {
    if (shape.kind === 'circle') return Math.PI * shape.radius ** 2;
    return shape.sideLength ** 2;
  }
}

{
  const a: never = 1;

  interface Circle {
    kind: 'circle';
    radius: number;
  }

  interface Square {
    kind: 'square';
    sideLength: number;
  }

  interface Triangle {
    kind: 'triangle';
    sideLength: 1;
  }

  type Shape = Circle | Square | Triangle;

  function getArea(shape: Shape) {
    switch (shape.kind) {
      case 'circle':
        return Math.PI * shape.radius ** 2;
      case 'square':
        return shape.sideLength ** 2;
      default:
        const _exhaustiveCheck: never = shape;
        return _exhaustiveCheck;
    }
  }

  const circle: Circle = { kind: 'circle', radius: 1 };
  const square: Square = { kind: 'square', sideLength: 1 };
  const triangle: Triangle = { kind: 'triangle', sideLength: 1 };

  getArea(circle);
  getArea(square);
  getArea(triangle);
}
