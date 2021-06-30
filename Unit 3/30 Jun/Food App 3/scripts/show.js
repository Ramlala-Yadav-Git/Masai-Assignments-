

async function show(url) {
    
    let res = await fetch(url)
    let data = await res.json()
     console.log(data);
    return data;
   
}

// let parent = document.getElementById("container")

function append(d,parent) {
    parent.innerHTML = "";
    d.forEach(el => {
        let div = document.createElement("div")

        let name = document.createElement('h1')
        name.innerText = `${el.strMeal}`;

        let img = document.createElement("img")
        img.src = el.strMealThumb;

        let category = document.createElement("p")
        category.innerText = `Category : ${el.strCategory}`
        
        let area = document.createElement("p")
        area.innerText =`Country of origin : ${el.strArea}`
            
        div.append(img,name,category,area)

         parent.append(div)
    });
}
export {show,append}