
function changeImage(){
    options = ["ark_nova.jpg", "cthulhu_dmd.jpg", "dune.jpg", "earth.jpg"]
    randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
    img = document.querySelector("article img")
    img.setAttribute("src", randomImg)

    if (randomImg == "images/" + "dune.jpg"){
        document.getElementById("myAnchor").setAttribute("href", "https://boardgamegeek.com/boardgame/316554/dune-imperium");
        img.setAttribute("alt", "Dune Imperium Board Game")
    } else if (randomImg == "images/" + "earth.jpg"){
        document.getElementById("myAnchor").setAttribute("href", "https://boardgamegeek.com/boardgame/350184/earth");
        img.setAttribute("alt", "Earth Board Game")
    } else if (randomImg == "images/" + "cthulhu_dmd.jpg"){
        document.getElementById("myAnchor").setAttribute("href", "https://boardgamegeek.com/boardgame/253344/cthulhu-death-may-die");
        img.setAttribute("alt", "Cthulhu Death May Die Board Game")
    }
}