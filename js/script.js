function change(changeImg, changeBgcolor, changeColor) {
	document.querySelector('.cola').src = changeImg;
	document.querySelector('.header').style.backgroundColor = changeBgcolor;
	document.querySelector('.header__title').style.color = changeColor;
}