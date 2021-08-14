var ad;
ad = {
    type: 'admin',
    name: "ram",
    age: 12,
    role: "teacher"
};
var user;
user = { type: "user", name: "ram", age: 12, occupation: "Student" };
var Check = function (_a) {
    var type = _a.type;
    return (type);
};
var type = Check(user);
var typ2 = Check(ad);
console.log(type);
console.log(typ2);
