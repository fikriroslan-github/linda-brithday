const page1=document.getElementById("page1");
const page2=document.getElementById("page2");
const page3=document.getElementById("page3");
const gift=document.getElementById("giftButton");
const form=document.getElementById("answerForm");
const input=document.getElementById("answerInput");
const wrong=document.getElementById("wrongCard");
const success=document.getElementById("successCard");

const question=document.querySelector(".question");

const questionCard=document.querySelector(".question-card");

const correctAnswer="nasi ayam singapore";
// const wrong=document.getElementById("wrongCard");
// const success=document.getElementById("successCard");

// const correctAnswer="nasi ayam singapore";

// Replace this with the final birthday paragraph.
// const birthdayWish=`Assalamualaikum, Happy Birthday Linda!

// I'm doing this just to show my appreciation for you, so I hope this will make you happy.

// So here goes the wish I made for you....

// I wish you to have an eternity happiness in life hereafter.

// Also, I wish you will achieve whatever dream you have wish before. Being an obedient daughter to Mak, a cheerful, fun adek and acu to your family.

// I also wish you to have a great partner in life and I will work on it! I hope Allah will help us throughout this enjoyable and beautiful journey.

// `;

function show(page){
  [page1,page2,page3].forEach(p=>p.classList.remove("active"));
  page.classList.add("active");
}

function confetti(n=35){
  const box=document.getElementById("confetti");
  box.innerHTML="";
  const symbols=["✦","✧","♡","♥","•"];
  for(let i=0;i<n;i++){
    const s=document.createElement("span");
    s.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    s.style.left=Math.random()*100+"%";
    s.style.fontSize=8+Math.random()*12+"px";
    s.style.animationDelay=Math.random()+ "s";
    box.appendChild(s);
  }
  setTimeout(()=>box.innerHTML="",4500);
}

gift.addEventListener("click",()=>{
  gift.animate(
    [{transform:"scale(1) rotate(0deg)",opacity:1},
     {transform:"scale(1.1) rotate(-3deg)",opacity:1},
     {transform:"scale(.65) rotate(5deg)",opacity:0}],
    {duration:700,easing:"ease-in-out",fill:"forwards"}
  );
  setTimeout(()=>{show(page2);input.focus()},460);
});

form.addEventListener("submit",e=>{

  e.preventDefault();

  const answer=input.value.trim().toLowerCase().replace(/\s+/g," ");

  if(answer===correctAnswer){

    // Hide the question and answer area
    question.hidden=true;
    questionCard.hidden=true;

    // Show success message
    wrong.hidden=true;
    success.hidden=false;

    confetti(28);

  }else{

    // Hide the question and answer area
    question.hidden=true;
    questionCard.hidden=true;

    // Show wrong answer message
    success.hidden=true;
    wrong.hidden=false;

    input.value="";

  }

});
// form.addEventListener("submit",e=>{
//   e.preventDefault();
//   const answer=input.value.trim().toLowerCase().replace(/\s+/g," ");
//   if(answer===correctAnswer){
//     wrong.hidden=true;
//     success.hidden=false;
//     form.parentElement.style.display="none";
//     confetti(28);
//   }else{
//     success.hidden=true;
//     wrong.hidden=false;
//     input.value="";
//     input.focus();
//   }
// });

// document.getElementById("tryAgainButton").onclick=()=>{
//   wrong.hidden=true;
//   input.focus();
// };
document.getElementById("tryAgainButton").onclick=()=>{

  // Hide wrong-answer message
  wrong.hidden=true;

  // Show question and answer area again
  question.hidden=false;
  questionCard.hidden=false;

  // Focus the input
  input.focus();

};

document.getElementById("returnButton").onclick=()=>{
  reset();
  show(page1);
};

// document.getElementById("continueButton").onclick=()=>{
//   document.getElementById("wishMessage").textContent=birthdayWish.trim();
//   show(page3);
//   confetti(55);
// };
document.getElementById("continueButton").onclick=()=>{
  show(page3);
  confetti(55);
};

document.getElementById("replayButton").onclick=()=>{
  reset();
  show(page1);
};

function reset(){

  wrong.hidden=true;

  success.hidden=true;

  // Show question and answer area again
  question.hidden=false;
  questionCard.hidden=false;

  input.value="";

  gift.getAnimations().forEach(a=>a.cancel());

  gift.style.opacity="1";

  gift.style.transform="";

}
