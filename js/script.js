const image = document.getElementById('me');






image.addEventListener("click", myFunction)

function myFunction() {
    document.getElementById('main').style.color = "blanchedalmond";
    document.body.style.backgroundColor = 'rgb(114, 68, 95)';
    document.getElementById('header').style.backgroundColor = "rgb(114, 68, 95)";
    document.getElementById('project').style.backgroundColor = "black";
    document.getElementById('skills').style.backgroundColor = "rgb(114, 68, 95)";
    document.getElementsByClassName('grid-container')[0].style.backgroundColor = "rgb(114, 68, 95)";
}

function bigImg(x) {
    x.style.width = "30vh";


}

function normalImg(x) {
    x.style.width = "20vh";
}


function biglink(x) {
    x.style.fontSize = "1.5em";
    x.style.color = "pink";
}

function normallink(x) {
    x.style.fontSize = "1em";
    x.style.color = "white";
}