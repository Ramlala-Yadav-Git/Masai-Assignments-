var st1 = []
var st2 = []
var st3 = []
var st4 = []
var st5 = []




function add() {


    let input = document.getElementById("input").value;

    let day = document.getElementById("select").value;

    addToDay1(input, day)


}

function append(st) {
    let parent = document.getElementById("parent_day1")
    let Content = document.getElementById("content")
    Content.style.display = "block"

    if (st == null) {
        parent.innerText = null;

        let p = document.createElement("p")
        p.innerText = "No Content";

        parent.append(p)
    }
    else {
        parent.innerText = null;


        st.forEach(el => {
            let p = document.createElement("li")
            p.innerText = el;

            parent.append(p)
        });
    }

}




function show() {
    let day = document.getElementById("show").value;
    if (day == "day1") {
        st1 = JSON.parse(localStorage.getItem("st1"))
        append(st1)
    }
    if (day == "day2") {
        st2 = JSON.parse(localStorage.getItem("st2"))

        append(st2)
    }
    if (day == "day3") {
        st3 = JSON.parse(localStorage.getItem("st3"))

        append(st3)
    }
    if (day == "day4") {
        st4 = JSON.parse(localStorage.getItem("st4"))

        append(st4)
    }
    if (day == "day5") {
        st5 = JSON.parse(localStorage.getItem("st5"))

        append(st5)
    }
}


function addToDay1(input, day) {
    if (day == "day1") {
        st1.push(input)
        localStorage.setItem("st1", JSON.stringify(st1))

    }
    if (day == "day2") {
        st2.push(input)
        localStorage.setItem("st2", JSON.stringify(st2))

    }
    if (day == "day3") {
        st3.push(input)
        localStorage.setItem("st3", JSON.stringify(st3))

    }
    if (day == "day4") {
        st4.push(input)
        localStorage.setItem("st4", JSON.stringify(st4))

    }
    if (day == "day5") {
        st5.push(input)
        localStorage.setItem("st5", JSON.stringify(st5))

    }
}