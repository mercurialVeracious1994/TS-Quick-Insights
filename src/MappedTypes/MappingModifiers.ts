type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
    readonly id: string;
    readonly name: string;
    place: string
};

type UnlockedAccount = CreateMutable<LockedAccount>;
//   ^?

const unlocked: UnlockedAccount ={
    id: "1", name: "Name", place: "place"
}


const locked: LockedAccount ={
    id: "1", name: "Name", place: "place"
}
// locked.id = "5";

console.log(unlocked, "unlocked");
console.log(locked, "locked");

// TODO:  Optional

// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
    id: string;
    name?: string;
    gender?: string;
};

type User = Concrete<MaybeUser>;

const userStrict: User = {
    id: "1", name: "Garima", gender: "F"
}


const userMaybe: MaybeUser = {
    id: "1"
}