```javascript
/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const target = +counter.getAttribute("data-target");

let count = 0;

const updateCounter = () => {

const increment = target / 100;

if(count < target){

count += increment;

counter.innerText = Math.ceil(count);

requestAnimationFrame(updateCounter);

}else{

counter.innerText = target;

}

};

updateCounter();

});


/* =========================
   FAQ ACCORDION
========================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

const answer = item.querySelector("p");

answer.style.display = "none";

item.addEventListener("click", () => {

const visible = answer.style.display === "block";

document.querySelectorAll(".faq-item p")
.forEach(p => p.style.display = "none");

if(!visible){

answer.style.display = "block";

}

});

});


/* =========================
   REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
".card, .stat-box, .about-content, .about-image, .donasi-card, .faq-item"
);

const revealOnScroll = () => {

const triggerBottom = window.innerHeight * 0.85;

revealElements.forEach(el => {

const boxTop = el.getBoundingClientRect().top;

if(boxTop < triggerBottom){

el.classList.add("show");

}

});

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 80){

navbar.style.background =
"rgba(11,59,37,.98)";

navbar.style.boxShadow =
"0 5px 20px rgba(0,0,0,.15)";

}else{

navbar.style.background =
"rgba(15,81,50,.92)";

navbar.style.boxShadow = "none";

}

});


/* =========================
   FLOATING WHATSAPP
========================= */

const waButton = document.createElement("a");

waButton.href =
"https://wa.me/6285709308034";

waButton.target = "_blank";

waButton.innerHTML = "💬";

waButton.classList.add("floating-wa");

document.body.appendChild(waButton);


/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({

behavior:"smooth"

});

});

});


/* =========================
   HERO PARALLAX
========================= */

window.addEventListener("scroll", () => {

const hero = document.querySelector(".hero");

let offset = window.pageYOffset;

hero.style.backgroundPositionY =
offset * 0.5 + "px";

});
```
