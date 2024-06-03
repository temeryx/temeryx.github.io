function changeImage(){
    options = ["ark_nova.jpg", "cthulhu_dmd.jpg", "dune.jpg", "earth.jpg"]
    randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
    img = document.querySelector("article img")
    img.setAttribute("src", randomImg)
    img.setAttribute("alt", "")
}