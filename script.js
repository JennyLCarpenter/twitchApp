function getTwitch(type){
    var xhr = new XMLHttpRequest();
	xhr.open('GET','https://wind-bow.glitch.me/twitch-api/streams/' + type, true);
	xhr.onreadystatechange = function(){
		if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
			var info = JSON.parse(xhr.responseText);
            console.log(info);
            if(type === "freecodecamp"){
                campStatus(info.stream)
            } else{
                topTen(info.featured);
            }
		}
	};
	xhr.send();
}

function topTen(data){
    for(var i=0; i<10; i++){
        display(data[i]);
    }
}

function display(data){
    
    //Information Variables
    var imgSrc = data.image,
        user = data.stream.channel.name,
        userChannel = data.stream.channel.url,
        title = data.stream.channel.status;
    
    //Element variables
    var container = document.getElementById("streams"),
        listEl = document.createElement("li"),
        img = document.createElement("img"),
        name  = document.createElement("a"),
        status = document.createElement("p");
    
    //Status Logic
    if(data.stream === "null"){
        status.innerHTML = "Offline";
    } else{
        status.innerHTML = title;
    }
    
    //Assigning Information
    img.src = imgSrc;
    name.innerHTML = user;
    name.href = userChannel;
    
    //Organizing Elements
    listEl.appendChild(img);
    listEl.appendChild(name);
    listEl.appendChild(status);
    container.appendChild(listEl);
}

//Tells if freecodecamp is streaming
function campStatus(isOnline){
    var offline = document.getElementById("offline");
    if(isOnline === null){
        offline.innerHTML = "Offline";
    } else{
        offline.innerHTML = isOnline;
    }
}

getTwitch("freecodecamp");
getTwitch("featured");



//Freecodecamp img https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png