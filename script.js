// =========================
// ONE TIME NAME TYPING
// =========================


const nameText = "Hi, I'm Amir Hossain Limon";

const nameElement = document.querySelector(".typing-name");


let nameIndex = 0;



function typeName(){


if(nameIndex < nameText.length){


nameElement.innerHTML += nameText.charAt(nameIndex);


nameIndex++;


setTimeout(typeName,100);


}


}




window.addEventListener("load",()=>{


typeName();


});









// =========================
// ROLE LOOP TYPING
// =========================


const roleText = 
"Flutter Developer | Cross-Platform Mobile App Development";


const roleElement = document.querySelector(".role-text");



let roleIndex = 0;

let deleting = false;






function roleTyping(){



if(!deleting){


roleElement.innerHTML =
roleText.substring(0,roleIndex);


roleIndex++;



if(roleIndex > roleText.length){


deleting = true;


setTimeout(roleTyping,1500);


return;


}



}

else{


roleElement.innerHTML =
roleText.substring(0,roleIndex);


roleIndex--;



if(roleIndex < 0){


deleting=false;


roleIndex=0;


}



}



let speed = deleting ? 40 : 80;



setTimeout(roleTyping,speed);



}




window.addEventListener("load",()=>{


setTimeout(roleTyping,2000);


});









// =========================
// MOBILE NAVBAR
// =========================


const menu = document.querySelector(".menu");

const navLinks = document.querySelector(".nav-links");



menu.addEventListener("click",()=>{


navLinks.classList.toggle("active");

});







// Close menu after click


document.querySelectorAll(".nav-links a")
.forEach(link=>{


link.addEventListener("click",()=>{


navLinks.classList.remove("active");


});


});