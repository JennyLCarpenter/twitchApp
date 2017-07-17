function getTwitch(){
    var xhr = new XMLHttpRequest();
	xhr.open('GET','https://wind-bow.glitch.me/twitch-api/channels/freecodecamp', true);
	xhr.onreadystatechange = function(){
		if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
			var info = JSON.parse(xhr.responseText);
            console.log(info);
		}
	};
	xhr.send();
}


function featured(){
    var status = new XMLHttpRequest();
    status.open("GET", "https://wind-bow.glitch.me/twitch-api/streams/featured" , true);
    status.onreadystatechange = function(){
        if(status.readyState === XMLHttpRequest.DONE && status.status === 200){
            var data = JSON.parse(status.responseText);
            console.log(data);
        }
    };
    status.send(null);
}

featured();
getTwitch();
