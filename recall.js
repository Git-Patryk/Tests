/* StudyZone — wspólny silnik trybu „Nauka" (active recall + system Leitnera).
   Czyta globalny RECALL_DECK = { meta:{...}, cards:[{id,sec,f,b}] } i renderuje
   całą stronę do <nav id="nav"> oraz <div id="wrap">. Postęp w localStorage.
   meta: title, icon, accent, accent2, hub, hubName, key, testHref, testName, cats? */
(function(){
  var D = window.RECALL_DECK;
  if(!D){ document.body.innerHTML='<p style="padding:2rem;color:#fff">Brak danych fiszek (RECALL_DECK).</p>'; return; }
  var M = D.meta, CARDS = D.cards, MAXBOX = 5;
  var KEY = M.key;

  // ---- kolory akcentu ----
  function hexToRgb(h){h=h.replace('#','');return [parseInt(h.substr(0,2),16),parseInt(h.substr(2,2),16),parseInt(h.substr(4,2),16)];}
  var rgb = hexToRgb(M.accent);
  var r=document.documentElement.style;
  r.setProperty('--nc', M.accent);
  r.setProperty('--nc2', M.accent2 || M.accent);
  r.setProperty('--nc-dim','rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+',.14)');
  r.setProperty('--nc-border','rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+',.34)');

  // ---- kategorie (zakres) ----
  var cats = M.cats;
  if(!cats){
    var seen={}, order=[];
    CARDS.forEach(function(c){ if(!seen[c.sec]){seen[c.sec]=1;order.push(c.sec);} });
    cats = order.map(function(s){ return {id:s, label:s}; });
  }
  var scope={}; cats.forEach(function(c){scope[c.id]=true;});
  var mode='weak';

  // ---- postęp ----
  var prog={};
  try{prog=JSON.parse(localStorage.getItem(KEY))||{};}catch(e){prog={};}
  function save(){try{localStorage.setItem(KEY,JSON.stringify(prog));}catch(e){}}
  function box(c){var p=prog[c.id];return p?p.box:0;}
  function esc(s){return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
  function $(id){return document.getElementById(id);}

  // ---- markup ----
  document.title = M.title + ' – Nauka (active recall)';
  $('nav').innerHTML =
    '<a href="index.html">🔭 StudyZone</a><span class="sep">/</span>'+
    '<a href="'+M.hub+'">'+esc(M.hubName)+'</a><span class="sep">/</span>'+
    '<span class="current">Nauka (active recall)</span>';

  var chipScope = cats.map(function(c){return '<div class="chip on" data-p="'+esc(c.id)+'">'+esc(c.label)+'</div>';}).join('');
  var testStep = M.testHref ? '<span class="ar">→</span><a class="step" href="'+M.testHref+'" style="text-decoration:none">3 · Testy</a>' : '';

  $('wrap').innerHTML =
  '<div class="head">'+
    '<div class="icon">'+M.icon+'</div>'+
    '<h1>Nauka — active recall</h1>'+
    '<p>Najpierw <strong>przypomnij sobie</strong> odpowiedź, dopiero potem ją odsłoń i oceń. System pudełek (Leitnera) priorytetyzuje to, czego jeszcze nie umiesz. Postęp zapisuje się w tej przeglądarce.</p>'+
  '</div>'+
  '<div class="flow">'+
    '<a class="step" href="'+M.hub+'" style="text-decoration:none">1 · Notatki</a>'+
    '<span class="ar">→</span><span class="step cur">2 · Active recall</span>'+
    testStep+
  '</div>'+
  '<div id="setup">'+
    '<div class="panel">'+
      '<div class="dash">'+
        '<div class="stat tot"><b id="dTot">0</b><span>Wszystkie</span></div>'+
        '<div class="stat new"><b id="dNew">0</b><span>Do nauki</span></div>'+
        '<div class="stat prog"><b id="dProg">0</b><span>W trakcie</span></div>'+
        '<div class="stat done"><b id="dDone">0</b><span>Opanowane</span></div>'+
      '</div>'+
      '<div class="bar"><i id="dBar"></i></div>'+
      '<div class="bar-lbl" id="dBarLbl">Opanowane: 0%</div>'+
      '<div class="scope"><div class="lbl">Zakres nauki</div><div class="chips" id="chips">'+chipScope+'</div></div>'+
      '<div class="scope"><div class="lbl">Tryb</div><div class="chips" id="modeChips">'+
        '<div class="chip on" data-m="weak">Najpierw słabe i nowe</div>'+
        '<div class="chip" data-m="all">Wszystkie po kolei</div>'+
      '</div></div>'+
      '<div class="row" style="margin-top:.4rem">'+
        '<button class="btn" id="startBtn">Rozpocznij naukę</button>'+
        '<button class="btn ghost" id="resetBtn">Resetuj postęp</button>'+
      '</div>'+
      '<div class="hint">Skróty podczas nauki: <strong>Spacja</strong> = odsłoń · <strong>1</strong> = Powtórz · <strong>2</strong> = Umiem</div>'+
    '</div>'+
  '</div>'+
  '<div id="study">'+
    '<div class="sbar"><span id="sProg">0 / 0</span><span id="sBox"></span></div>'+
    '<div class="bar"><i id="sBar"></i></div>'+
    '<div class="card">'+
      '<span class="box-tag" id="boxTag"></span>'+
      '<div class="term" id="cTerm"></div>'+
      '<div class="ask">Przypomnij sobie odpowiedź…</div>'+
      '<div class="ans" id="cAns"></div>'+
      '<div class="controls">'+
        '<button class="reveal-btn" id="revealBtn">Pokaż odpowiedź</button>'+
        '<div class="grade" id="gradeRow" style="display:none">'+
          '<button class="gbtn again" id="againBtn">↺ Powtórz</button>'+
          '<button class="gbtn good" id="goodBtn">✓ Umiem</button>'+
        '</div>'+
        '<div class="khint">Spacja = odsłoń · 1 = Powtórz · 2 = Umiem</div>'+
      '</div>'+
    '</div>'+
    '<div class="row" style="margin-top:1rem"><button class="btn ghost" id="endBtn">Zakończ sesję</button></div>'+
  '</div>'+
  '<div id="summary">'+
    '<div class="panel">'+
      '<div class="big" id="sumBig">0</div>'+
      '<p style="color:var(--muted);font-size:.9rem;margin-bottom:1rem">fiszek przerobionych w tej sesji</p>'+
      '<div class="dash" style="grid-template-columns:repeat(2,1fr)">'+
        '<div class="stat done"><b id="sumGood">0</b><span>Umiem</span></div>'+
        '<div class="stat prog"><b id="sumAgain">0</b><span>Do powtórki</span></div>'+
      '</div>'+
      '<div class="bar" style="margin-top:1rem"><i id="sumBar"></i></div>'+
      '<div class="bar-lbl" id="sumBarLbl">Opanowane: 0%</div>'+
      '<div class="row" style="margin-top:.6rem">'+
        '<button class="btn" id="againSessionBtn">Ucz się dalej</button>'+
        '<button class="btn ghost" id="backBtn">Pulpit</button>'+
      '</div>'+
      (M.testHref ? '<div class="row next-cta"><a class="btn" style="text-decoration:none" href="'+M.testHref+'">Przejdź do testów →</a></div>' : '')+
    '</div>'+
  '</div>';

  // ---- dashboard ----
  function refreshDash(){
    var tot=CARDS.length,nw=0,pr=0,dn=0;
    CARDS.forEach(function(c){var b=box(c);if(b<=0)nw++;else if(b>=MAXBOX)dn++;else pr++;});
    $('dTot').textContent=tot; $('dNew').textContent=nw; $('dProg').textContent=pr; $('dDone').textContent=dn;
    var pct=tot?Math.round(dn/tot*100):0; $('dBar').style.width=pct+'%'; $('dBarLbl').textContent='Opanowane: '+pct+'% ('+dn+'/'+tot+')';
  }

  Array.prototype.forEach.call(document.querySelectorAll('#chips .chip'),function(ch){
    ch.addEventListener('click',function(){var p=ch.dataset.p;scope[p]=!scope[p];ch.classList.toggle('on',scope[p]);});
  });
  Array.prototype.forEach.call(document.querySelectorAll('#modeChips .chip'),function(ch){
    ch.addEventListener('click',function(){
      mode=ch.dataset.m;
      Array.prototype.forEach.call(document.querySelectorAll('#modeChips .chip'),function(x){x.classList.toggle('on',x===ch);});
    });
  });

  // ---- sesja ----
  var catLabel={}; cats.forEach(function(c){catLabel[c.id]=c.label;});
  var queue=[],pos=0,cur=null,sCount=0,sGood=0,sAgain=0;
  function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
  function buildQueue(){
    var pool=CARDS.filter(function(c){return scope[c.sec];});
    if(mode==='weak'){
      pool=pool.filter(function(c){return box(c)<MAXBOX;});
      pool.sort(function(a,b){return box(a)-box(b);});
      var out=[],i=0;
      while(i<pool.length){var j=i;while(j<pool.length&&box(pool[j])===box(pool[i]))j++;out=out.concat(shuffle(pool.slice(i,j)));i=j;}
      return out;
    }
    return shuffle(pool);
  }
  function startSession(){
    queue=buildQueue();
    if(!queue.length){alert(mode==='weak'?'W wybranym zakresie wszystko jest już opanowane! Wybierz „Wszystkie po kolei", inny zakres lub zresetuj postęp.':'Wybierz przynajmniej jedną kategorię w zakresie nauki.');return;}
    pos=0;sCount=0;sGood=0;sAgain=0;
    $('setup').style.display='none';$('summary').style.display='none';$('study').style.display='block';
    showCard(); window.scrollTo(0,0);
  }
  function showCard(){
    if(pos>=queue.length){endSession();return;}
    cur=queue[pos];
    $('sProg').textContent=(pos+1)+' / '+queue.length;
    $('sBar').style.width=(pos/queue.length*100)+'%';
    var b=box(cur);
    $('sBox').textContent='Pudełko '+(b>0?b:'—')+' / '+MAXBOX;
    $('boxTag').textContent=catLabel[cur.sec]||cur.sec;
    $('cTerm').innerHTML=esc(cur.f);
    $('cAns').innerHTML=esc(cur.b).replace(/\n/g,'<br>');
    $('cAns').classList.remove('show');
    $('revealBtn').style.display='block';
    $('gradeRow').style.display='none';
  }
  function reveal(){
    if($('cAns').classList.contains('show'))return;
    $('cAns').classList.add('show');
    $('revealBtn').style.display='none';
    $('gradeRow').style.display='grid';
  }
  function grade(good){
    if(!$('cAns').classList.contains('show'))return;
    var p=prog[cur.id]||{box:0,seen:0,good:0,again:0};
    p.seen++;
    if(good){p.box=Math.min((p.box||0)+1,MAXBOX);p.good++;sGood++;}
    else{p.box=1;p.again++;sAgain++;}
    p.last=Date.now();
    prog[cur.id]=p;save();
    sCount++;pos++;showCard();
  }
  function endSession(){
    $('study').style.display='none';$('summary').style.display='block';
    $('sumBig').textContent=sCount;$('sumGood').textContent=sGood;$('sumAgain').textContent=sAgain;
    var tot=CARDS.length,dn=0;CARDS.forEach(function(c){if(box(c)>=MAXBOX)dn++;});
    var pct=tot?Math.round(dn/tot*100):0;$('sumBar').style.width=pct+'%';$('sumBarLbl').textContent='Opanowane: '+pct+'% ('+dn+'/'+tot+')';
    window.scrollTo(0,0);
  }
  function toSetup(){$('study').style.display='none';$('summary').style.display='none';$('setup').style.display='block';refreshDash();}

  $('startBtn').addEventListener('click',startSession);
  $('revealBtn').addEventListener('click',reveal);
  $('againBtn').addEventListener('click',function(){grade(false);});
  $('goodBtn').addEventListener('click',function(){grade(true);});
  $('endBtn').addEventListener('click',endSession);
  $('backBtn').addEventListener('click',toSetup);
  $('againSessionBtn').addEventListener('click',startSession);
  $('resetBtn').addEventListener('click',function(){
    if(confirm('Na pewno wyczyścić cały zapisany postęp nauki dla tego przedmiotu?')){prog={};save();refreshDash();}
  });
  document.addEventListener('keydown',function(e){
    if($('study').style.display!=='block')return;
    if(e.code==='Space'){e.preventDefault();reveal();}
    else if(e.key==='1'){grade(false);}
    else if(e.key==='2'){grade(true);}
  });

  refreshDash();
})();
