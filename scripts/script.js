const lastURL = window.location.href.split("/").pop();
const values  = document.querySelectorAll(".menu-text");
let counter   = 0;

retrieve();

function openNav() {
    document.getElementById("nav-menu").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("nav-menu").style.width = "0";
}

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
            if (lastURL == "destination.html") {
                document.getElementById("dest-name").innerHTML = myObj.destinations[counter].name;
                document.querySelector(".dest-img").src        = myObj.destinations[counter].images.png;
                document.querySelector(".dest-img").alt        = myObj.destinations[counter].name;
                document.querySelector(".spaced").innerHTML    = myObj.destinations[counter].description;
                document.getElementById("distance").innerHTML  = myObj.destinations[counter].distance;
                document.getElementById("travel").innerHTML    = myObj.destinations[counter].travel;
            }
            else if (lastURL == "crew.html") {
                document.getElementById("crew-name").innerHTML = myObj.crew[counter].name;
                document.getElementById("role").innerHTML      = myObj.crew[counter].role;
                document.querySelector(".crew-img").src        = myObj.crew[counter].images.png;
                document.querySelector(".crew-img").alt        = myObj.crew[counter].name;
                document.querySelector(".spaced").innerHTML    = myObj.crew[counter].bio;
            }
            else if (lastURL == "technology.html") {
                document.getElementById("tech-name").innerHTML = myObj.technology[counter].name;
                document.querySelector(".tech-img").src = document.body.clientWidth <= 1024 ? myObj.technology[counter].images.landscape : myObj.technology[counter].images.portrait 
                document.querySelector(".tech-img").alt        = myObj.technology[counter].name;
                document.querySelector(".spaced").innerHTML    = myObj.technology[counter].description;
            }            
        }
    };
    xmlhttp.open("GET", "data.json", true);
    xmlhttp.send();
}