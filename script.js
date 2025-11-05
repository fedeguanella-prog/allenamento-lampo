const exercises=[
{name:"JUMPING JACK",img:"gifs/ex1.gif"},
{name:"SQUAT",img:"gifs/ex2.gif"},
{name:"PUSH UP",img:"gifs/ex3.gif"},
{name:"PLANK",img:"gifs/ex4.gif"},
{name:"LUNGES",img:"gifs/ex5.gif"},
{name:"MOUNTAIN CLIMBER",img:"gifs/ex6.gif"},
{name:"HIGH KNEES",img:"gifs/ex7.gif"},
{name:"AB WHEEL",img:"gifs/ex8.gif"}
];
const pauseImg="gifs/pause.gif";
const $=x=>document.getElementById(x);
$("startBtn").onclick=()=>{
let d=parseInt($("duration").value)||60,r=parseInt($("rest").value)||15;
$("setup").classList.add("hidden");$("countdown").classList.remove("hidden");
let c=3;$("count-num").textContent=c;
let cd=setInterval(()=>{c--;if(c>=0)$("count-num").textContent=c;
if(c<0){clearInterval(cd);$("countdown").classList.add("hidden");start(d,r)}},1000);
};
function shuffle(a){return a.sort(()=>Math.random()-0.5)}
async function start(d,r){
$("workout").classList.remove("hidden");
for(let ex of shuffle(exercises).slice(0,8)){
await doEx(ex.name,ex.img,d);await doEx("PAUSA",pauseImg,r,true);
}
$("exercise-name").textContent="FINITO!";$("exercise-img").src="";
}
function doEx(n,img,t,rest){
return new Promise(res=>{
$("exercise-name").textContent=n;$("exercise-img").src=img;$("timer-text").textContent=t;
let i=setInterval(()=>{t--;$("timer-text").textContent=t;if(t<=0){clearInterval(i);res()}},1000);
});
}