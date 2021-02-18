/* Generics */
//Allows the caller of the function to define the types of parameters

function print<T>(parameter: T) {
  console.log(parameter);
}

const numberValue = 123;
const stringValue = 'abc';

print<number>(numberValue);
print<string>(stringValue);

//Real Example

function useState<S>(initialState: S) {
  let state = initialState;

  function setState(newState: S) {
    state = newState;
  }

  return [state, setState];
}

//Lock the state with the defined type
const [string, setString] = useState<string>('');

//-------

//Defines that the possible types must be number or string
function useStateWithExtends<S extends number | string>(initialState: S) {
  let state = initialState;

  function setState(newState: S) {
    state = newState;
  }

  return [state, setState];
}

const [number, setNumber] = useStateWithExtends<number>(0);

//Error => const [boolean, setBoolean] = useStateWithExtends<boolean>(true);

//-------

//Defines an type by default in interface
// * With extends notation -> useStateWithDefaultType<S extends string | number = number>
function useStateWithDefaultType<S = number>(initialState?: S) {
  let state = initialState;

  function setState(newState: S) {
    state = newState;
  }

  return [state, setState];
}

const [value, setValue] = useStateWithDefaultType();
