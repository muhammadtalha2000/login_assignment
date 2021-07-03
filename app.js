function onSignup() {
    // get input values
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var name = document.getElementById("name");
    var address =  document.getElementById("address");
    var contact_no = document.getElementById("contact_no.")
    var message = document.getElementById("message");

    var user = {
        email: email.value,
        password: password.value,
        name : name.value,
        address : address.value,
        contact_no : contact_no.value
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var userIdx = users.findIndex(function (val) {
        return val.email.toLowerCase() === user.email.toLowerCase()
    });

    if (userIdx === -1) {
        // this user is not exist
        users.push(user);
        // store in storage
        message.innerText = "Account created successfully"
        localStorage.setItem("users", JSON.stringify(users));
        // redirect to login page
        location.href = "login.html";
    } else {
        message.innerHTML = user.email + " use in another account";
    }
    // clear state
    setTimeout(() => {
        message.innerHTML = "";
    }, 2000);


    // console.log(user);


}

function onLogin() {
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

    if (currentUser) {
        message.innerText = "Login Successfully"
        localStorage.setItem("user", JSON.stringify(currentUser));
        // user login
        location.href = "index.html";
    } else {
        message.innerHTML = "Invalid credentials";
    }
    // clear state
    setTimeout(() => {
        message.innerHTML = "";
    }, 2000);
}

function onLogout() {
    var message = document.getElementById("message");
    localStorage.removeItem("user");
    // clear state
    setTimeout(() => {
        location.href = "login.html";
    }, 5000);
}

function getCurrentUser() {
    // var detial = document.getElementById("detial");
    var user = JSON.parse(localStorage.getItem("user"));
    // detial.innerHTML = "Logged in as " + " " + user.email.split("@")[0];
    var list1 = document.getElementById("list1");
    list1.innerText = "Email : "  + user.email;
    var list2 = document.getElementById("list2")
    list2.innerText = "Name :"  + " " + user.name;
    var list3 = document.getElementById("list3")
    list3.innerText = "Address : " + user.address
    var list4 = document.getElementById("list4")
    list4.innerText = "Contact No : " + user.contact_no


}

function additem(){
    var title = document.getElementById("title");
    var description = document.getElementById("description");

    var tilte_head = document.getElementById("tilte_head");
    var description_head = document.getElementById("description_head");

    tilte_head.innerText = "Title : " + title.value;
    description_head.innerText ="Description : " +  description.value;
}