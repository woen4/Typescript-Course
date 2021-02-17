/* Interfaces: define types for objects */

interface User {
  name: string;
  age: number;
}

function printUser(user: User) {
  // The types of user object attributes are known
  console.log(`Name ${user.name} / Age: ${user.age}`);
}

//Optional fields: ? character
interface UserWithOptionalFields {
  name: string;
  age: number;
  weight?: number;
}

const user: UserWithOptionalFields = { name: 'Kaio', age: 22 };
const user2: UserWithOptionalFields = { name: 'Kaio', age: 22, weight: 22 };

//Dynamic fields
// All fields must be of same type

interface DynamicUser {
  name: string;
  [key: string]: string;
}

const dynamicUser: DynamicUser = { name: '', city: '' };
