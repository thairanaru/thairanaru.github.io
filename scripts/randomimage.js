console.log("Hello World!");
function insertRandomImage(totalImages) {
	const randomPicture = "randomcolors/" + Math.floor(Math.random() * totalImages).toString() + ".png"
	document.getElementById("imageLocation").style.backgroundImage = "url(" + randomPicture + ")";
}