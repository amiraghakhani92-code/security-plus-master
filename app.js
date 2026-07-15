let lang = 'both'; // 'fa','en','both'
let currentDomain = null;
let currentMode = 'learn';
let leitnerState = {};
let currentCard = null;
let answered = false;

function loadState(){
  try { const s = localStorage.getItem('secplus_leitner'); if(s) leitnerState = JSON.parse(s); } catch(e){}
  try { const fs = localStorage.getItem('secplus_fontscale'); if(fs){ fontScale=parseFloat(fs); document.documentElement.style.setProperty('--fontScale',fontScale); } } catch(e){}
  try { const sl = localStorage.getItem('secplus_lang'); if(sl){ lang=sl; const lbl=sl==='both'?'🌐 دو زبانه':sl==='fa'?'🌐 فارسی':'🌐 English'; const lt=document.getElementById('langToggle'); if(lt) lt.textContent=lbl; } } catch(e){}
  try { const th = localStorage.getItem('secplus_theme'); if(th){ document.documentElement.setAttribute('data-theme', th); } } catch(e){}
  try { const ui = localStorage.getItem('secplus_ui'); if(ui){ document.documentElement.setAttribute('data-ui', ui); } } catch(e){}
}

let fontScale = 1;
function changeFont(dir){
  fontScale = Math.min(1.6, Math.max(0.8, fontScale + dir*0.1));
  document.documentElement.style.setProperty('--fontScale', fontScale);
  try { localStorage.setItem('secplus_fontscale', fontScale); } catch(e){}
}
function saveState(){
  try { localStorage.setItem('secplus_leitner', JSON.stringify(leitnerState)); } catch(e){}
}
function getCard(num){
  if(!leitnerState[num]) leitnerState[num] = { box:1, attempts:0, correct:0 };
  return leitnerState[num];
}

let speakingBtn = null;
function stopSpeaking(){
  try { window.speechSynthesis.cancel(); } catch(e){}
  if(speakingBtn){
    speakingBtn.textContent = '🔊';
    speakingBtn.classList.remove('speaking');
  }
  speakingBtn = null;
}
function speak(text, e){
  if(e) e.stopPropagation();
  const btn = e ? e.currentTarget : null;
  const wasSameBtn = (speakingBtn === btn) && speakingBtn !== null;
  // Always stop whatever is currently playing first
  const isSpeaking = window.speechSynthesis && (window.speechSynthesis.speaking || window.speechSynthesis.pending);
  stopSpeaking();
  // If the same button that was playing is pressed again -> just stop (toggle off)
  if(wasSameBtn){ return; }
  // Otherwise start new speech
  try {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = 0.9;
    if(btn){ btn.textContent='⏹'; btn.classList.add('speaking'); speakingBtn=btn; }
    u.onend = () => { if(btn){ btn.textContent='🔊'; btn.classList.remove('speaking'); } if(speakingBtn===btn) speakingBtn=null; };
    u.onerror = () => { if(btn){ btn.textContent='🔊'; btn.classList.remove('speaking'); } if(speakingBtn===btn) speakingBtn=null; };
    // Small delay lets cancel() fully clear the queue on mobile browsers
    setTimeout(()=>{ try { window.speechSynthesis.speak(u); } catch(err){} }, 120);
  } catch(err){}
}

function setTheme(theme){
  if(theme) document.documentElement.setAttribute('data-theme', theme);
  else document.documentElement.removeAttribute('data-theme');
  try { localStorage.setItem('secplus_theme', theme); } catch(e){}
}

function setUIStyle(style){
  if(style) document.documentElement.setAttribute('data-ui', style);
  else document.documentElement.removeAttribute('data-ui');
  try { localStorage.setItem('secplus_ui', style); } catch(e){}
  document.querySelectorAll('.ui-style-btn').forEach(b=>b.classList.remove('active'));
  if(event && event.target) event.target.classList.add('active');
}

// 3D tilt effect on cards (pointer-based)
function attachTilt(){
  document.addEventListener('pointermove', (e)=>{
    if(!animationsOn) return;
    if(!e.target || typeof e.target.closest !== 'function') return;
    const card = e.target.closest('.domain-card, .exam-hub-card');
    if(!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width/2;
    const cy = rect.top + rect.height/2;
    const dx = (e.clientX - cx) / (rect.width/2);
    const dy = (e.clientY - cy) / (rect.height/2);
    card.style.transform = `perspective(800px) rotateY(${dx*6}deg) rotateX(${-dy*6}deg) translateY(-4px)`;
  }, {passive:true});
  document.addEventListener('pointerout', (e)=>{
    if(!e.target || typeof e.target.closest !== 'function') return;
    const card = e.target.closest('.domain-card, .exam-hub-card');
    if(card) card.style.transform='';
  }, {passive:true});
}

let animationsOn = true;
function toggleAnimations(){
  animationsOn = !animationsOn;
  document.documentElement.setAttribute('data-anim', animationsOn?'on':'off');
  try { localStorage.setItem('secplus_anim', animationsOn?'on':'off'); } catch(e){}
  const btn = document.getElementById('animToggle');
  if(btn) btn.textContent = animationsOn?'✨ انیمیشن: روشن':'✨ انیمیشن: خاموش';
}

function printContent(title, htmlContent, subtitle){
  const w = window.open('', '_blank');
  if(!w){ alert('لطفاً اجازه باز شدن پنجره را بدهید تا پرینت انجام شود.'); return; }
  const today = new Date().toLocaleDateString('fa-IR');
  w.document.write(`<!DOCTYPE html><html lang="fa" dir="rtl"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title>
  <style>
    @page { size:A4; margin:1.6cm; }
    * { box-sizing:border-box; -webkit-print-color-adjust:exact; print-color-adjust:exact; margin:0; padding:0; }
    html,body { width:100% !important; max-width:100% !important; margin:0 !important; padding:0 !important; }
    body{font-family:'Segoe UI',Tahoma,'B Nazanin',sans-serif;line-height:1.9;color:#222;background:#fff;font-size:16px;}
    .wrap{width:100% !important; max-width:100% !important; margin:0 !important; padding:20px !important; background:#fff;}
    .doc-header{text-align:center;padding:0 0 14px;border-bottom:3px solid #3b6fe0;margin-bottom:22px;}
    .doc-header .logo{width:50px;height:50px;border-radius:12px;background:#3b6fe0;margin:0 auto 10px;display:flex;align-items:center;justify-content:center;font-size:24px;color:#fff;}
    .doc-header h1{color:#3b6fe0;font-size:20px;margin:6px 0;border:none;line-height:1.4;}
    .doc-header .sub{color:#777;font-size:13px;}
    h2{color:#5b4fd0;margin:22px 0 10px;font-size:17px;border-bottom:1px solid #ccc;padding-bottom:5px;page-break-after:avoid;}
    h3{color:#3b6fe0;margin:0 0 10px;font-size:16px;page-break-after:avoid;}
    h3 .en{display:block;direction:ltr;text-align:left;color:#777;font-size:13px;font-weight:normal;margin-top:5px;}
    .en{direction:ltr;text-align:left;color:#444;}
    p,.para,.para-block{margin:0 0 12px 0;orphans:3;widows:3;}
    .bullet-item{margin:0 0 9px 0;padding-right:18px;position:relative;line-height:1.85;}
    .bullet-item:before{content:'\\25C6';position:absolute;right:0;color:#3b6fe0;font-size:10px;top:5px;}
    .content-en{margin-top:14px;padding-top:12px;border-top:1px dashed #bbb;}
    .content-en .bullet-item{padding-right:0;padding-left:18px;}
    .content-en .bullet-item:before{right:auto;left:0;}
    .lesson{border:1px solid #ccc;border-radius:8px;padding:16px 18px;margin-bottom:16px;page-break-inside:avoid;}
    .lesson-intro{background:#eef2fb;padding:12px 14px;border-radius:8px;margin-bottom:14px;border-right:3px solid #3b6fe0;line-height:1.85;}
    .lesson-intro.intro-en{direction:ltr;text-align:left;border-right:none;border-left:3px solid #3b6fe0;}
    .review-item{border:1px solid #ccc;border-right:4px solid #c0392b;border-radius:8px;padding:14px 16px;margin-bottom:12px;page-break-inside:avoid;}
    .review-item.correct{border-right-color:#1e7d4f;}
    .ri-q{font-weight:600;margin-bottom:9px;line-height:1.75;}
    .ri-correct{color:#1a7a48;font-weight:600;margin:5px 0;}
    .ri-wrong{color:#b8341f;margin:5px 0;}
    .ri-expl{color:#444;margin-top:11px;padding-top:11px;border-top:1px solid #ddd;font-size:14px;line-height:1.8;}
    .ri-expl .para{margin:0 0 9px 0;}
    .ri-expl .bullet-item{margin:0 0 7px 0;}
    .footer{margin-top:28px;padding-top:14px;border-top:1px solid #ccc;font-size:12px;color:#999;text-align:center;line-height:1.7;}
    .btns{text-align:center;margin:0;padding:16px;background:#f0f2f8;}
    .btns button{background:#3b6fe0;color:#fff;border:none;padding:12px 24px;border-radius:6px;font-size:15px;cursor:pointer;margin:0 5px;}
    @media print{ .btns{display:none !important;} @page{size:A4;margin:1.6cm;} html,body{font-size:11pt;} .wrap{padding:0 !important;} }
  </style></head><body>
  <div class="btns"><button onclick="window.print()">🖨 پرینت / ذخیره PDF</button><button onclick="window.close()">بستن</button></div>
  <div class="wrap">
  <div class="doc-header">
    <div class="logo">🛡</div>
    <h1>${title}</h1>
    <div class="sub">${subtitle||'Security+ SY0-701'} • ${today}</div>
  </div>
  ${htmlContent}
  <div class="footer">تولیدشده توسط اپلیکیشن آموزش Security+ SY0-701<br>این محتوا صرفاً برای مطالعه شخصی است و ارزش رسمی ندارد</div>
  </div>
  </body></html>`);
  w.document.close();
}

function printLessons(){
  const lessons = (typeof LESSONS!=='undefined' && LESSONS[currentDomain]) ? LESSONS[currentDomain] : [];
  const dname = DOMAINS[currentDomain].name_fa;
  const dnameEn = DOMAINS[currentDomain].name_en;
  let content = lessons.map(l=>`
    <div class="lesson">
      <h3>${l.title_fa}<span class="en">${l.title_en}</span></h3>
      ${l.intro_fa?`<div class="lesson-intro">💡 ${l.intro_fa}</div>`:''}
      <div>${formatParas(l.content_fa)}</div>
      <div class="content-en">${formatParas(l.content_en)}</div>
    </div>`).join('');
  printContent('آموزش دامنه '+currentDomain+': '+dname, content, dnameEn);
}

function toggleLangMenu(){
  document.getElementById('langDropdown').classList.toggle('hidden');
}

function setLang(l){
  lang = l;
  document.getElementById('langDropdown').classList.add('hidden');
  const label = l==='both'?'🌐 دو زبانه':l==='fa'?'🌐 فارسی':'🌐 English';
  document.getElementById('langToggle').textContent = label;
  try { localStorage.setItem('secplus_lang', l); } catch(e){}
  // re-render current view
  if(!document.getElementById('domainView').classList.contains('hidden')){
    if(currentMode==='learn') renderLearn();
    else if(currentMode==='leitner') renderLeitner();
    else renderAcronyms();
  }
}

function renderDomains(){
  const list = document.getElementById('domainsList');
  list.innerHTML = '';
  Object.keys(DOMAINS).forEach(d => {
    const info = DOMAINS[d];
    const qs = QUESTIONS.filter(q => q.domain == d);
    const mastered = qs.filter(q => (leitnerState[q.number]?.box||1) >= 5).length;
    const pct = qs.length ? Math.round(mastered/qs.length*100) : 0;
    const available = qs.length > 0;
    const card = document.createElement('div');
    card.className = 'domain-card';
    if(available) card.onclick = () => openDomain(d);
    else card.style.opacity = '0.5';
    card.innerHTML = `
      <div class="dc-top">
        <div class="domain-num">${d}</div>
        <span class="domain-weight">${info.weight} ${available?'':'• به‌زودی'}</span>
      </div>
      <h3>${info.name_fa}<span class="en">${info.name_en}</span></h3>
      <div class="domain-progress"><div style="width:${pct}%"></div></div>
      <div class="domain-meta"><span>${qs.length} سوال</span><span>${mastered} تسلط</span></div>
    `;
    list.appendChild(card);
  });
  updateGlobalStats();
}

function updateGlobalStats(){
  const total = QUESTIONS.length;
  const mastered = QUESTIONS.filter(q => (leitnerState[q.number]?.box||1) >= 5).length;
  let att=0, cor=0;
  Object.values(leitnerState).forEach(s => { att+=s.attempts||0; cor+=s.correct||0; });
  document.getElementById('statTotal').textContent = total;
  document.getElementById('statMastered').textContent = mastered;
  document.getElementById('statAccuracy').textContent = (att?Math.round(cor/att*100):0)+'%';
  document.getElementById('globalProgress').style.width = (total?mastered/total*100:0)+'%';
}

function openDomain(d){
  currentDomain = d;
  currentMode = 'learn';
  leitnerSession = null;
  document.getElementById('homeView').classList.add('hidden');
  document.getElementById('domainView').classList.remove('hidden');
  document.getElementById('domainTitle').textContent = `دامنه ${d}: ${DOMAINS[d].name_fa}`;
  document.getElementById('domainTitleEn').textContent = DOMAINS[d].name_en;
  document.getElementById('tabLearn').classList.add('active');
  document.getElementById('tabLeitner').classList.remove('active');
  switchMode('learn');
}

function goHome(){
  stopSpeaking();
  if(examTimerInterval){ clearInterval(examTimerInterval); examTimerInterval=null; }
  document.getElementById('domainView').classList.add('hidden');
  document.getElementById('examView').classList.add('hidden');
  document.getElementById('homeView').classList.remove('hidden');
  setNav('navHome');
  renderDomains();
}

function switchMode(mode){
  stopSpeaking();
  currentMode = mode;
  document.getElementById('tabLearn').classList.toggle('active', mode==='learn');
  document.getElementById('tabLeitner').classList.toggle('active', mode==='leitner');
  document.getElementById('tabAcronyms').classList.toggle('active', mode==='acronyms');
  document.getElementById('learnContent').classList.toggle('hidden', mode!=='learn');
  document.getElementById('leitnerContent').classList.toggle('hidden', mode!=='leitner');
  document.getElementById('acronymsContent').classList.toggle('hidden', mode!=='acronyms');
  if(mode==='learn') renderLearn();
  else if(mode==='leitner') renderLeitner();
  else renderAcronyms();
}

function renderAcronyms(){
  const c = document.getElementById('acronymsContent');
  if(typeof ACRONYMS==='undefined'){ c.innerHTML='<div class="empty">به‌زودی</div>'; return; }
  const keys = Object.keys(ACRONYMS).sort();
  c.innerHTML = `<div style="color:var(--muted);font-size:12px;margin-bottom:12px;">${keys.length} مخفف کلیدی Security+ — روی 🔊 بزن تا تلفظ کامل را بشنوی</div>` +
    keys.map(k=>`
      <div class="lesson" style="padding:14px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-weight:700;color:var(--accent);font-size:16px;direction:ltr;min-width:70px;">${k}</span>
          <button class="speak-btn" onclick="speak(\`${ACRONYMS[k].replace(/`/g,'')}\`,event)">🔊</button>
          <span style="direction:ltr;text-align:left;font-size:13px;flex:1;">${ACRONYMS[k]}</span>
        </div>
      </div>`).join('');
}

function renderLearn(){
  const c = document.getElementById('learnContent');
  const lessons = (typeof LESSONS!=='undefined' && LESSONS[currentDomain]) ? LESSONS[currentDomain] : [];
  if(!lessons.length){ c.innerHTML = '<div class="empty">درس‌های این دامنه به‌زودی اضافه می‌شوند.</div>'; return; }
  const printBtn = `<button class="print-btn" onclick="printLessons()">🖨 پرینت درس‌ها</button>`;
  c.innerHTML = printBtn + lessons.map(l => `
    <div class="lesson">
      <h3>${showFa()?l.title_fa:''}${showEn()?`<span class="en">${l.title_en}</span>`:''}</h3>
      ${l.intro_fa && showFa()?`<div class="lesson-intro">💡 ${l.intro_fa}</div>`:''}
      ${l.intro_en && showEn()?`<div class="lesson-intro intro-en"><button class="speak-btn" onclick="speak(\`${(l.intro_en||'').replace(/`/g,'')}\`,event)">🔊</button>${l.intro_en}</div>`:''}
      ${showFa()?`<div class="content-fa">${formatParas(l.content_fa)}</div>`:''}
      ${showEn()?`<div class="content-en"><button class="speak-btn speak-block" onclick="speak(\`${l.content_en.replace(/`/g,'')}\`,event)">🔊 خواندن کل درس</button>${formatParas(l.content_en)}</div>`:''}
    </div>
  `).join('');
}

function formatParas(text){
  if(!text) return '';
  // Split on double-newline = paragraphs; single newline = line break (e.g., bullets)
  const blocks = text.split(/\n\n+/).filter(s=>s.trim());
  return blocks.map(block=>{
    const lines = block.split(/\n/).filter(s=>s.trim());
    // If block is a bullet list (lines starting with •), render as spaced bullets
    if(lines.length>1 && lines.some(l=>l.trim().startsWith('•'))){
      const items = lines.map(l=>{
        const t = l.trim();
        if(t.startsWith('•')) return `<div class="bullet-item">${t.substring(1).trim()}</div>`;
        return `<div class="para-line">${t}</div>`;
      }).join('');
      return `<div class="para-block">${items}</div>`;
    }
    // Otherwise a normal paragraph (join lines with space)
    return `<p class="para">${lines.join(' ')}</p>`;
  }).join('');
}

function showFa(){ return lang==='fa'||lang==='both'; }
function showEn(){ return lang==='en'||lang==='both'; }

// ============ LEITNER SYSTEM (rewritten) ============
let leitnerSession = null; // { queue:[], pos:0, total:0, done:0, correctCount:0 }

function renderLeitner(){
  const c = document.getElementById('leitnerContent');
  const qs = QUESTIONS.filter(q => q.domain == currentDomain);
  if(!qs.length){ c.innerHTML='<div class="empty">سوالات این دامنه به‌زودی اضافه می‌شوند.</div>'; return; }
  // If a session is active, show the card; otherwise show the session setup screen
  if(leitnerSession && leitnerSession.pos < leitnerSession.queue.length){
    renderLeitnerCard();
  } else {
    renderLeitnerSetup(qs);
  }
}

function renderLeitnerSetup(qs){
  const c = document.getElementById('leitnerContent');
  // Box distribution
  const boxes=[0,0,0,0,0];
  qs.forEach(q=>{ boxes[(leitnerState[q.number]?.box||1)-1]++; });
  const labels=['یادگیری','بررسی','تحکیم','بلندمدت','حافظه دائم'];
  const labelsEn=['Learning','Review','Consolidate','Long-term','Mastered'];
  const colors=['#ff6b6b','#ffa940','#faad14','#52c41a','#1890ff'];
  const maxBox = Math.max(...boxes, 1);

  // Bar chart (graphical + numeric)
  let chart = '<div class="leitner-chart">';
  for(let i=0;i<5;i++){
    const h = Math.round((boxes[i]/maxBox)*100);
    chart += `
      <div class="lc-col">
        <div class="lc-bar-wrap"><div class="lc-bar" style="height:${h}%;background:${colors[i]}">
          <span class="lc-val">${boxes[i]}</span>
        </div></div>
        <div class="lc-label" style="color:${colors[i]}">${labels[i]}</div>
        <div class="lc-label-en">${labelsEn[i]}</div>
      </div>`;
  }
  chart += '</div>';

  // Coach message + predictor
  const coach = leitnerCoach(qs, boxes);

  // Session size options
  const remaining = qs.filter(q => (leitnerState[q.number]?.box||1) < 5).length;
  const sizes = [10,20,30,50].filter(n => n <= Math.max(qs.length,10));
  let sizeBtns = sizes.map(n=>`<button class="ses-size" onclick="startLeitnerSession(${n})">${n} سوال</button>`).join('');
  sizeBtns += `<button class="ses-size" onclick="startLeitnerSession(${qs.length})">همه (${qs.length})</button>`;

  c.innerHTML = `
    <div class="leitner-panel">
      <h3 class="lp-title">📊 وضعیت جعبه‌های لایتنر <span class="en">Leitner Boxes</span></h3>
      ${chart}
      <div class="leitner-numbers">
        ${boxes.map((b,i)=>`<span class="ln-item" style="border-color:${colors[i]}">${labels[i]}: <b>${b}</b></span>`).join('')}
      </div>
      ${coach}
      <h3 class="lp-title" style="margin-top:20px;">🎯 امروز چند سوال تمرین می‌کنی؟ <span class="en">How many today?</span></h3>
      <div class="ses-sizes">${sizeBtns}</div>
      ${remaining===0?'<p class="all-mastered">🎉 آفرین! همه سوالات این دامنه به حافظه دائم رفته‌اند.</p>':''}
    </div>`;
}

function leitnerCoach(qs, boxes){
  const total = qs.length;
  const mastered = boxes[4];
  const inProgress = total - mastered - boxes[0];
  const notStarted = boxes[0];
  // Estimate daily rate from history (mastered per active day) — fallback to a reasonable default
  const rate = getDailyRate();
  const remaining = total - mastered;
  let prediction = '';
  if(remaining > 0 && rate > 0){
    const days = Math.ceil(remaining / rate);
    let when;
    if(days <= 10) when = `حدود ${days} روز دیگر`;
    else if(days <= 45) when = `حدود ${Math.round(days/7)} هفته دیگر`;
    else if(days <= 250) when = `حدود ${Math.round(days/30)} ماه دیگر`;
    else when = `بیش از ${Math.round(days/30)} ماه دیگر`;
    prediction = `
      <div class="coach-predict">
        📈 <b>پیش‌بینی:</b> با میانگین ${rate} سوال در روز، کل سوالات این دامنه <b>${when}</b> به حافظه دائم می‌رسد.
        <div class="en">At ${rate} cards/day, you'll master this domain in about ${days} days.</div>
      </div>`;
  }
  // Coach advice (bilingual)
  let advice;
  if(mastered === total){ advice = 'تو این دامنه را کامل مسلط شده‌ای! سراغ دامنه بعدی برو. 🏆 | You\'ve mastered this domain!'; }
  else if(notStarted === total){ advice = 'بیایید شروع کنیم! یک جلسه کوچک ۱۰ سوالی انتخاب کن. | Let\'s begin with a small 10-card session.'; }
  else if(boxes[0] > total*0.5){ advice = 'هنوز خیلی سوال در جعبه یادگیری داری. روزانه ثابت تمرین کن. | Many cards still in Learning — keep a steady daily habit.'; }
  else if(mastered > total*0.6){ advice = 'عالی پیش می‌روی! نزدیک تسلط کامل هستی. | Great progress — you\'re close to full mastery!'; }
  else { advice = 'روند خوبی داری. هر روز کمی تمرین، کلید موفقیت است. | Good pace. A little every day is the key.'; }

  return `
    <div class="coach-box">
      <div class="coach-icon">🧑‍🏫</div>
      <div class="coach-text">
        <div class="coach-advice">${advice}</div>
        ${prediction}
      </div>
    </div>`;
}

// Track daily study rate for predictions
function getDailyRate(){
  try {
    const log = JSON.parse(localStorage.getItem('secplus_daily_log')||'{}');
    const days = Object.keys(log);
    if(days.length === 0) return 15; // default assumption
    const totalCards = days.reduce((s,d)=>s+log[d],0);
    const avg = Math.round(totalCards / days.length);
    return Math.max(avg, 1);
  } catch(e){ return 15; }
}
function logDailyProgress(count){
  try {
    const log = JSON.parse(localStorage.getItem('secplus_daily_log')||'{}');
    const today = new Date().toISOString().slice(0,10);
    log[today] = (log[today]||0) + count;
    localStorage.setItem('secplus_daily_log', JSON.stringify(log));
  } catch(e){}
}

function startLeitnerSession(size){
  const qs = QUESTIONS.filter(q => q.domain == currentDomain);
  // Prioritize: lowest box first (due for review), then not-yet-mastered
  const sorted = [...qs].sort((a,b)=>{
    const ba = leitnerState[a.number]?.box||1;
    const bb = leitnerState[b.number]?.box||1;
    if(ba !== bb) return ba - bb;
    return Math.random()-0.5;
  });
  const queue = sorted.slice(0, Math.min(size, sorted.length)).map(q=>q.number);
  leitnerSession = { queue, pos:0, total:queue.length, done:0, correctCount:0, sessionAnswered:0 };
  renderLeitnerCard();
}

function renderLeitnerCard(){
  const c = document.getElementById('leitnerContent');
  const s = leitnerSession;
  const cardNum = s.queue[s.pos];
  currentCard = QUESTIONS.find(q=>q.number===cardNum);
  answered = false;
  const st = getCard(currentCard.number);
  const card = currentCard;
  const progressPct = Math.round((s.done / s.total) * 100);
  let opts = card.options.map((o,i)=>`<div class="fc-option" data-letter="${o[0]}" onclick="pickOption('${o[0]}',this)">${o}</div>`).join('');
  c.innerHTML = `
    <div class="leitner-session-bar">
      <button class="ses-exit" onclick="endLeitnerSession()">✕ پایان</button>
      <div class="ses-progress-txt">سوال ${s.done+1} از ${s.total}</div>
      <div class="fc-box-badge">جعبه ${st.box}/5</div>
    </div>
    <div class="ses-progress"><div class="ses-progress-fill" style="width:${progressPct}%"></div></div>
    <div class="flashcard">
      <div class="fc-header">
        <span>سوال ${card.number} • دامنه ${card.domain}</span>
      </div>
      ${showFa()?`<div class="fc-question-fa">${card.fa}</div>`:''}
      ${showEn()?`<div class="fc-question-en"><button class="speak-btn" onclick="speak(\`${card.en.replace(/`/g,'')}\`,event)">🔊</button>${card.en}</div>`:''}
      <div class="fc-options">${opts}</div>
      <div class="fc-explanation" id="fcExpl">
        <h4>توضیح</h4>
        <div class="expl-body">${formatParas(card.explanation||'توضیحی موجود نیست.')}</div>
      </div>
      <div class="fc-actions" id="fcActions"></div>
    </div>`;
}

function pickOption(letter, el){
  if(answered) return;
  answered = true;
  const card = currentCard;
  const correct = card.correct;
  document.querySelectorAll('.fc-option').forEach(o=>{
    const l = o.getAttribute('data-letter');
    if(l===correct) o.classList.add('correct');
    else if(o===el) o.classList.add('wrong');
    o.style.pointerEvents='none';
  });
  document.getElementById('fcExpl').classList.add('show');
  const wasCorrect = letter===correct;
  document.getElementById('fcActions').innerHTML = `
    <button class="${wasCorrect?'btn-know':'btn-dontknow'}" onclick="gradeCard(${wasCorrect})">
      ${wasCorrect?'بلد بودم ✓ (سوال بعدی)':'بلد نبودم ✗ (سوال بعدی)'}
    </button>`;
}

function gradeCard(wasCorrect){
  const s = leitnerSession;
  const st = getCard(currentCard.number);
  st.attempts++;
  s.sessionAnswered++;
  if(wasCorrect){
    st.correct++;
    if(st.box<5) st.box++;
    s.correctCount++;
  } else {
    st.box=1;
    // DELAYED REPEAT: re-insert this card ~4 positions later (not immediately)
    const insertAt = Math.min(s.pos + 4, s.queue.length);
    s.queue.splice(insertAt, 0, currentCard.number);
    s.total = s.queue.length; // total grows since we repeat
  }
  saveState();
  s.done++;
  s.pos++;
  if(s.pos >= s.queue.length){
    // Session complete
    logDailyProgress(s.sessionAnswered);
    renderLeitnerComplete();
  } else {
    renderLeitnerCard();
  }
}

function renderLeitnerComplete(){
  const c = document.getElementById('leitnerContent');
  const s = leitnerSession;
  const accuracy = s.sessionAnswered>0 ? Math.round((s.correctCount/s.sessionAnswered)*100) : 0;
  leitnerSession = null;
  c.innerHTML = `
    <div class="leitner-panel" style="text-align:center;">
      <div style="font-size:48px;margin:10px 0;">🎉</div>
      <h3 class="lp-title" style="justify-content:center;">جلسه تمام شد! <span class="en">Session Complete</span></h3>
      <p style="color:var(--muted);margin:12px 0;">${s.correctCount} از ${s.sessionAnswered} درست • دقت ${accuracy}%</p>
      <div class="exam-actions" style="justify-content:center;">
        <button class="btn-next" onclick="renderLeitner()">جلسه جدید</button>
        <button class="btn-prev" onclick="goHome()">خانه</button>
      </div>
    </div>`;
  renderLeitnerSetupChartRefresh();
}

function renderLeitnerSetupChartRefresh(){
  // refresh home stats silently
  try { updateGlobalStats(); } catch(e){}
}

function endLeitnerSession(){
  if(leitnerSession && leitnerSession.sessionAnswered>0){
    logDailyProgress(leitnerSession.sessionAnswered);
  }
  leitnerSession = null;
  renderLeitner();
}

function showStats(){
  stopSpeaking();
  const mastered = QUESTIONS.filter(q=>(leitnerState[q.number]?.box||1)>=5).length;
  const rate = getDailyRate();
  const remaining = QUESTIONS.length - mastered;
  const days = rate>0 ? Math.ceil(remaining/rate) : 0;
  alert('📊 آمار کلی:\n\nکل سوالات: '+QUESTIONS.length+'\nبه حافظه دائم رسیده: '+mastered+'\nباقی‌مانده: '+remaining+'\n\nمیانگین روزانه: '+rate+' سوال\nپیش‌بینی تکمیل: حدود '+days+' روز دیگر');
}

function resetAll(){
  if(confirm('تمام پیشرفت پاک شود؟')){ leitnerState={}; leitnerSession=null; try{localStorage.removeItem('secplus_daily_log');}catch(e){} saveState(); goHome(); }
}

// ============ EXAM ENGINE ============
let examState = null;
let examTimerInterval = null;

function hideAllViews(){
  document.getElementById('homeView').classList.add('hidden');
  document.getElementById('domainView').classList.add('hidden');
  document.getElementById('examView').classList.add('hidden');
}

function showExamHub(){
  stopSpeaking();
  if(examTimerInterval){ clearInterval(examTimerInterval); examTimerInterval=null; }
  hideAllViews();
  const v = document.getElementById('examView');
  v.classList.remove('hidden');
  setNav('navExam');
  // 5 exam sets
  let cards = '';
  for(let i=1;i<=5;i++){
    const best = getExamBest(i);
    cards += `
      <div class="exam-hub-card" onclick="startExam(${i})">
        <h3>📝 آزمون شماره ${i} <span style="font-size:12px;color:var(--muted)">Practice Exam ${i}</span></h3>
        <p>۹۰ سوال تصادفی از کل ۳۰۰ سوال • شبیه‌سازی امتحان واقعی SY0-701</p>
        <p style="direction:ltr;text-align:right">90 random questions • Real SY0-701 simulation</p>
        ${best!==null?`<span class="badge">بهترین نتیجه: ${best}%</span>`:'<span class="badge">هنوز امتحان نداده‌ای</span>'}
      </div>`;
  }
  v.innerHTML = `
    <button class="back-btn" onclick="goHome()">→ بازگشت به خانه</button>
    <h2 style="font-size:calc(18px * var(--fontScale));margin-bottom:6px;">امتحانات شبیه‌سازی‌شده</h2>
    <p style="color:var(--muted);font-size:calc(12px * var(--fontScale));margin-bottom:16px;line-height:1.7;">
      هر آزمون ۹۰ سوال دارد (مثل امتحان واقعی). نمره قبولی: ۷۵۰ از ۹۰۰ که تقریباً معادل ۸۳٪ است. می‌توانی با تایمر ۹۰ دقیقه‌ای یا بدون تایمر امتحان بدهی.
    </p>
    ${cards}
  `;
}

function getExamBest(setNum){
  try {
    const r = localStorage.getItem('secplus_exam_best_'+setNum);
    return r!==null?parseInt(r):null;
  } catch(e){ return null; }
}
function setExamBest(setNum, pct){
  try {
    const cur = getExamBest(setNum);
    if(cur===null || pct>cur) localStorage.setItem('secplus_exam_best_'+setNum, pct);
  } catch(e){}
}

function startExam(setNum){
  // ask timer preference
  const useTimer = confirm('آیا می‌خواهی با تایمر ۹۰ دقیقه‌ای (مثل امتحان واقعی) امتحان بدهی؟\n\nتأیید = با تایمر ۹۰ دقیقه\nلغو = بدون تایمر (آزاد)');
  // Make sure the exam view is the visible one
  document.getElementById('homeView').classList.add('hidden');
  document.getElementById('domainView').classList.add('hidden');
  document.getElementById('examView').classList.remove('hidden');
  setNav('navExam');
  // Build a random 90-question exam (reshuffled each attempt)
  const pool = [...QUESTIONS];
  for(let i=pool.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [pool[i],pool[j]]=[pool[j],pool[i]]; }
  const selected = pool.slice(0, Math.min(90, pool.length));
  examState = {
    setNum, questions:selected, answers:{}, flagged:{}, current:0,
    useTimer, timeLeft: 90*60, startTime: Date.now(), submitted:false
  };
  renderExamQuestion();
  if(useTimer){
    examTimerInterval = setInterval(()=>{
      examState.timeLeft--;
      updateTimerDisplay();
      if(examState.timeLeft<=0){ clearInterval(examTimerInterval); examTimerInterval=null; submitExam(true); }
    },1000);
  }
}

function updateTimerDisplay(){
  const el = document.getElementById('examTime');
  if(!el) return;
  const m = Math.floor(examState.timeLeft/60), s = examState.timeLeft%60;
  el.textContent = String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
  el.className = 'time' + (examState.timeLeft<60?' danger':examState.timeLeft<300?' warning':'');
}

function renderExamQuestion(){
  const v = document.getElementById('examView');
  const es = examState;
  const q = es.questions[es.current];
  const timerHtml = es.useTimer
    ? `<div class="exam-timer"><span class="exam-progress-txt">سوال ${es.current+1} از ${es.questions.length}</span><span class="time" id="examTime">90:00</span></div>`
    : `<div class="exam-timer"><span class="exam-progress-txt">سوال ${es.current+1} از ${es.questions.length}</span><span class="exam-progress-txt">⏱ بدون تایمر</span></div>`;

  // Question navigator dots
  let dots = '';
  es.questions.forEach((_,i)=>{
    let cls = 'exam-q-dot';
    if(es.answers[i]!==undefined) cls+=' answered';
    if(es.flagged[i]) cls+=' flagged';
    if(i===es.current) cls+=' current';
    dots += `<button class="${cls}" onclick="gotoExamQ(${i})">${i+1}</button>`;
  });

  const opts = q.options.map(o=>{
    const letter=o[0];
    const sel = es.answers[es.current]===letter;
    return `<div class="fc-option${sel?' selected':''}" onclick="answerExamQ('${letter}')">${o}</div>`;
  }).join('');

  v.innerHTML = `
    ${timerHtml}
    <div class="exam-q-nav">${dots}</div>
    <div class="flashcard${examFlipPending?' page-flip':''}">
      <div class="fc-header"><span>سوال ${es.current+1}</span><span class="fc-box-badge">دامنه ${q.domain}</span></div>
      ${showFa()?`<div class="fc-question-fa">${q.fa}</div>`:''}
      ${showEn()?`<div class="fc-question-en"><button class="speak-btn" onclick="speak(\`${q.en.replace(/`/g,'')}\`,event)">🔊</button>${q.en}</div>`:''}
      <div class="fc-options">${opts}</div>
      <div class="exam-actions">
        <button class="btn-prev" onclick="prevExamQ()">قبلی</button>
        <button class="btn-flag" onclick="flagExamQ()">${es.flagged[es.current]?'✓ علامت‌دار':'⚑ علامت'}</button>
        <button class="btn-next" onclick="nextExamQ()">بعدی</button>
      </div>
      <div class="exam-actions">
        <button class="btn-submit-exam" onclick="confirmSubmitExam()">پایان و مشاهده نتیجه</button>
      </div>
    </div>
  `;
  examFlipPending = false;
  if(es.useTimer) updateTimerDisplay();
}

let examFlipPending = false;

function answerExamQ(letter){ examState.answers[examState.current]=letter; renderExamQuestion(); }
function flagExamQ(){ examState.flagged[examState.current]=!examState.flagged[examState.current]; renderExamQuestion(); }
function gotoExamQ(i){ examFlipPending=animationsOn; examState.current=i; renderExamQuestion(); }
function nextExamQ(){ if(examState.current<examState.questions.length-1){ examFlipPending=animationsOn; examState.current++; renderExamQuestion(); } }
function prevExamQ(){ if(examState.current>0){ examFlipPending=animationsOn; examState.current--; renderExamQuestion(); } }

function confirmSubmitExam(){
  const answered = Object.keys(examState.answers).length;
  const total = examState.questions.length;
  if(answered<total){
    if(!confirm(`${total-answered} سوال بی‌جواب مانده. مطمئنی می‌خواهی امتحان را تمام کنی؟`)) return;
  }
  submitExam(false);
}

function submitExam(timeUp){
  if(examState.submitted) return;
  examState.submitted = true;
  if(examTimerInterval){ clearInterval(examTimerInterval); examTimerInterval=null; }
  const es = examState;
  let correct = 0;
  es.questions.forEach((q,i)=>{ if(es.answers[i]===q.correct) correct++; });
  const total = es.questions.length;
  const pct = Math.round(correct/total*100);
  // CompTIA scale: 750/900 ≈ 83%. Passing ~83%
  const passed = pct>=83;
  // scaled score approximation (100-900)
  const scaled = Math.round(100 + (correct/total)*800);
  setExamBest(es.setNum, pct);

  const timeUsed = es.useTimer ? (90*60 - es.timeLeft) : Math.floor((Date.now()-es.startTime)/1000);
  const tm = Math.floor(timeUsed/60), ts = timeUsed%60;

  let reviewHtml = '';
  es.questions.forEach((q,i)=>{
    const userAns = es.answers[i];
    const isCorrect = userAns===q.correct;
    const userOpt = q.options.find(o=>o[0]===userAns);
    const correctOpt = q.options.find(o=>o[0]===q.correct);
    reviewHtml += `
      <div class="review-item ${isCorrect?'correct':''}">
        <div class="ri-q">${i+1}. ${showFa()?q.fa:q.en}</div>
        <div class="ri-ans ri-correct">✓ جواب درست: ${correctOpt||q.correct}</div>
        ${!isCorrect?`<div class="ri-ans ri-wrong">✗ جواب تو: ${userOpt||'(بی‌جواب)'}</div>`:''}
        ${q.explanation?`<div class="ri-expl">${formatParas(q.explanation)}</div>`:''}
      </div>`;
  });

  // store last result for print/certificate
  lastExamResult = { setNum:es.setNum, pct, correct, total, scaled, passed, reviewHtml, questions:es.questions, answers:es.answers };

  const v = document.getElementById('examView');
  v.innerHTML = `
    <button class="back-btn" onclick="showExamHub()">→ بازگشت به امتحانات</button>
    <h2 style="text-align:center;font-size:calc(20px * var(--fontScale));margin:10px 0;">نتیجه آزمون ${es.setNum}</h2>
    ${timeUp?'<p style="text-align:center;color:var(--orange);margin-bottom:10px;">⏰ زمان به پایان رسید</p>':''}
    <div class="result-circle ${passed?'result-pass':'result-fail'}">
      <div class="pct">${pct}%</div>
      <div class="lbl">${correct} از ${total}</div>
    </div>
    <p style="text-align:center;font-size:calc(18px * var(--fontScale));font-weight:700;color:${passed?'var(--green)':'var(--red)'};margin-bottom:6px;">
      ${passed?'✅ قبول شدی!':'❌ قبول نشدی'}
    </p>
    <p style="text-align:center;color:var(--muted);font-size:calc(13px * var(--fontScale));margin-bottom:4px;">نمره تقریبی: ${scaled} از ۹۰۰ (حد قبولی: ۷۵۰)</p>
    <p style="text-align:center;color:var(--muted);font-size:calc(12px * var(--fontScale));margin-bottom:20px;">⏱ زمان مصرف‌شده: ${tm} دقیقه و ${ts} ثانیه</p>
    <div class="exam-actions" style="margin-bottom:10px;">
      <button class="btn-next" onclick="startExam(${es.setNum})">امتحان دوباره</button>
      <button class="btn-prev" onclick="showExamHub()">امتحانات دیگر</button>
    </div>
    <div class="exam-actions" style="margin-bottom:20px;">
      <button class="print-btn" style="flex:1" onclick="printExamResult()">🖨 پرینت مرور و توضیحات</button>
      ${passed?`<button class="btn-cert" onclick="requestCertificate()">🏆 دریافت گواهی</button>`:''}
    </div>
    <h3 style="font-size:calc(16px * var(--fontScale));margin:16px 0 10px;">مرور پاسخ‌ها و توضیحات</h3>
    <p style="color:var(--muted);font-size:11px;margin-bottom:12px;">سوالات اشتباه با حاشیه قرمز، درست با حاشیه سبز مشخص شده‌اند</p>
    ${reviewHtml}
  `;
  window.scrollTo(0,0);
}

let lastExamResult = null;

function printExamResult(){
  if(!lastExamResult) return;
  const r = lastExamResult;
  const header = `
    <h2>نتیجه: ${r.passed?'قبول ✅':'قبول نشد ❌'}</h2>
    <p>درصد: ${r.pct}% (${r.correct} از ${r.total}) — نمره تقریبی: ${r.scaled} از ۹۰۰</p>
    <hr>
    <h2>مرور پاسخ‌ها و توضیحات</h2>`;
  printContent('نتیجه آزمون شماره '+r.setNum, header + r.reviewHtml);
}

function requestCertificate(){
  const name = prompt('نام خود را برای صدور گواهی وارد کنید:');
  if(!name || !name.trim()) return;
  generateCertificate(name.trim());
}

function generateCertificate(name){
  const r = lastExamResult;
  const today = new Date().toLocaleDateString('fa-IR');
  const w = window.open('', '_blank');
  if(!w){ alert('لطفاً اجازه باز شدن پنجره را بدهید.'); return; }
  w.document.write(`<!DOCTYPE html><html lang="fa" dir="rtl"><head><meta charset="UTF-8"><title>گواهی موفقیت</title>
  <style>
    @page { size:A4 landscape; margin:1cm; }
    * { box-sizing:border-box; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
    html,body{margin:0;padding:0;}
    body{font-family:'Segoe UI',Tahoma,sans-serif;padding:20px;background:#eef1f8;}
    .cert{max-width:900px;margin:0 auto;background:#ffffff;border:12px solid #3b6fe0;border-radius:14px;padding:36px 44px;text-align:center;position:relative;}
    .cert:before{content:'';position:absolute;top:10px;bottom:10px;left:10px;right:10px;border:2px solid #9d7cff;border-radius:8px;pointer-events:none;}
    .seal{width:78px;height:78px;border-radius:50%;background:#3b6fe0;margin:0 auto 14px;display:flex;align-items:center;justify-content:center;font-size:38px;color:#fff;}
    h1{color:#3b6fe0;font-size:28pt;margin:8px 0;}
    .sub{color:#888;font-size:12pt;margin-bottom:20px;}
    .name{font-size:22pt;font-weight:800;color:#1a2235;margin:16px 0;padding:10px 50px;border-bottom:2px dashed #bbb;display:inline-block;}
    .body-txt{font-size:13pt;color:#444;line-height:1.9;margin:14px 0;}
    .score-badge{display:inline-block;background:#1e9d5f;color:#fff;padding:9px 26px;border-radius:30px;font-size:15pt;font-weight:700;margin:12px 0;}
    .date{color:#666;font-size:11pt;margin-top:14px;}
    .disclaimer{margin-top:22px;padding:12px 16px;background:#fff8e6;border:1px solid #f0d98c;border-radius:8px;font-size:9.5pt;color:#8a6d1a;line-height:1.7;}
    .btns{text-align:center;margin-top:20px;}
    .btns button{background:#3b6fe0;color:#fff;border:none;padding:11px 26px;border-radius:6px;font-size:12pt;cursor:pointer;margin:0 6px;}
    @media print{.btns{display:none !important;}body{background:#fff;padding:0;}.cert{border-width:10px;}}
  </style></head><body>
  <div class="btns"><button onclick="window.print()">🖨 پرینت / ذخیره PDF</button><button onclick="window.close()">بستن</button></div>
  <div class="cert">
    <div class="seal">🏆</div>
    <h1>گواهی موفقیت</h1>
    <div class="sub">Certificate of Achievement</div>
    <div class="body-txt">این گواهی به</div>
    <div class="name">${name}</div>
    <div class="body-txt">اعطا می‌شود که با موفقیت آزمون شبیه‌سازی‌شده‌ی<br><strong>CompTIA Security+ (SY0-701)</strong> را با نمره‌ی زیر به پایان رساند:</div>
    <div class="score-badge">${r.pct}% — ${r.correct} از ${r.total}</div>
    <div class="date">آزمون شماره ${r.setNum} • تاریخ: ${today}</div>
    <div class="disclaimer">
      ⚠️ توجه: این گواهی توسط یک <strong>نرم‌افزار آموزشی</strong> صادر شده و صرفاً نشان‌دهنده‌ی پیشرفت شما در تمرین است.
      این گواهی <strong>ارزش قانونی یا رسمی ندارد</strong> و مدرک معتبر CompTIA محسوب نمی‌شود.
      برای دریافت گواهی رسمی باید در آزمون واقعی CompTIA شرکت کنید.
    </div>
  </div>
  </body></html>`);
  w.document.close();
}

function setNav(activeId){
  ['navHome','navExam','navStats','navReset'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.classList.toggle('active', id===activeId);
  });
}

// init
loadState();
try { const an = localStorage.getItem('secplus_anim'); if(an==='off'){ animationsOn=false; document.documentElement.setAttribute('data-anim','off'); } } catch(e){}
renderDomains();
attachTilt();