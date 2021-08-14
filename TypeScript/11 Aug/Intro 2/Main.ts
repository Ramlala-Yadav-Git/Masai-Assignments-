// types



//Boolean
let x: boolean;
x = true;

//Number

let y: number;
y = 100;

// String 

let firstname: string;
firstname = "Ram"

//Arrays
let list: string[];
list = ["Ram", "Syam"]


let numArr: number[]


//Tuple
let tuple: [string, number]
tuple = ["hello", 123]

const enum user {
    User = "Ram",
    SuperUser = "Yadav",
    Admin = "Ramlala",
    SuperAdmin = "Ramlala Yadav"
}

// Null Undefined 

let u: undefined = undefined;
let n: null = null;


function sum(a: number, b: number): void {
    console.log(a + b);

}
sum(5, 4)

function Divide(a: number, b: number): void {
    console.log(a / b);

}
Divide(5, 4)
function Print(m: string) {
    console.log(m);

}
Print("Ram")



