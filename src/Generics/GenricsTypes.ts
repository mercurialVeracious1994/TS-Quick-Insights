interface GenericIdentityFn<Type> {
    (arg: Type): Type;
}

const identity = <Type>(arg: Type): Type => {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
let myIdentityArray: GenericIdentityFn<[number]> = identity;
let myIdentityString: GenericIdentityFn<string> = identity;

console.log(myIdentity(8));
console.log(myIdentityArray([8]));
console.log(myIdentityString("Cool, isn't it?"));




