type A = Awaited<Promise<string>>;

type B = Awaited<Promise<Promise<number>>>;

type C = Awaited<boolean | Promise<number>>;

interface Todo {
    title: string;
    description: string;
}
const execute = async() =>{
    let c: C = await Promise.resolve().then(()=> true);
    console.log(c);
    let b: B = await Promise.resolve().then(()=> 7);
    console.log(b);
}
execute();

//TODO: uncomment tot run the Partial

// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
//     return { ...todo, ...fieldsToUpdate };
// }
//
// const todo1 = {
//     title: "organize desk",
//     description: "clear clutter",
// };
//
// const todo2 = updateTodo(todo1, {
//     description: "throw out trash",
// });
// console.log(todo2);


