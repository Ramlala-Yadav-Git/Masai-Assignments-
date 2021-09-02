// const EventEmitter = require("events");
// const sendNotifaication = require("./notification");

// const eventEmitter = new EventEmitter()


// eventEmitter.on("Ram birthday", () => {
//     console.log("listner 1 Ram birthday notification recieved");
// })
// eventEmitter.on("Ram birthday", () => {
//     console.log("listner 2 Somesh birthday notification recieved");
// })
// eventEmitter.emit("Ram birthday")


// eventEmitter.on("ram checking gpay", () => {
//     console.log("added  8 rupee in wallet");
// })

// eventEmitter.emit("ram checking gpay")

// eventEmitter.on("ram checking gpay", (name) => {
//     console.log(`added  8 rupee in ${name} wallet`);
// })

// eventEmitter.emit("ram checking gpay", "Mahesh")


// function checkBithday() {

//     const birthdays = ['dahaval', 'mahesh', 'somesh']

//     birthdays.forEach(birthday => {
//         eventEmitter.on('birthday', sendNotifaication)

//     })
// }


const EventEmitter = require("events")
const emailVerification = require("./emailVerificaion");
const register = require("./ragister");
const thankYou = require("./thankYou");

const eventEmitter = new EventEmitter();


function SendEmail() {

    eventEmitter.on("register", register)
    eventEmitter.on("email verification", emailVerification)
    eventEmitter.on("thankyou", thankYou)

    eventEmitter.emit("register", "Ram")
    eventEmitter.emit("email verification", "Ram")
    eventEmitter.emit("thankyou", "Ram")
}


SendEmail()



