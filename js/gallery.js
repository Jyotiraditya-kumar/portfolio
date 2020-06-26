function upDate(previewPic) {
    x = document.getElementById("image");
    z = document.getElementById("lview");
    x.src = previewPic.src;
    z.style.display = "block";

}

function unDo() {
    x = document.getElementById("image");
    z = document.getElementById("lview");
    z.style.display = "none";
    x.src = "";


}

function openNav() {
    x = document.getElementById("collapse");
    if (window.matchMedia("(max-width:400px)").matches) {
        x.style.width = "150px";
    } else if (window.matchMedia("(max-width:600px)").matches) {
        x.style.width = "200px"
    }


}

function closeNav() {
    x = document.getElementById("collapse");
    x.style.width = "0";
}