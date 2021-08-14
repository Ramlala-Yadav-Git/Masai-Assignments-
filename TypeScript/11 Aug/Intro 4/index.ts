
interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}
interface Admin { type: 'admin'; name: string; age: number; role: string; }
let ad: Admin
ad = {
    type: 'admin',
    name: "ram",
    age: 12,
    role: "teacher",
}
let user: User
user = { type: "user", name: "ram", age: 12, occupation: "Student" }
let Check = ({ type }) => {
    return (type)
}
let type = Check(user)
let typ2 = Check(ad)
console.log(type);
console.log(typ2);


