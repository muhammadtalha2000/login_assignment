const Base_url = "http://localhost:8000";



onSignup = () => {
    // get input values
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var name = document.getElementById("name");
    var address = document.getElementById("address");
    var contact_no = document.getElementById("contact_no.")
    var message = document.getElementById("message");

    //user object
    var user = {
        email: email.value,
        password: password.value,
        name: name.value,
        address: address.value,
        contact_no: contact_no.value
    }


    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var userIdx = users.findIndex(function (val) {
        return val.email.toLowerCase() === user.email.toLowerCase()
    });

    //conditions for signup
    (userIdx === -1) ? (users.push(user), localStorage.setItem("users", JSON.stringify(users)), message.innerText = "Account created successfully") : message.innerText = `${user.email} use in another account`

    setTimeout(() => {
        location.href = "login.html"
        message.innerHTML = "";
    }, 5000);


    // console.log(user);


}

onLogin = () => {
    // get input values
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var message = document.getElementById("message");

    var user = {
        email: email.value,
        password: password.value,
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var currentUser = users.find(function (val) {
        return val.email.toLowerCase() === user.email.toLowerCase() && val.password === user.password;
    });



    (currentUser) ? (users.push(user), localStorage.setItem("user", JSON.stringify(currentUser), message.innerText = "Login Successfully")) : message.innerText = "Login Failed"

    setTimeout(() => {
        message.innerText = "";
        location.href = "index.html"
    }, 5000);
}

onLogout = () => {
    var message = document.getElementById("message");
    localStorage.removeItem("user");
    // clear state
    setTimeout(() => {
        location.href = "login.html";
    }, 5000);
}

getCurrentUser = () => {
    // var detial = document.getElementById("detial");
    var user = JSON.parse(localStorage.getItem("user"));
    // detial.innerHTML = "Logged in as " + " " + user.email.split("@")[0];
    var list1 = document.getElementById("list1");
    list1.innerText = "Email : " + user.email;
    var list2 = document.getElementById("list2")
    list2.innerText = "Name :" + " " + user.name;
    var list3 = document.getElementById("list3")
    list3.innerText = "Address : " + user.address
    var list4 = document.getElementById("list4")
    list4.innerText = "Contact No : " + user.contact_no


}

// function additem(){
//     var title = document.getElementById("title");
//     var description = document.getElementById("description");

//     var tilte_head = document.getElementById("tilte_head");
//     var description_head = document.getElementById("description_head");

//     tilte_head.innerText = "Title : " + title.value;
//     description_head.innerText ="Description : " +  description.value;
// }



addCard = () => {

    var title = document.getElementById("title");
    var description = document.getElementById("description");

    const obj = {
        title: title.value,
        description: description.value
    }



    var image = "https:image.shutterstock.com/image-vector/review-us-user-rating-concept-260nw-1362638027.jpg"

    var htmlText = `<div class="card" style="width: 18rem;">
            <img src=${image} alt="... ">
            <div class="card-body" style = "color : black">
              <h2 class="card-title">${title.value}</h2>
              <p class="card-text">${description.value}</p>
            </div>
          </div>`

    axios.post(`${Base_url}/create`, obj)
        .then((response) => {
            console.log("response", response);
        }).catch((error) => {
            console.log("error", error);
        })

    const getPost = () => {
        // post(url, headers)
        axios.get(`${Base_url}/posts`)
            .then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }

    getPost();


    var postCard = document.getElementById('cardhead');
    var li = document.createElement('li');
    var liText = document.createElement('div');
    liText.innerHTML = htmlText
    li.appendChild(liText)
    postCard.appendChild(li);

    title.value = "";
    description.value = "";

    cardhead.innerHTML = card
}
