// Todo: We use tuples when we want to express an array with a fixed number of elements whose types are known, but need not be the same.

//! we typically use tuple when we want to express an array with a fixed number of elements, and they don't change later on. So, to prevent `push` or `pop` operations on the array, we mark it as `readonly`.
type MyTuple = readonly [number, string, boolean];

const tuple1: MyTuple = [101, 'hello', true];

// Tuples are useful when working with arrays of multiple types where the order of the values is important.
// Tuples are also useful when working with functions that return multiple values.

//! Extracting values from a tuple
const [numb, str] = tuple1; //? Extracting values from a tuple is similar to extracting values from an array.

console.log(numb, str); // 1 'a'

// tuple1.push('alpha'); //? Error: Property 'push' does not exist on type 'readonly [number, string, boolean]'.
