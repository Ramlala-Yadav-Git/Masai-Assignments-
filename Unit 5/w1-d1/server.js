
const fs = require('fs')


const data = fs.readFileSync("./name.txt")
console.log(data.toString());

fs.open("./name.txt", "w", (err, data) =>
    fs.writeSync(data, "Updated text")
)
fs.readFile("./name.txt", (err, fi) =>
    console.log(fi.toString())

)