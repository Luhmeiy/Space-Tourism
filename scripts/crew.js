const values = document.querySelectorAll(".menu-text");
let counter  = 0;

retrieve();

for (const value of values) {
    value.addEventListener('click', () => {
        counter = value.id;
        toggle();
        retrieve();
    });
}

function toggle() {
    for (const value of values) {
        value.id == counter ? value.classList.add('active') : value.classList.remove('active');
    }
}

function retrieve() {
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            document.getElementById("dest-name").innerHTML = myObj.crew[counter].name;
            document.getElementById("role").innerHTML      = myObj.crew[counter].role;
            document.querySelector(".dest-img").src        = myObj.crew[counter].images.png;
            document.querySelector(".dest-img").alt        = myObj.crew[counter].name;
            document.querySelector(".spaced").innerHTML    = myObj.crew[counter].bio;
        }
    };
    xmlhttp.open("GET", "data.json", true);
    xmlhttp.send();
}