let anchor = document.querySelectorAll("nav>.container>div>ul>li a");

function addActive(obj) {
    for (let i = 0; i < anchor.length; i++) {
        anchor[i].classList.remove("active");
    }
    obj.classList.add("active");
}
