/*
   TODO:  Now, let’s attempt to generalize this, and make it so that it works for lists and
    dictionaries of our PhoneInfo type, but lots of other types as well.
     How about if we replace every PhoneInfo type with any…
 */

const listToDict = (
    list: any[],
    idGen: (arg: any) => string
): { [k: string]: any } => {

    // nothing changed in the code below
    const dict: { [k: string]: any } = {}
    list.forEach((element) => {
        const dictKey = idGen(element)
        dict[dictKey] = element
    })
    return dict;
}

const dict = listToDict(
    [{ name: "Mike" }, { name: "Mark" }],
    (item) => item.name
)
console.log(dict);

