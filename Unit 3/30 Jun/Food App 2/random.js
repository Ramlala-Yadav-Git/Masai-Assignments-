import { show, append } from "./scripts/show.js";

let container = document.getElementById("container")

let get = show(`https://www.themealdb.com/api/json/v1/1/random.php`)
get.then(({meals}) => {
    append(meals,container)
})