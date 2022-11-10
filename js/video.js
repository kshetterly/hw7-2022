var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1')
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to "+video.autoplay)
	console.log("Loop is set to "+video.autoplay)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("#Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
	video.play()
})

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause()
})

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow down video");
	video.playbackRate=video.playbackRate * .90
	console.log("Speed is", video.playbackRate)
})

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed up video");
	video.playbackRate=video.playbackRate * 1.113
	console.log("Speed is", video.playbackRate)
})

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip ahead 10 seconds in video");
	video.currentTime = video.currentTime + 10
	console.log("The time in the video is", video.currentTime)

	if(video.currentTime>=video.duration){
		video.currentTime=0;
		console.log("Restarting video");
		console.log("the time in the video is", video.currentTime);
	}
})

document.querySelector("#mute").addEventListener("click", function(){
	if (document.querySelector("#mute").innerHTML=="Mute") {
		console.log("The video was muted");
		video.muted = true;
		document.querySelector("#mute").innerHTML="Unmute"
	}

	else {
		console.log("The video was unmuted");
		video.muted = !video.muted;
		document.querySelector("#mute").innerHTML="Mute"
	}
})

document.querySelector("#slider").addEventListener("click", function(){
	console.log("The volume was changed");
	video.volume = this.value/100
	document.querySelector('#volume').innerHTML=video.volume * 100 + "%"
})

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("The video now has old school style.");
	video.classList.add('oldSchool')
})

document.querySelector("#orig").addEventListener("click", function(){
	console.log("The video now the original style.");
	video.classList.remove('oldSchool')
})




// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

