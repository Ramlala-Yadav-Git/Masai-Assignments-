



let video_div = document.getElementById("div")

async function trendingvideos() {
    try {
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyAYJQHN3RtXEY195wAWK7Za_WchsX2-MsI&maxResults=20`)
        let data = await res.json()
         let { items } = data;
         console.log(items[0].id);
        // items = items.filter(({id:{videoId}}) => {
        //     return videoId != undefined;

        // });
       appendV(items)
    }
    catch (e) {
        console.log(e);
    }
}
trendingvideos()


async function searchVideos() {
    let quary = document.getElementById("input").value;
    try {
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?&maxResults=20&q=${quary}&key=AIzaSyAYJQHN3RtXEY195wAWK7Za_WchsX2-MsI`)
        let data = await res.json();
        let { items } = data;
        console.log(data);
         
        items = items.filter(({id:{videoId}}) => {
            return videoId != undefined;

        });
appendVideos(items)
       
    }
    catch (e) {
        console.log(e);
    }
    
}
function appendV(videos) {
    
    video_div.innerHTML = null;
    videos.forEach((el) => {
       console.log(el.id);
       let div = document.createElement("div")
       div.innerHTML =`<iframe
      width="300"
      height="200"
      src="https://www.youtube.com/embed/${el.id}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>`
      
       video_div.append(div)
   });
    
}
function appendVideos(videos) {
    
    video_div.innerHTML = null;
   videos.forEach(({id:{videoId}}) => {
       let div = document.createElement("div")
       div.innerHTML =`<iframe
      width="300"
      height="200"
      src="https://www.youtube.com/embed/${videoId}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>`
      
       video_div.append(div)
   });
    
}
