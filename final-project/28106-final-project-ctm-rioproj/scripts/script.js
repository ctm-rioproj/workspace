function toggleNav() {
    // Switches visibility of nav menu on or off.
    var n = document.getElementsByTagName("nav")[0];
    if(n.style.display == "none"){
        n.style.display = "block";
        document.getElementById("navbutton").style.backgroundColor = "#240806";
    }
        
    else {
        document.getElementById("navbutton").style.backgroundColor = "#3b100d";
        n.style.display = "none";
    }
}