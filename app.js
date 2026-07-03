const STORAGE_KEY = "securityPlusMasterProgressV2";
const SETTINGS_KEY = "securityPlusMasterSettingsV2";

let progress = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
let settings = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{"bank":"all","language":"bi","mode":"leitner"}');
let current = null;
let selected = null;
let speakingId = null;

const $ = id => document.getElementById(id);

function allQuestions(){
  return QUESTION_BANK;
}
function activeQuestions(){
  const bank = settings.bank || "all";
  const list = bank === "all" ? allQuestions() : allQuestions().filter(q => (q.bank || "Bank 1") === bank);
  return list.length ? list : allQuestions();
}
function initProgress(){
  allQuestions().forEach(q=>{
    if(!progress[q.id]) progress[q.id] = {box:1, correct:0, wrong:0, lastSeen:0, due:Date.now()};
  });
  saveProgress();
}
function saveProgress(){localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));}
function saveSettings(){localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));}
function dueQuestions(){
  const now = Date.now();
  return activeQuestions().filter(q => (progress[q.id]?.due || 0) <= now);
}
function pickQuestion(){
  const base = settings.mode === "random" ? activeQuestions() : (dueQuestions().length ? dueQuestions() : activeQuestions());
  const pool = [...base];
  pool.sort((a,b)=>(progress[a.id].box-progress[b.id].box) || (progress[a.id].lastSeen-progress[b.id].lastSeen));
  const top = pool.slice(0, Math.min(12, pool.length));
  return top[Math.floor(Math.random()*top.length)];
}
function bankNames(){
  return [...new Set(allQuestions().map(q => q.bank || "Bank 1"))];
}
function renderBankSelect(){
  const banks = bankNames();
  $("bankSelect").innerHTML = `<option value="all">All Banks</option>` + banks.map(b=>`<option value="${escapeHtml(b)}">${escapeHtml(b)}</option>`).join("");
  $("bankSelect").value = settings.bank || "all";
}
function renderStats(){
  const list = activeQuestions();
  const due = dueQuestions().length;
  const mastered = list.filter(q=>progress[q.id]?.box>=5).length;
  const correct = list.reduce((s,q)=>s+(progress[q.id]?.correct || 0),0);
  const wrong = list.reduce((s,q)=>s+(progress[q.id]?.wrong || 0),0);
  $("stats").innerHTML = [
    [list.length,"Questions"],[due,"Due now"],[mastered,"Mastered"],[correct,"Correct"],[wrong,"Review"]
  ].map(([n,l])=>`<div class="stat"><b>${n}</b><span>${l}</span></div>`).join("");
}
function textBlock(en, fa, enTitle, faTitle){
  const lang = settings.language;
  if(lang === "en") return `<div><div class="section-title">${enTitle}</div><p class="q-en">${escapeHtml(en)}</p>${audioButton(en, "en-US", enTitle)}</div>`;
  if(lang === "fa") return `<div><div class="section-title rtl">${faTitle}</div><p class="q-fa">${escapeHtml(fa)}</p>${audioButton(fa, "fa-IR", faTitle)}</div>`;
  return `<div><div class="section-title">${enTitle}</div><p class="q-en">${escapeHtml(en)}</p>${audioButton(en, "en-US", enTitle)}<div class="section-title rtl">${faTitle}</div><p class="q-fa">${escapeHtml(fa)}</p>${audioButton(fa, "fa-IR", faTitle)}</div>`;
}
function audioButton(text, lang, label){
  const safe = encodeURIComponent(text || "");
  return `<div class="audio-row"><button class="speaker" data-text="${safe}" data-lang="${lang}">🔊 ${lang.startsWith("fa") ? "پخش" : "Listen"}</button></div>`;
}
function render(){
  stopSpeech();
  selected = null;
  current = pickQuestion();
  const p = progress[current.id];
  $("feedback").className = "feedback hidden";
  $("counter").textContent = `${current.bank || "Bank 1"} • Box ${p.box} • ${current.id}`;
  $("domain").textContent = settings.language === "fa" ? (current.domain_fa || current.domain) : current.domain;
  $("questionBlock").innerHTML = textBlock(current.question, current.question_fa, "English Question", "سؤال فارسی");
  $("answerBlock").classList.add("hidden");
  renderChoices(false);
  renderStats();
}
function renderChoices(showResult){
  $("choices").innerHTML = current.choices.map(c=>{
    const isSelected = selected === c.key;
    const isCorrect = showResult && c.key === current.correct;
    const isWrong = showResult && isSelected && c.key !== current.correct;
    const classes = ["choice", isSelected ? "selected" : "", isCorrect ? "correct" : "", isWrong ? "wrong" : ""].filter(Boolean).join(" ");
    const en = `<div class="choice-en"><span class="choice-key">${c.key}</span>${escapeHtml(c.text)}</div>`;
    const fa = `<div class="choice-fa rtl"><span class="choice-key">${c.key}</span>${escapeHtml(c.fa)}</div>`;
    let body = settings.language === "en" ? en : settings.language === "fa" ? fa : en + fa;
    return `<div class="${classes}" data-key="${c.key}">${body}</div>`;
  }).join("");
  document.querySelectorAll(".choice").forEach(el=>{
    el.onclick=()=>{
      if(!$("answerBlock").classList.contains("hidden")) return;
      selected = el.dataset.key;
      renderChoices(false);
    };
  });
}
function renderAnswer(){
  const correctChoice = current.choices.find(c=>c.key===current.correct);
  renderChoices(true);
  $("answerBlock").classList.remove("hidden");
  $("correctAnswer").innerHTML = textBlock(`${current.correct}. ${correctChoice.text}`, `${current.correct}. ${correctChoice.fa}`, "English", "فارسی");
  $("explanationBlock").innerHTML = textBlock(current.explanation, current.explanation_fa, "English Explanation", "توضیح فارسی");
}
function showFeedback(good){
  const f = $("feedback");
  f.className = `feedback ${good ? "good" : "bad"}`;
  f.textContent = good ? "✅ Correct. Great job — this card moves forward." : "❌ Needs review. This card goes back to Box 1.";
}
function mark(correct){
  const p = progress[current.id];
  p.lastSeen = Date.now();
  if(correct){ p.correct++; p.box = Math.min(5, p.box+1); }
  else { p.wrong++; p.box = 1; }
  const intervals = {1:0,2:1,3:3,4:7,5:14};
  p.due = Date.now() + intervals[p.box]*24*60*60*1000;
  saveProgress();
  showFeedback(correct);
  setTimeout(render, 850);
}
function stopSpeech(){
  if(window.speechSynthesis) speechSynthesis.cancel();
  document.querySelectorAll(".speaker.active").forEach(b=>b.classList.remove("active"));
  speakingId = null;
}
function speak(button){
  if(!window.speechSynthesis) return alert("Speech is not supported on this browser.");
  const text = decodeURIComponent(button.dataset.text || "");
  const lang = button.dataset.lang || "en-US";
  const newId = `${lang}:${text.slice(0,40)}`;
  if(speakingId === newId){ stopSpeech(); return; }
  stopSpeech();
  if(lang.startsWith("fa")){
    const voices = speechSynthesis.getVoices();
    const hasPersian = voices.some(v => (v.lang || "").toLowerCase().startsWith("fa"));
    if(voices.length && !hasPersian){ alert("Persian voice is not installed on this device."); return; }
  }
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  u.rate = lang.startsWith("fa") ? 0.88 : 0.94;
  const voices = speechSynthesis.getVoices();
  const preferred = voices.find(v => (v.lang || "").toLowerCase().startsWith(lang.slice(0,2).toLowerCase()));
  if(preferred) u.voice = preferred;
  button.classList.add("active");
  speakingId = newId;
  u.onend = stopSpeech;
  u.onerror = stopSpeech;
  speechSynthesis.speak(u);
}
function escapeHtml(s){
  return String(s || "").replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
}

$("bankSelect").onchange = e => { settings.bank = e.target.value; saveSettings(); render(); };
$("languageSelect").onchange = e => { settings.language = e.target.value; saveSettings(); render(); };
$("studyMode").onchange = e => { settings.mode = e.target.value; saveSettings(); render(); };
$("showAnswer").onclick = renderAnswer;
$("rightBtn").onclick=()=>mark(true);
$("wrongBtn").onclick=()=>mark(false);
$("resetBtn").onclick=()=>{ if(confirm("Reset all progress?")){localStorage.removeItem(STORAGE_KEY);progress={};initProgress();render();}};
document.addEventListener("click", e=>{ if(e.target.classList.contains("speaker")) speak(e.target); });

initProgress();
renderBankSelect();
$("languageSelect").value = settings.language || "bi";
$("studyMode").value = settings.mode || "leitner";
if(speechSynthesis?.onvoiceschanged !== undefined) speechSynthesis.onvoiceschanged = () => {};
render();
