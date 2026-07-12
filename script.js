const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-120){

card.classList.add("show");

}

});

});

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=Math.random()*20+15+"px";

heart.style.pointerEvents="none";

heart.style.animation="float 8s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,450);

const style=document.createElement("style");

style.innerHTML=`

@keyframes float{

0%{

transform:translateY(0);

opacity:1;

}

100%{

transform:translateY(-120vh);

opacity:0;

}

}

`;

document.head.appendChild(style);
const relationshipStart = new Date("2025-07-12T00:00:00");

function updateCounter() {

    const now = new Date();

    const difference = now - relationshipStart;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCounter();
setInterval(updateCounter, 1000);
const reasons=[

"Because your smile is my favorite sight.",
"Because your laugh makes my whole day better.",
"Because you always make me feel loved.",
"Because meeting you changed my life forever.",
"Because you're the first person I want to tell everything to.",
"Because your voice calms my heart.",
"Because you make distance feel smaller.",
"Because you understand me.",
"Because I can be myself with you.",
"Because you make me want to become a better man.",
"Because you're beautiful inside and out.",
"Because you always stay in my thoughts.",
"Because your happiness matters to me.",
"Because every call with you becomes my favorite part of the day.",
"Because you're my peace.",
"Because you're my comfort.",
"Because you make me feel at home.",
"Because your eyes are beautiful.",
"Because your heart is even more beautiful.",
"Because you chose me.",
"Because I still get butterflies.",
"Because you're my safe place.",
"Because you're adorable.",
"Because you always look beautiful, even when you don't think so.",
"Because your little habits make me smile.",
"Because you're worth every kilometer between us.",
"Because I'd choose you again and again.",
"Because you're my favorite notification.",
"Because you're the best thing that ever happened to me.",
"Because you make ordinary days feel special.",
"Because you're patient with me.",
"Because you're strong.",
"Because you're kind.",
"Because you're caring.",
"Because you're funny.",
"Because you're cute.",
"Because hearing 'I love you' from you makes everything okay.",
"Because I never get tired of talking to you.",
"Because I miss you even before our calls end.",
"Because you're the reason I smile at my phone.",
"Because you're my biggest blessing.",
"Because you inspire me.",
"Because you're my dream girl.",
"Because you make my future exciting.",
"Because you believe in us.",
"Because you're worth waiting for.",
"Because I love your beautiful soul.",
"Because your hugs will always be worth waiting for.",
"Because one day we'll close the distance.",
"Because you'll always be my Oliwita.",
"Because your heart feels like home.",
"Because you are my once in a lifetime.",
"Because you make every memory brighter.",
"Because you are my favorite chapter.",
"Because you make silence comfortable.",
"Because every photo of you makes me smile.",
"Because you are sunshine on cloudy days.",
"Because you are my lucky coincidence.",
"Because I prayed for someone like you without even knowing it.",
"Because you never fail to amaze me.",
"Because I admire you.",
"Because your heart is gentle.",
"Because I trust you.",
"Because we laugh together.",
"Because we dream together.",
"Because we grow together.",
"Because you make love feel easy.",
"Because our story is unique.",
"Because you are worth every second.",
"Because our first message became our forever story.",
"Because every anniversary with you will be special.",
"Because you make me proud.",
"Because I love your smile more every day.",
"Because you never leave my heart.",
"Because you are my best friend.",
"Because you make me feel lucky.",
"Because your name makes me smile.",
"Because I love saying 'my girlfriend'.",
"Because I can't imagine my future without you.",
"Because you're my favorite person.",
"Because you're my calm after every storm.",
"Because you're everything I wished for.",
"Because your love feels genuine.",
"Because your kindness makes me melt.",
"Because every day with you is a gift.",
"Because you make my world brighter.",
"Because you're my greatest adventure.",
"Because you're my peace of mind.",
"Because I love the way you care.",
"Because your existence makes my life better.",
"Because you make me believe in soulmates.",
"Because I feel lucky to call you mine.",
"Because your happiness is my happiness.",
"Because you're irreplaceable.",
"Because you're one in eight billion.",
"Because you make forever sound beautiful.",
"Because I still fall in love with you every day.",
"Because every heartbeat reminds me of you.",
"Because you're the love of my life.",
"Because you're my forever.",
"Because you'll always be my favorite hello.",
"Because I'll never stop choosing you.",
"Because I love you more than yesterday and less than tomorrow."

];

let index=0;

document.getElementById("heartButton").onclick=function(){

document.getElementById("reasonText").innerHTML=reasons[index];

index++;

if(index>=reasons.length){

index=0;

}

}
const reasonsAnimation = document.querySelectorAll(".reason");

window.addEventListener("scroll",()=>{

reasonsAnimation.forEach((box,index)=>{

const top = box.getBoundingClientRect().top;

if(top < window.innerHeight-80){

setTimeout(()=>{

box.classList.add("show");

},index*250);

}

});

});
const popup=document.getElementById("popup");

const music=document.getElementById("music");

const start=document.getElementById("startButton");

start.onclick=()=>{

music.play();

popup.style.opacity="0";

setTimeout(()=>{

popup.style.display="none";

},600);

}
const eyeMessages = [

`Out of everything beautiful in this world...

my favorite thing to look at

will always be your eyes. ❤️`,

`Every time I look into them...

I see kindness.

I see comfort.

I see peace.

I see the girl I love.`,

`I didn't fall in love because of your eyes...

but every time I look into them,

I remember exactly why I did. ❤️`,

`If home had a pair of eyes...

they would look exactly like yours. 🏡❤️`,

`I could spend forever looking into your eyes...

and it still wouldn't be enough.

I love you, Oliwia. ❤️`

];

let currentEye = 0;

const eyePhoto = document.getElementById("eyesPhoto");
const eyeText = document.getElementById("eyesMessage");

eyeText.classList.add("showEyes");

eyePhoto.addEventListener("click", () => {

currentEye++;

if(currentEye >= eyeMessages.length){

currentEye = 0;

}

eyeText.style.opacity = "0";

setTimeout(()=>{

eyeText.innerHTML = eyeMessages[currentEye].replace(/\n/g,"<br>");

eyeText.style.opacity = "1";

},300);

});
const stars = document.querySelector(".stars");

for(let i=0;i<200;i++){

    const star=document.createElement("span");

    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=Math.random()*5+"s";

    star.style.animationDuration=(2+Math.random()*3)+"s";

    stars.appendChild(star);
}
function toggleLetter(letter){

    letter.classList.toggle("open");

}