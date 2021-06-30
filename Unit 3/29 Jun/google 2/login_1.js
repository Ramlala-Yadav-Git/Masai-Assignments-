

function Register(e) {
    e.preventDefault();
   

    let formdata = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    username: document.getElementById("username").value,
    mobile: document.getElementById("number").value,
    description: document.getElementById("text-area").value,
    };
    formdata = JSON.stringify(formdata);

    fetch('https://masai-api-mocker.herokuapp.com/auth/register', {
        method: "POST",
        body: formdata,
        headers: {
        "Content-Type": "application/json",
        }
    }).then((res) => {
        return res.json()
    }).then((res) => {
        console.log(res);
    }) .catch((e) => {
      console.log(e);
    });
}

function login(e) {
    e.preventDefault();
     let formdata = {
    username: document.getElementById("username_l").value,
    password: document.getElementById("password_l").value,
    };
    let body =JSON.stringify(formdata)
    
  fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
    method: "POST",
    body: body,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      getmyProfile(res.token, formdata.username);
    })

    .catch((e) => {
      console.log(e);
    });
}
function getmyProfile(token , username) {
  fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
    
    headers: {
      'Authorization': `Bearer ${token}`
    },
  })
    .then((res) => {
      return res.json();
    })
      .then((res) => {
          if (res.username = username) {
              window.location.href = "home.html"
              console.log(res);
          }
          else {
              alert("Something got wrong")
          }
      
    })

    .catch((e) => {
      console.log(e);
    });
}