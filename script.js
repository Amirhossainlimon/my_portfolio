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
// PREMIUM SMOOTH CURSOR
// =========================
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (cursorDot) {
        cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }
});

function animateCursor() {
    let distX = mouseX - outlineX;
    let distY = mouseY - outlineY;

    outlineX += distX * 0.2;
    outlineY += distY * 0.2;

    if (cursorOutline) {
        cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
    }

    requestAnimationFrame(animateCursor);
}

animateCursor();

const interactiveElements = document.querySelectorAll("a, button, .contact-box, input, textarea, .skill-item, .project-card, .experience-box, .certificate-card, .soft-skill-item");

interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        document.body.classList.add("cursor-hover");
    });
    el.addEventListener("mouseleave", () => {
        document.body.classList.remove("cursor-hover");
    });
});

// =========================
// GITHUB CONTRIBUTIONS API
// =========================
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

        const contributionElement = document.getElementById("contribution-count");
        if (contributionElement) {
            contributionElement.innerText = `${total} Contributions in the last year`;
        }

    } catch(error) {
        console.log(error);
        const contributionElement = document.getElementById("contribution-count");
        if (contributionElement) {
            contributionElement.innerText = "GitHub Contributions";
        }
    }
}

getGithubContributions();
