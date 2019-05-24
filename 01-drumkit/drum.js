window.addEventListener( "keydown", (event)=>{
	//
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); //query selector can select files using its attribute
	const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
	if (!audio) return; //stops the function from running further
	audio.currentTime = 0; //rewinds to the start so play method could start the file again
	audio.play();
	key.classList.add('playing');
	setTimeout(()=>{});
});


const div_keys = document.querySelectorAll(".key");



function removeTransition(e){
	
	if (e.propertyName!== 'transform') return; //skip it if is not transform propperty
	this.classList.remove('playing');
};

div_keys.forEach(key => key.addEventListener('transitionend', removeTransition) ); //addevent listener  pass the event as a parameter in the function removetransition

