{
  let user: string;

  console.log(user);

  let saveButton = document.getElementById('save');

  console.log(saveButton);
}

{
  let loggedInUsername: string;

  const users = [
    { name: 'Obby', age: 12 },
    { name: 'Hina', age: 30 },
  ];

  console.log(loggedInUsername);

  users.forEach(user => {
    if (user.name === loggedInUsername) {
      console.log('User exists!');
    }
  });

  const loggedInUser = users.find(user => user.name === loggedInUsername);

  console.log(loggedInUser.age);

  if (loggedInUser) console.log(loggedInUser.age);

  const saveButton = document.querySelector('#save');
  const handleClick = () => console.log('Click!');

  saveButton.addEventListener('click', handleClick);

  if (saveButton !== null) saveButton.addEventListener('click', handleClick);
}

{
  let saveButton1: HTMLElement | null = document.querySelector('#save');
  let saveButton2: HTMLElement = document.querySelector('#save')!;
  let saveButton3: HTMLElement = document.querySelector('#save') as HTMLElement;
  let saveButton4: HTMLElement = <HTMLElement>document.querySelector('#save');
}

{
  function addNumbers() {
    console.log(2 + 4);
  }

  const result = addNumbers();

  console.log(result);

  function throwNewError(): never {
    throw new Error('Something went wrong!');
  }
}
