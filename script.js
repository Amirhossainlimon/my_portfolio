// =========================
// SCROLL REVEAL ANIMATION (Smooth Fade-up)
// =========================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// =========================
// ONE TIME NAME TYPING (Original)
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
// ROLE LOOP TYPING (Original)
// =========================
const roleText = "Flutter Developer | Cross-Platform Mobile App Development";
const roleElement = document.querySelector(".role-text");
let roleIndex = 0;
let deleting = false;

function roleTyping(){
    if(!deleting){
        roleElement.innerHTML = roleText.substring(0,roleIndex);
        roleIndex++;
        if(roleIndex > roleText.length){
            deleting = true;
            setTimeout(roleTyping,1500);
            return;
        }
    }
    else{
        roleElement.innerHTML = roleText.substring(0,roleIndex);
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
// MOBILE NAVBAR (Original)
// =========================
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
});
document.querySelectorAll(".nav-links a").forEach(link=>{
    link.addEventListener("click",()=>{
        navLinks.classList.remove("active");
    });
});

// =========================
// PREMIUM CURSOR (Original Logic)
// =========================
if (window.matchMedia("(pointer: fine)").matches) {
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    window.addEventListener("mousemove", (e)=>{
        cursorDot.style.left = e.clientX + "px";
        cursorDot.style.top = e.clientY + "px";

        cursorOutline.animate(
            [
                { left: cursorOutline.style.left, top: cursorOutline.style.top },
                { left: e.clientX + "px", top: e.clientY + "px" }
            ],
            { duration: 400, fill:"forwards" }
        );
    });

    const hoverElements = document.querySelectorAll("a, button, .skill-item, .project-card, .contact-box, .experience-box, .certificate-card, .soft-skill-item");
    hoverElements.forEach((item)=>{
        item.addEventListener("mouseenter",()=>{ cursorOutline.classList.add("cursor-hover"); });
        item.addEventListener("mouseleave",()=>{ cursorOutline.classList.remove("cursor-hover"); });
    });
}


async function getGithubContributions() {

    const username = "Amirhossainlimon";

    try {

        const response = await fetch(
            `https://github-contributions-api.jogruber.de/v4/${username}`
        );

        const data = await response.json();


        let total = 0;


        data.contributions.forEach(day => {

            total += day.count;

        });


        document.getElementById("contribution-count").innerText =
        `${total} Contributions in the last year`;


    } catch(error) {

        console.log(error);

        document.getElementById("contribution-count").innerText =
        "GitHub Contributions";

    }

}


getGithubContributions();






const splashScreen = document.getElementById('splash-screen');
const progressBar = document.getElementById('progress-bar');
const percentageText = document.getElementById('percentage');
const commandText = document.getElementById('command-text');
const statusText = document.getElementById('status-text');

// Dynamic boot log messages
const steps = [
    { at: 15, text: "> Bypassing firewall security..." },
    { at: 35, text: "> Allocating memory blocks..." },
    { at: 60, text: "> Decrypting neural database..." },
    { at: 85, text: "> Establishing secure mainframe link..." },
    { at: 100, text: "> Access Granted. Welcome!" }
];

let progress = 0;

const loadingInterval = setInterval(() => {
    progress += Math.floor(Math.random() * 4) + 1;

    if (progress >= 100) {
        progress = 100;
        clearInterval(loadingInterval);
        statusText.innerText = "ONLINE";
        statusText.style.color = "#27c93f";

        // Fade out transition
        setTimeout(() => {
            splashScreen.style.opacity = '0';
            splashScreen.style.transition = 'opacity 0.5s ease';
            setTimeout(() => splashScreen.remove(), 500);
        }, 500);
    }

    // Update UI elements
    progressBar.style.width = progress + '%';
    percentageText.innerText = progress + '%';

    // Change status text based on progress milestones
    steps.forEach(step => {
        if (progress >= step.at && commandText.innerText !== step.text) {
            commandText.innerText = step.text;
        }
    });

}, 35);

