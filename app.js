const STORAGE_KEY = "securityPlusMasterProgressV1";
let progress = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
let current = null;
let selected = null;
let showChoiceFa = false;

function initProgress(){
  QUESTION_BANK.forEach(q=>{
    if(!progress[q.id]) progress[q.id] = {box:1, correct:0, wrong:0, lastSeen:0, due:Date.now()};
  });
  save();
}
function save(){localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));}
function dueQuestions(){
  const now = Date.now();
  return QUESTION_BANK.filter(q => (progress[q.id]?.due || 0) <= now);
}
function pickQuestion(){
  const pool = dueQuestions().length ? dueQuestions() : QUESTION_BANK;
  pool.sort((a,b)=>(progress[a.id].box-progress[b.id].box) || (progress[a.id].lastSeen-progress[b.id].lastSeen));
  const top = pool.slice(0, Math.min(10, pool.length));
  return top[Math.floor(Math.random()*top.length)];
}
function renderStats(){
  const total = QUESTION_BANK.length;
  const due = dueQuestions().length;
  const mastered = Object.values(progress).filter(p=>p.box>=5).length;
  const correct = Object.values(progress).reduce((s,p)=>s+p.correct,0);
  const wrong = Object.values(progress).reduce((s,p)=>s+p.wrong,0);
  document.getElementById("stats").innerHTML = [
    [total,"Questions"],[due,"Due now"],[mastered,"Mastered"],[correct,"Correct"],[wrong,"Review"]
  ].map(([n,l])=>`<div class="stat"><b>${n}</b><span>${l}</span></div>`).join("");
}
function render(){
  selected = null; showChoiceFa = false;
  current = pickQuestion();
  const p = progress[current.id];
  document.getElementById("counter").textContent = `Box ${p.box} • ${current.id}`;
  document.getElementById("domain").textContent = current.domain;
  document.getElementById("questionEn").textContent = current.question;
  document.getElementById("questionFa").textContent = current.question_fa;
  document.getElementById("faQuestionBlock").classList.add("hidden");
  document.getElementById("answerBlock").classList.add("hidden");
  const choices = document.getElementById("choices");
  choices.classList.remove("show-fa");
  choices.innerHTML = current.choices.map(c=>`<div class="choice" data-key="${c.key}"><span class="label">${c.key}.</span>${c.text}<div class="choice-fa rtl">${c.fa}</div></div>`).join("");
  document.querySelectorAll(".choice").forEach(el=>el.onclick=()=>{
    selected = el.dataset.key;
    document.querySelectorAll(".choice").forEach(x=>x.classList.remove("selected"));
    el.classList.add("selected");
  });
  renderStats();
}
function mark(correct){
  const p = progress[current.id];
  p.lastSeen = Date.now();
  if(correct){ p.correct++; p.box = Math.min(5, p.box+1); }
  else { p.wrong++; p.box = 1; }
  const intervals = {1:0,2:1,3:3,4:7,5:14};
  p.due = Date.now() + intervals[p.box]*24*60*60*1000;
  save(); render();
}
document.getElementById("toggleFaQuestion").onclick=()=>document.getElementById("faQuestionBlock").classList.toggle("hidden");
document.getElementById("toggleFaChoices").onclick=()=>document.getElementById("choices").classList.toggle("show-fa");
document.getElementById("showAnswer").onclick=()=>{
  document.getElementById("answerBlock").classList.remove("hidden");
  document.getElementById("correctAnswer").textContent = `${current.correct}. ${current.choices.find(c=>c.key===current.correct).text}`;
  document.getElementById("explanationEn").textContent = current.explanation;
  document.getElementById("explanationFa").textContent = current.explanation_fa;
};
document.getElementById("rightBtn").onclick=()=>mark(true);
document.getElementById("wrongBtn").onclick=()=>mark(false);
document.getElementById("resetBtn").onclick=()=>{ if(confirm("Reset all progress?")){localStorage.removeItem(STORAGE_KEY);progress={};initProgress();render();}};
document.addEventListener("click", e=>{
  if(!e.target.classList.contains("speaker")) return;
  const id = e.target.dataset.read;
  const lang = e.target.dataset.lang || "en-US";
  const text = document.getElementById(id).textContent;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  u.rate = lang.startsWith("fa") ? 0.9 : 0.95;
  speechSynthesis.speak(u);
});
initProgress();render();
