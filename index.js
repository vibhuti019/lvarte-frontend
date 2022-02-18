function listenScrollEvent(){
    if (window.scrollY < 10) {
        document.getElementById('logo').src = "./assets/Lvarte.png"
        document.getElementById('menu').style.color = "white"
        document.getElementById('buttons').style.color = "white"
        document.getElementById('header').style.background = "transparent"
        document.getElementById('header-border').className = "header header-border"
    } else {
        document.getElementById('logo').src = "./assets/Artboard 1 copy 4.png"
        document.getElementById('menu').style.color = "black"
        document.getElementById('buttons').style.color = "black"
        document.getElementById('header').style.background = "white"
        document.getElementById('header').style.marginTop = "-4 vh"
        document.getElementById('header-border').className = "header"
    }
  }

window.addEventListener('scroll', listenScrollEvent)