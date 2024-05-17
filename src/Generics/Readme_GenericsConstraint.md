### Generic Constraints

Generic constraints allow us to describe the “minimum requirement” for a type param, such that we can achieve a high degree of flexibility, while still being able to safely as
sume some minimal structure and behavior for use within the scope that has access to the type param.

    `function listToDict<T>(
    list: T[],
    idGen: (arg: T) => string
    ): { [k: string]: T } {
    return {}
    }`

In this situation, we ask the caller of listToDict to provide us with a means of obtaining an id, but let’s imagine that every type we wish to use this with has an id: string property, and we should just use that as a key.
    
    interface HasId {
    id: string
    }
   
     interface Dict<T> {
        [k: string]: T
     }
    
    function listToDict(list: HasId[]): Dict<HasId> {
    const dict: Dict<HasId> = {}
    
    list.forEach((item) => {
    dict[item.id] = item
    })
    
    return dict
    }

Great, now let’s implement this with generics:

    interface HasId {
    id: string
    }
    interface Dict<T> {
    [k: string]: T
    }
    
    function listToDict<T>(list: T[]): Dict<T> {
    const dict: Dict<T> = {}
    
    list.forEach((item) => {
    dict[item.id] = item
        //Property 'id' does not exist on type 'T'.
    })
    
    return dict
    }

The problem here is that T can be anything, potentially including things that don’t have this id: string property. We were able to get away with this in our initial solution (with the idGen function) because listToDict didn’t really do anything with T other than store a reference to it in a dictionary.

# Describing the constraint
The way we define constraints on generics is by using the **_extends_** keyword.

The correct way of making our function generic is shown in the 1-line change below:

    function listToDict(list: HasId[]): Dict<HasId> {}

    function listToDict<T extends HasId>(list: T[]): Dict<T> { }

Note that our “requirement” for our argument type (HasId[]) is now represented in two places:

extends HasId as the constraint on T
list: T[] to ensure that we still receive an array

#### When a class extends from a base class, it’s guaranteed to at least align with the base class structure. In the same way, T extends HasId guarantees that “T is at least a HasId”.