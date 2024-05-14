var menuOpen = document.getElementById('menu');
var menuBackground = document.getElementById('menuBackground');
var buttonOpenMenu = document.getElementById('downloadButton');
var buttonCloseMenu = document.getElementById('closeButton');
var mainText = document.getElementById('mainText');
let texts = ["Лучший выбор для администратора!", "Удобный и надежный!", "Работает не смотря ни на что!", "Абсолютно бесплатный!"];
var text = "";

buttonOpenMenu.onclick = function () {
    menuBackground.style.display = "block";
    menuOpen.style.display = "block";
    menuOpen.style.animation = "ani 0.5s forwards";
    menuBackground.style.animation = "ani 0.5s forwards";
}

buttonCloseMenu.onclick = function () {
    menuBackground.style.animation = "anim 0.5s forwards";
    menuOpen.style.animation = "anim 0.5s forwards";
    setTimeout(function () { menuOpen.style.display = "none"; }, 500);
    setTimeout(function () { menuBackground.style.display = "none"; }, 500);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomText() {
    mainText.textContent = "Lulu Tools\n" + texts[getRandomInt(0,4)];
}