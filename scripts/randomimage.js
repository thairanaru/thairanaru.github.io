console.log("Hello World!");
function insertRandomImage(totalImages) {
	const randomPicture = "randomcolors/" + Math.floor(Math.random() * totalImages).toString() + ".png"
	document.getElementById("imageLocation").style.backgroundImage = "url(" + randomPicture + ")";
}
function returnRandomImage()
	return "https://th.bing.com/th/id/OIP.4we6lgUd-PqAES-ey4nh8QHaJ7?pid=ImgDet&rs=1"