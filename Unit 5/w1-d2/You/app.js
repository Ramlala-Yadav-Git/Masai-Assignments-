

const readline = require('readline')


const readline1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let books = ["Rich dad", "poor dad"]
function choices() {
    readline1.question("palease select your choice 1,2, or 3 \n", (choice) => {

        if (choice == 1) {
            choice1();
        }
        else if (choice == 2) {

            choice2()
        }
        else if (choice == 3) {


            choice3()


        }
        else {
            warning()
        }


    })
}

readline1.on("close", () => {
    console.log("Thank You please visit Again");
})

function choice1() {
    for (let i = 0; i < books.length; i++) {
        console.log(books[i]);
    }

    choices()
}
function choice2() {
    readline1.question('Please add enter book name \n', (name) => {
        books.push(name)
        choices()
    })
}
function choice3() {
    readline1.question("Are you sure press y or n \n", (res) => {
        if (res == "y") {
            readline1.close()
        }
        else {
            choices()
        }

    })
}

function warning() {
    console.log("Please choose right choice ");
    choices()
}
choices()