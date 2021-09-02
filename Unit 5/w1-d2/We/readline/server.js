

const readline = require('readline')

const readline1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

})

// readline1.question("what is your name \n", (name) => {
//     readline1.question("what is your country \n", (country) => {

//         console.log(`${name} belongs to ${country}`);
//         readline1.close();
//     })
// })

readline1.question("who is your bestfriend \n", (friend) => {
    if (friend === "Ramlala") {
        console.log("Thank You");
        readline1.question("Who is your worse friend \n", (name) => {
            console.log(name);
            readline1.close()
        })
    }
    else {
        console.log("I hate you");
        readline1.close()
    }
    //readline1.question("\n")
})

readline1.on("close", () => {
    console.log("Bye Bye");
})