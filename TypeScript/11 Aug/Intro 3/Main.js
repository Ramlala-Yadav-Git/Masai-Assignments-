var obj;
obj = { title: "Ram", status: true, id: 9 };
var addFn = function (x, y) {
    return x + y;
};
var getName = function (_a) {
    var fName = _a.fName, lName = _a.lName;
    if (lName) {
        return fName + " " + lName;
    }
    return fName;
};
console.log(getName({ fName: "Ram" }));
var PhoneBook = function (PersonDetails) {
    var arr = [];
    arr[0] = PersonDetails;
    return arr;
};
var person2;
person1 = { firstname: "Ram", lastname: "Yadav", middlename: "Kumar", email: "ram@123", address: [1, 2, 3, 4], phone: [1, 2, 3] };
let x = PhoneBook(person1);
console.log(x)
