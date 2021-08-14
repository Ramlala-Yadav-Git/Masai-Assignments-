

interface MyObject {
    title: string;
    status: boolean;
    id: number
}
let obj: MyObject

obj = { title: "Ram", status: true, id: 9 }

let addFn = (x: number, y: number): number => {
    return x + y
}

interface Person {
    fName: string,
    lName?: string
}
let getName = ({ fName, lName }: Person): string => {
    if (lName) {
        return fName + " " + lName;
    }
    return fName
}

console.log(getName({ fName: "Ram" }));

interface Address {
    houseNumber: number,
    street: number,
    city: string,
    state: string,
    postalCode: number,
    country: string,
    appropriateType: string

}

interface PersonDetails {
    prefix?: string,
    phone: number[],
    address: any[],
    email?: any,
    firstname: string,
    lastname: string,
    middlename?: string
}

let PhoneBook = (PersonDetails: PersonDetails) => {
    let arr = []
    arr[0] = PersonDetails
    return arr
}
let person1: PersonDetails
person1 = { firstname: "Ram", lastname: "Yadav", middlename: "Kumar", email: "ram@123", address: [1, 2, 3, 4], phone: [1, 2, 3] }
let x = PhoneBook(person1)

