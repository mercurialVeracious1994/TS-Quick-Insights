### Conditional Types

In a wide range of programming languages, we can find if/then/else logic. JavaScript provides a ternary1 operator that allows us to express this kind of logic concisely. For example.

    `const x = 16
    const isXNegative = x >= 0 ? "no" : "yes"`
The general format of this expression in the regular JS/TS world, when used with values (as shown in the snippet above) is:

    condition ? exprIfTrue : exprIfFalse

Let's take an example with Generics 

    type CookingDevice<T> = T extends "grill" ? Grill : Oven

You probably notice the extends keyword in the condition, which as of TypeScript v5.3 is the only mechanism of expressing any kind of condition.

If we think back to the mental model of types a sets of allowed values, extends is a check of a subset relationship. Let’s look at a smaller example to convince ourselves of this

    const one = 1;
    const two = 2;
    
    
    type IsLowNumber<T> = T extends 1 | 2 ? true : false
    type TestOne = IsLowNumber<1>

type TestOne = true

    type TestTwo = IsLowNumber<2>
    
type TestTwo = true

    type TestTen = IsLowNumber<10>
    
type TestTen = false

    type TestTenWithTwo = IsLowNumber<10 | 2>
type TestTenWithTwo = boolean

Let’s look specifically at the conditions, when T is each of our three types

T = 1 —> { 1 } extends { 1, 2 } —> true
T = 2 —> { 2 } extends { 1, 2 } —> true
T = 10 —> { 10 } extends { 1, 2 } —> false
T = 10 | 2 —> { 10, 2 } extends { 1, 2 } —> boolean

**for X extends Y, we’re really testing whether the set represented by X is a subset of the set represented by Y**

**When a union type is “projected” through a generic, you can think of it kind of like each element of the union type is independently evaluated, and then all of the results are union’d together.**

In this case

* T = 2 —> { 2 } extends { 1, 2 } —> true
* T = 10 —> { 10 } extends { 1, 2 } —> false
* true | false —> boolean

