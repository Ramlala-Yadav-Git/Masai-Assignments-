// const root = document.getElementById("root")
// const body = document.getElementById("body")
var page = 1;
const api_url = "https://api.unsplash.com/photos?&client_id=a-3VGZpL3PwRbcXGVQDcFEzuJUySoHEoe-9QtPNqF2o&per_page=25";

async function getapi(url) {


    const response = await fetch(`https://api.unsplash.com/photos?page=${page}&client_id=a-3VGZpL3PwRbcXGVQDcFEzuJUySoHEoe-9QtPNqF2o&per_page=25`);


    var data = await response.json();

    appendData(data)

}
// var i = 0;

const container = document.querySelector('.container');
// getapi()
function appendData(data) {

    for (let i = 0; i < data.length; i++) {
        const p = document.createElement("p")
        p.innerText = data[i].user.name;
        container.append(p)
    }


}




getapi();

const getData = () => {
    setTimeout(() => {
        page++;
        console.log(page)
        getapi()
    }, 300)
}
window.addEventListener('scroll', () => {

    const { scrollHeight, scrollTop, clientHeight, clientTop } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {

        // console.log("sdjalk")
        getData()
    }
})