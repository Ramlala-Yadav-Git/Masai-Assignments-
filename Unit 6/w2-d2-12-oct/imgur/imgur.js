// wtZgw1nQ3FI

const api_url = "https://api.unsplash.com/photos?page=2&client_id=a-3VGZpL3PwRbcXGVQDcFEzuJUySoHEoe-9QtPNqF2o";
const dApi = "https://api.unsplash.com/search/users?page=1&query=nas&client_id=a-3VGZpL3PwRbcXGVQDcFEzuJUySoHEoe-9QtPNqF2o"
async function getapi(url) {


    const response = await fetch(url);


    var data = await response.json();
    apendata(data)

}
async function getUsers(q) {
    // console.log(q)

    const response = await fetch(`https://api.unsplash.com/search/users?page=1&query=${q}&client_id=a-3VGZpL3PwRbcXGVQDcFEzuJUySoHEoe-9QtPNqF2o`);


    var data = await response.json();
    appendSearch(data.results)
    // console.log(data.results)

}
// getUsers("img")





function apendata(data) {
    // console.log(data, "nlkdsfn")
    const root = document.getElementById("root")




    for (let i = 0; i < data.length; i++) {
        const height = Math.floor(Math.random() * 800)
        var div = document.createElement("div")
        // console.log(height)

        div.innerHTML = `<div class="singleContent">
            <div>
                <img src=${data[i].urls.full} alt="a" height=${300} >
            </div>
            <div class="lowerContent">
               ${data[i].alt_description === null ? "." : data[i].alt_description}
                <div class="buttons">
                    <div>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>Upvote</title>
                            <path fill="#85ADC2" stroke="#ffffff" stroke-width="0" fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.197 2.524a1.2 1.2 0 011.606 0c.521.46 1.302 1.182 2.363 2.243a29.617 29.617 0 012.423 2.722c.339.435.025 1.028-.526 1.028h-2.397v4.147c0 .524-.306.982-.823 1.064-.417.066-1.014.122-1.843.122s-1.427-.056-1.843-.122c-.517-.082-.824-.54-.824-1.064V8.517H2.937c-.552 0-.865-.593-.527-1.028.52-.669 1.32-1.62 2.423-2.722a52.996 52.996 0 012.364-2.243z">
                            </path>
                        </svg>
                        <p>${data[i].likes}</p>

                    </div>
                    <div>
                        <svg width="16" height="16" viewBox="0 0 16 16" class="PostCommentsIcon" fill="#85ADC2"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>Comments</title>
                            <path fill="#85ADC2" stroke="#ffffff" stroke-width="0"
                                d="M4.455 12.195l.367 1.105 1.037-.53c.266-.135.637-.412 1.039-.74.39-.319.872-.737 1.422-1.245h2.291a3.306 3.306 0 003.306-3.306V5.306A3.306 3.306 0 0010.611 2H5.306A3.306 3.306 0 002 5.306v2.656c0 1.34.933 2.461 2.185 2.75.008.172.025.335.046.479a6.622 6.622 0 00.168.803c.016.07.035.137.056.2z">
                            </path>
                        </svg>
                        <p>${data[i].height}</p>
                    </div>
                    <div>
                        <svg width="16" height="16" viewBox="0 0 16 16" class="PostViewsIcon" fill="#85ADC2"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>Post views</title>
                            <path
                                d="M8 2.5C4.74998 2.5 2.30142 5.50267 1.27514 6.77517C0.925337 7.20917 0.908553 7.76483 1.2278 8.16583C2.22527 9.41833 4.6991 12.5 8 12.5C11.3686 12.5 13.8396 9.31133 14.796 8.0905C15.0769 7.732 15.0674 7.2535 14.7692 6.8755C13.7938 5.6395 11.3376 2.5 8 2.5ZM7.98224 9.33333C6.90897 9.33333 6.03887 8.51233 6.03887 7.5C6.03887 6.4875 6.90897 5.66667 7.98224 5.66667C9.05551 5.66667 9.92561 6.4875 9.92561 7.5C9.92561 8.51233 9.05551 9.33333 7.98224 9.33333Z"
                                fill="#85ADC2"></path>
                        </svg>
                        <p>${data[i].width}</p>

                    </div>
                </div>
            </div>
        </div>`

        root.append(div)
    }


    // root.append(div)

}
// apendata()

function appendSearch(d) {
    // const d = [1, 2, 3];
    console.log(d, "fksja")


    const searchDiv = document.getElementById("search")
    searchDiv.innerHTML = ""

    // let div = document
    for (let i = 0; i < d.length && i < 50; i++) {
        var p = document.createElement("p");
        p.setAttribute("id", d[i].id)
        p.setAttribute("class", "search")
        p.innerText = `${d[i].username}`
        p.addEventListener("click", () => handleClick(d[i].id))

        searchDiv.append(p)
    }


}
function handleClick(id) {
    const data = document.getElementById(id)
    const input = document.getElementById("input")
    const searchDiv = document.getElementById("search")
    input.value = data.innerText;
    searchDiv.style.display = "none"
    // console.log(data.innerText)
    // alert(id)

}

function handleChange(e) {
    const input = document.getElementById("input");
    const searchDiv = document.getElementById("search")
    searchDiv.style.display = "block"
    if (e.keyCode === 13) {
        searchDiv.style.display = "none"
        e.target.value = ""
    }
    else {

        const getD = (debounce(getUsers, 1000));
        getD(input.value)

    }



}
function debounce(fn, delay) {
    var timer = null;
    return function () {
        var context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}



getapi(api_url);
window.addEventListener(
    "scroll",
    () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight - 5) {
            getapi(api_url);

        }
    },
    {
        passive: true,
    }
);