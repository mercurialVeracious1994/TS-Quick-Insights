
// Example 1

function identity<Type>(arg: Type): Type {
    return arg;
}
console.log(identity("Generics Quick Insights")); // string
console.log(identity([3,4,5,5]));                 // array
console.log(identity({name: "Quick Insights", topic: "Generics"})) // object

/* the compiler will enforce that you use any generically typed parameters in the body of the function correctly.

  log the length of the argument arg to the console with each call? We might be tempted to write this:

 TODO:  console.log(arg.length);

 TRY following

 function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}
*/

const loggingIdentity = <Type>(arg: Array<Type>): Array<Type> => {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}

loggingIdentity([1,2,3,4]);
loggingIdentity(["Garima"]);
loggingIdentity([{a:"a",b:"b",c:"c"}]);

// TODO: Let's read Generic Types