
// TODO: Let's try with Generics

// TODO: What we need here is some mechanism of defining a relationship between the type of the thing we’re passed, and the type of the thing we’ll return. This is what Generics are all about
// TODO: Functions may return different values, depending on the arguments you pass them.

// function listToDict<T>(
//   list: T[],
//   idGen: (arg: T) => string
// ): { [k: string]: T } {
//   const dict: { [k: string]: T } = {}
//   return dict
// }


const listToDictGenerics = <T> (
    list: T[],
    idGen: (arg: T) => string
): { [k: string]: T } => {
    const dict: { [k: string]: T } = {}

    list.forEach((element) => {
        const dictKey = idGen(element)
        dict[dictKey] = element
    })

    return dict;
}

const dict1 = listToDictGenerics(
    [{name: "Equal Experts"}, {name:"Quick Insights"}, {name: "Generics"}],
    (item)=>item.name
)
console.log(dict1);