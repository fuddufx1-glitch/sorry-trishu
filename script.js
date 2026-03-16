function forgive(){

document.getElementById("msg").innerHTML =
"Trishu please gussa mat ho 😭❤️ <br> \
I promise main tumhari calls ignore nahi karunga. <br> \
You are my favourite notification 📱❤️";

}

// hearts animation

setInterval(() => {

let heart = document.createElement("div");
heart.className = "heart";
heart.innerHTML = "❤️";

heart.style.left = Math.random()*100 + "vw";

document.querySelector(".hearts").appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000);

},300);
