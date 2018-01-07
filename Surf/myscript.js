function showCircle() {
    document.getElementById("circle").style.display = "block";
}

function hideCircle() {
    document.getElementById("circle").style.display = "none";
}

function teamActive(element) {
    element.classList.add("tcard-active"); 
    element.children[3].src = "images/Waves.png";
}

function teamUsual(element) {
    element.classList.remove("tcard-active"); 
    element.children[3].src = "images/Waves (1).png";
}

function blogHover(element) {
    element.classList.add("blog-hover");
}

function blogUsual(element) {
    element.classList.remove("blog-hover");
}