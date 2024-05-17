## What we will cover in this episode:

   ### 1. Generics 
   ### 2. Generics Constraints
   ### 3. Conditional Types
   ### 4. Mapped Types
   ### 5. Utility Types


## GENERICS

A major part of software engineering is building components that not only have well-defined and consistent APIs, but are also reusable

In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is generics, that is, being able to create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.



Without generics, we would either have to give the identity function a specific type:

    `function identity(arg: number): number {
    return arg;
    }`

Or, we could describe the identity function using the any type:

    `function identity(arg: any): any {
    return arg;
    }`

it will cause the function to accept any and all types for the type of arg, we actually are losing the information about what that type was when the function returns.If we passed in a number, the only information we have is that any type could be returned.

we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned. 

    `function identity<Type>(arg: Type): Type {
    return arg;
    }`

### Let's Try the above code

