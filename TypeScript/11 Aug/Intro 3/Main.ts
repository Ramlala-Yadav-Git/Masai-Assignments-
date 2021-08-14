

interface MyObject {
    title: string;
    status: boolean;
    id: number
}
let ob: MyObject

obj = { title: "Ram", status: true, id: 9 }

let addF = (x: number, y: number): number => {
    return x + y
}

interface Person {
    fName: string,
    lName?: string
}
let getNam = ({ fName, lName }: Person): string => {
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

let PhoneBoo = (PersonDetails: PersonDetails) => {
    let arr = []
    arr[0] = PersonDetails
    return arr
}
let person: PersonDetails
person = { firstname: "Ram", lastname: "Yadav", middlename: "Kumar", email: "ram@123", address: [1, 2, 3, 4], phone: [1, 2, 3] }
let arr = PhoneBook(person)

