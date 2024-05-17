/*
 sometimes it is more convenient to organize collections as key-value dictionaries, and other times it is more convenient to use arrays or lists.

It would be nice to have some kind of utility that would allow us to convert a “list of things into” a “dictionary of things”.

So, let’s treat this array of objects as our starting point:
*/
const phoneList = [
  { customerId: "0001", areaCode: "321", num: "123-4566" },
  { customerId: "0002", areaCode: "174", num: "142-3626" },
  { customerId: "0003", areaCode: "192", num: "012-7190" },
  { customerId: "0005", areaCode: "402", num: "652-5782" },
  { customerId: "0004", areaCode: "301", num: "184-8501" },
]
    /*
… and this as what we aim to get in the end…

const phoneDict = {
  "0001": {
    customerId: "0001",
    areaCode: "321",
    num: "123-4566",
  },
  "0002": {
    customerId: "0002",
    areaCode: "174",
    num: "142-3626",
  },
and so on
*/

interface PhoneInfo {
    customerId: string
    areaCode: string
    num: string
}

const listToDict = (
    list: PhoneInfo[], // take the list as an argument
    idGen: (arg: PhoneInfo) => string // a callback to get Ids
): { [k: string]: PhoneInfo } => {
    // create an empty dictionary
    const dict: { [k: string]: PhoneInfo } = {}

    // Loop through the array
    list.forEach((element) => {
        const dictKey = idGen(element)
        dict[dictKey] = element // store element under key
    })

    // return the dictionary
    return dict
}

const result = listToDict(phoneList, (item) => item.customerId)
console.log(result);