### Utility Types

1. Awaited<Type>

This type is meant to model operations like await in async functions, or the .then() method on Promises - specifically, the way that they recursively unwrap Promises.


    
    type A = Awaited<Promise<string>>;                            
    
    
    type B = Awaited<Promise<Promise<number>>>;
    
    
    type C = Awaited<boolean | Promise<number>>;

2. Partial<Type>

Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
   
     interface Todo {
    title: string;
    description: string;
    }
    
    function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
    }
    
    const todo1 = {
    title: "organize desk",
    description: "clear clutter",
    };
    
    const todo2 = updateTodo(todo1, {
    description: "throw out trash",
    });

3. Required<Type>
4. Readonly<Type>
5. Record<Keys, Type>


Read more about utility types [here](https://www.typescriptlang.org/docs/handbook/utility-types.html) 

