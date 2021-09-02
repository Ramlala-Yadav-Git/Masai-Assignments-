


const yargs = require("yargs")

console.log(process.argv);

console.log("yargs", yargs.argv);

if (yargs.argv?.hello) {
    console.log(yargs.argv.hello);
}
else {
    console.log("don't know if I should hello you");
}