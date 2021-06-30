
let container = document.getElementById("container");
async function getData() {
    
    let search = document.getElementById("input").value;
    try {
        let res = await fetch(
            `http://api.serpstack.com/search?access_key=0d7f0c4915519bb4a11fb458b7e868c3&query=${search}`
        );
        let data = await res.json();
        let { organic_results } = data;
        console.log(3);
        console.log(organic_results);
        appendData(organic_results);
    } catch (e) {
        console.log(e);
    }
}
function appendData(items) {
    container.innerHTML = null;
    items.forEach(({ title, url, displayed_url }) => {
        let div = document.createElement("div");
        div.class = "videoBx";
        div.innerHTML = `<a href=${url}><p>${displayed_url}</p></a><br>
        <h3>${title}</h3>`;
        container.append(div);
    });
}
function get(event) {
    if (event.key === "Enter") {
       console.log(1);
       
        getData();
    }
}

