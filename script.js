const container = document.querySelector(".container")
const unsplashURL = "https://source.unsplash.com/random/"
const rows = 10

for(let i = 0; i < rows *3; i++){
	const img = document.createElement("img")
	img.src = `${unsplashURL}${getRandomSize()}`
	
	//append it
	container.appendChild(img)
}



function getRandomSize(){
	return `${getRandomNr()}x${getRandomNr()}`
}



function getRandomNr(){
	//300-310
	return Math.floor(Math.random()*10) + 300
}