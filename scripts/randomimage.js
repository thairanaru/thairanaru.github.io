console.log("Hello World!");
function insertRandomImage(x) {
	const randomPicture = "randomcolors/" + Math.floor(Math.random() * x).toString() + ".png"
	document.getElementById("imageLocation").innerHTML = "<img src=\"" + randomPicture + "\" alt=\"Hi. If you are able to see this message, I am sorry to tell you that this website has broke in your browser.\" style = \" display:block;width:100%; height:100%;object-fit: cover;\"><img/";
}