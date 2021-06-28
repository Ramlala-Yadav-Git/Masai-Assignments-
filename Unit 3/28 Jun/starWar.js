// we do not create closer js itself create closer whnever it needs it


// Debouncing =>>>>>>>>>>>>


let movies_div = document.getElementById("movies")

let timer_id;
async function searchMovies() {
    
let name = document.getElementById("input").value
    // if (name.length <= 2) {
    //     return false;
    // }
    
    let res = await fetch(` https://swapi.dev/api/people/?search=${name}`)

    let data = await res.json()
   
   
    return data;
   
    
}

//searchMovies()



function appendMovies(movies) {
    let a = 0;
    movies_div.style.display = "block"
    movies_div.innerText = null;
    movies.forEach(el => {
       let p =  document.createElement('p')

        p.innerText = el.name;
        p.setAttribute("id",a)
        movies_div.append(p)
       
        a++;
        //console.log(p);
    });
   
}

async function main() {
   
   let {results} = await searchMovies();

  appendMovies(results)
}



function throttleFunction(func,delay) {

    if (timer_id) {
        return ;
    }

    timer_id = setTimeout(() => {
        func()

        timer_id = undefined;
    }, delay);
    
}