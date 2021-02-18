/* TypeAssertions */
//Force propertities or object with a type or interface

interface User {
  name: string;
  age: number;
}

//FirstShape
//{} does not have User form, but 'as' is forcing the type
const user: User = {} as User;

//Second shape
const user2: User = <User>{};
