function toggleNav() {
    var n = document.getElementsByTagName("nav")[0];
    if(n.style.display == "none")
        n.style.display = "block";
    else
        n.style.display = "none";
}