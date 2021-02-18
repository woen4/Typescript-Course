/* Partial --------------------------*/
//Define that the object can have only a few some of its interface fields

interface User {
  name: string;
  email: string;
  city: string;
  age: number;
  weight: number;
}

function printUser(user: Partial<User>) {
  console.log(user.name);
}

//In objects:
const partial: Partial<User> = {
  name: 'Kaio',
};

/* Pick --------------------------*/
//Defines that the object has only the indicated fields

function printOnlyNameAndEmail(user: Pick<User, 'name' | 'email'>) {
  console.log(user);
  //console.log(user.age); => Error
}

//In objects:
const pick: Pick<User, 'name' | 'email'> = {
  name: 'Kaio',
  email: 'kaio@gmail.com',
};

/* Omit --------------------------*/
//Defines that the object has all fields of a interface except those indicated

function printUserWithoutWeight(user: Omit<User, 'city' | 'weight'>) {
  console.log(user);
}

//In objects:
const omit: Omit<User, 'city' | 'weight'> = {
  name: 'Kaio',
  email: 'kaio@gmail.com',
  age: 22,
};

/* Readonly */
//Defines that the object's fields cannot be changed

interface readOnlyUser {
  readonly name: string;
}

const freezedUser: readOnlyUser = {
  name: 'Kaio',
};

// freezedUser.name = 'woen'; => error
