(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const H=[{id:1,optionA:"Methodical",optionB:"Rowan",answer:"B"},{id:2,optionA:"Clash Royale",optionB:"Overwatch",answer:"B"},{id:3,optionA:"Pocket 8s",optionB:"Ace 9 Suited",answer:"B"},{id:4,optionA:"Apple Bold Rock",optionB:"Mimosa Bold Rock",answer:"A"},{id:5,optionA:"Dr Pepper",optionB:"Coke",answer:"B"},{id:6,optionA:"Krusty",optionB:"Ned",answer:"B"},{id:7,optionA:"Robots",optionB:"Hoodwinked",answer:"A"},{id:8,optionA:"WW2",optionB:"Vietnam",answer:"B"},{id:9,optionA:"Oil",optionB:"Acrylic",answer:"A"},{id:10,optionA:"Pearl Jam",optionB:"Alice in Chains",answer:"A"},{id:11,optionA:"Sophomore Year HS",optionB:"Sophomore Year College",answer:"A"},{id:12,optionA:"Calculus",optionB:"Statistics",answer:"A"},{id:13,optionA:"George Bush",optionB:"Bill Clinton",answer:"A"},{id:14,optionA:"Quiche",optionB:"Roast",answer:"A"},{id:15,optionA:"Japan",optionB:"Greece",answer:"A"},{id:16,optionA:"100 Spiders",optionB:"20 Squirrels",answer:"A"},{id:17,optionA:"Unlimited Games & Bacon",optionB:"No Games",answer:"A"},{id:18,optionA:"Minecraft Cottage",optionB:"Minecraft Castle",answer:"A"},{id:19,optionA:"Lead Out Bluff",optionB:"Re-raise Bluff",answer:"B"},{id:20,optionA:"Checkerboard Flooring",optionB:"Carpet",answer:"A"},{id:21,optionA:"Sci-Fi",optionB:"Westerns",answer:"A"},{id:22,optionA:"Sunny",optionB:"Partly Cloudy",answer:"B"},{id:23,optionA:"Spring",optionB:"Summer",answer:"A"},{id:24,optionA:"Big Black Puffer",optionB:"Fake Leather",answer:"A"},{id:25,optionA:"Whole Number",optionB:"Decimal Numbers",answer:"B"},{id:26,optionA:"Butt Rash",optionB:"Butt Cuts",answer:"B"},{id:27,optionA:"Queen",optionB:"Michael Jackson",answer:"B"},{id:28,optionA:"Peak Scythe",optionB:"Peak Poker",answer:"A"},{id:29,optionA:"Bench Press",optionB:"Deadlift",answer:"A"},{id:30,optionA:"Chicken Pot Pie",optionB:"Hamburger",answer:"A"},{id:31,optionA:"Cadbury Egg",optionB:"Chocolate Chip Cookie",answer:"B"},{id:32,optionA:"Fame",optionB:"Money",answer:"B"},{id:33,optionA:"Matcha",optionB:"Iced Americano",answer:"B"},{id:34,optionA:"Mimi",optionB:"Nana",answer:"B"},{id:35,optionA:"Leather",optionB:"Velvet",answer:"A"}];function Q(){const s=new Date().toDateString(),e=localStorage.getItem("thisOrThat_daily");if(e){const a=JSON.parse(e);if(a.date===s)return a.questions}const t=D();let o=H.filter(a=>!t.includes(a.id));o.length<5&&(_(),o=[...H]);const n=o.sort(()=>Math.random()-.5).slice(0,5);return Y(n.map(a=>a.id)),localStorage.setItem("thisOrThat_daily",JSON.stringify({date:s,questions:n})),n}function D(){const s=localStorage.getItem("thisOrThat_seen");return s?JSON.parse(s):[]}function Y(s){const e=D(),t=[...new Set([...e,...s])];localStorage.setItem("thisOrThat_seen",JSON.stringify(t))}function _(){localStorage.setItem("thisOrThat_seen",JSON.stringify([]))}const b=[{level:1,xpRequired:300,type:"image",path:"/rewards/simpsons.png",title:"A Picture of Me",description:"You unlocked your first reward! 💕"},{level:2,xpRequired:600,type:"image",path:"/rewards/lil_madison.png",title:"Me Singing For You",description:"Hope you enjoy this... 🎤😅"},{level:3,xpRequired:900,type:"text",title:"A Poem Just For You",content:`Your poem will go here...
    
Multiple lines work!
You can write something sweet 💕`,description:"A special poem written just for you"},{level:4,xpRequired:1200,type:"text",title:"Coffee On Me! ☕",content:"This is an IOU for one coffee of your choice - my treat! Redeem anytime 😊",description:"Free coffee whenever you want!"},{level:5,xpRequired:1500,type:"image",path:"/rewards/simpsons.jpg",title:"Another Picture of Me",description:"Another one for your collection! 📸"},{level:6,xpRequired:1800,type:"image",path:"/rewards/lil_madison.png",title:"Funny Video",description:"Prepare to laugh 😂"},{level:7,xpRequired:2100,type:"text",title:"Ultimate Embarrassment IOU",content:"I will embarrass myself in ANY way you ask. No limits. You have full control. Use this power wisely... 😰",description:"The ultimate reward - make me do anything!"}];class J{constructor(){this.load()}load(){const e=localStorage.getItem("gameProgress");if(e){const t=JSON.parse(e);this.totalXP=t.totalXP||0,this.unlockedRewards=t.unlockedRewards||[],this.lastPlayed=t.lastPlayed||{}}else this.totalXP=0,this.unlockedRewards=[],this.lastPlayed={}}save(){localStorage.setItem("gameProgress",JSON.stringify({totalXP:this.totalXP,unlockedRewards:this.unlockedRewards,lastPlayed:this.lastPlayed}))}addXP(e){const t=this.getCurrentLevel();this.totalXP+=e;const o=this.getCurrentLevel();if(this.save(),o>t){const i=[];for(let n=t+1;n<=o;n++)this.unlockedRewards.includes(n)||(this.unlockedRewards.push(n),i.push(b[n-1]));return{leveledUp:!0,newRewards:i}}return{leveledUp:!1}}getCurrentLevel(){for(let e=b.length-1;e>=0;e--)if(this.totalXP>=b[e].xpRequired)return b[e].level;return 0}getNextReward(){const e=this.getCurrentLevel();return b[e]||null}getXPToNextLevel(){const e=this.getNextReward();return e?e.xpRequired-this.totalXP:0}getAllRewards(){return b}getUnlockedRewards(){return b.filter(e=>this.unlockedRewards.includes(e.level))}hasPlayedToday(e){const t=new Date().toDateString();return this.lastPlayed[e]===t}markPlayedToday(e){const t=new Date().toDateString();this.lastPlayed[e]=t,this.save()}getTotalXP(){return this.totalXP}}const l=new J;class z{constructor(e){this.container=e,this.questions=Q(),this.currentQuestionIndex=0,this.score=0,this.answers=[],this.isComplete=!1,this.loadProgress(),this.render()}loadProgress(){const e=new Date().toDateString(),t=localStorage.getItem("thisOrThat_progress");if(t){const o=JSON.parse(t);if(o.date===e)return this.score=o.score||0,this.answers=o.answers||[],this.currentQuestionIndex=this.answers.length,this.isComplete=o.complete||!1,!0}return!1}saveProgress(e=!1){const t=new Date().toDateString();localStorage.setItem("thisOrThat_progress",JSON.stringify({date:t,complete:e||this.isComplete,score:this.score,answers:this.answers,currentQuestionIndex:this.currentQuestionIndex}))}handleAnswer(e){const t=this.questions[this.currentQuestionIndex],o=e===t.answer;this.answers.push({question:t,userChoice:e,correct:o}),o&&(this.score+=20),this.saveProgress(!1),this.showResult(o,t),setTimeout(()=>{this.currentQuestionIndex++,this.currentQuestionIndex>=this.questions.length?this.completeGame():this.render()},1500)}showResult(e,t){const o=this.container.querySelector(".game-content"),i=t.answer==="A"?t.optionA:t.optionB;o.innerHTML=`
      <div class="result-screen ${e?"correct":"incorrect"}">
        <div class="result-icon">${e?"✓":"✗"}</div>
        <div class="result-text">
          ${e?"Correct!":"Not quite!"}
        </div>
        <div class="correct-answer">
          I would choose: <strong>${i}</strong>
        </div>
        <div class="xp-earned">+${e?20:0} XP</div>
      </div>
    `}completeGame(){this.isComplete=!0,this.saveProgress(!0);const e=l.addXP(this.score);l.markPlayedToday("thisOrThat"),this.showCompletionScreen(e)}showCompletionScreen(e){const t=this.score/100*100;let o=`
      <div class="completion-screen">
        <h2>Today's Results</h2>
        <div class="final-score">${this.score} / 100 XP</div>
        <div class="score-bar">
          <div class="score-fill" style="width: ${t}%"></div>
        </div>
        <div class="summary">
          You got ${this.answers.filter(i=>i.correct).length} out of ${this.questions.length} correct!
        </div>
    `;e.leveledUp&&e.newRewards.length>0&&(o+=`
        <div class="level-up">
          <div class="level-up-banner">🎉 LEVEL UP! 🎉</div>
          ${e.newRewards.map(i=>`
            <div class="new-reward">
              <strong>${i.title}</strong>
              <p>${i.description}</p>
            </div>
          `).join("")}
        </div>
      `),o+=`
        <div class="total-progress">
          Total XP: ${l.getTotalXP()} 
          <span class="level-badge">Level ${l.getCurrentLevel()}</span>
        </div>
        <button class="review-btn" onclick="reviewThisOrThat()">
          Review Answers
        </button>
        <button class="home-btn" onclick="showHome()">
          Back to Home
        </button>
      </div>
    `,this.container.querySelector(".game-content").innerHTML=o}showReview(){const e=`
      <div class="review-screen">
        <h2>Answer Review</h2>
        <div class="review-list">
          ${this.answers.map((t,o)=>`
            <div class="review-item ${t.correct?"correct":"incorrect"}">
              <div class="review-number">Question ${o+1}</div>
              <div class="review-question">
                <span class="choice ${t.userChoice==="A"?"selected":""}">${t.question.optionA}</span>
                <span class="vs">or</span>
                <span class="choice ${t.userChoice==="B"?"selected":""}">${t.question.optionB}</span>
              </div>
              <div class="review-result">
                ${t.correct?"✓ Correct!":`✗ I chose: ${t.question.answer==="A"?t.question.optionA:t.question.optionB}`}
              </div>
            </div>
          `).join("")}
        </div>
        <button class="home-btn" onclick="showHome()">Back to Home</button>
      </div>
    `;this.container.querySelector(".game-content").innerHTML=e}render(){if(this.isComplete){this.showCompletionScreen({leveledUp:!1});return}const e=this.questions[this.currentQuestionIndex];this.container.innerHTML=`
      <div class="this-or-that-game">
        <div class="game-header">
          <button class="back-btn" onclick="showHome()">← Back</button>
          <h2>This or That</h2>
          <div class="progress-indicator">
            Question ${this.currentQuestionIndex+1} / ${this.questions.length}
          </div>
        </div>
        
        <div class="game-content">
          <div class="question-prompt">Which would I choose?</div>
          
          <div class="choices">
            <button class="choice-btn choice-a" onclick="thisOrThat.handleAnswer('A')">
              ${e.optionA}
            </button>
            
            <div class="or-divider">OR</div>
            
            <button class="choice-btn choice-b" onclick="thisOrThat.handleAnswer('B')">
              ${e.optionB}
            </button>
          </div>
        </div>
      </div>
    `}}window.thisOrThat=null;function q(s){window.thisOrThat=new z(s)}function X(s){const e=new Date().toDateString(),t=localStorage.getItem("thisOrThat_progress");if(!t){s.innerHTML=`
      <div class="review-screen">
        <button class="back-btn" onclick="showHome()">← Back</button>
        <h2>No Results Yet</h2>
        <p style="text-align: center; color: #666;">Play today's This or That game first!</p>
      </div>
    `;return}const o=JSON.parse(t);if(o.date!==e||!o.complete){const n=o.answers?.length||0;s.innerHTML=`
      <div class="review-screen">
        <button class="back-btn" onclick="showHome()">← Back</button>
        <h2>${n>0?"In Progress":"No Results Yet"}</h2>
        <p style="text-align: center; color: #666;">
          ${n>0?`You've answered ${n} of 5 questions. Complete the game to review all answers!`:"Complete today's This or That game first!"}
        </p>
        ${n>0?`
          <button class="continue-btn" onclick="startThisOrThatFromMenu()">
            Continue Game
          </button>
        `:""}
      </div>
    `;return}const i=`
    <div class="review-screen">
      <button class="back-btn" onclick="showHome()">← Back</button>
      <h2>Today's This or That Review</h2>
      <div class="review-score">Score: ${o.score} / 100 XP</div>
      <div class="review-list">
        ${o.answers.map((n,a)=>`
          <div class="review-item ${n.correct?"correct":"incorrect"}">
            <div class="review-number">Question ${a+1}</div>
            <div class="review-question">
              <span class="choice ${n.userChoice==="A"?"selected":""}">${n.question.optionA}</span>
              <span class="vs">or</span>
              <span class="choice ${n.userChoice==="B"?"selected":""}">${n.question.optionB}</span>
            </div>
            <div class="review-result">
              ${n.correct?"✓ Correct!":`✗ I chose: ${n.question.answer==="A"?n.question.optionA:n.question.optionB}`}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;s.innerHTML=i}window.reviewThisOrThat=function(){const s=document.getElementById("app");X(s)};window.startThisOrThatFromMenu=function(){const s=document.getElementById("app");q(s)};function K(s){s.innerHTML=`
    <div class="wordle">
      <div class="grid">
        ${Array.from({length:6}).map(()=>`
          <div class="row">
            ${Array.from({length:5}).map(()=>'<div class="tile"></div>').join("")}
          </div>
        `).join("")}
      </div>

      <div class="keyboard">
        ${["QWERTYUIOP","ASDFGHJKL","ENTERZXCVBNM⌫"].map(e=>`
          <div class="key-row">
            ${e.split("").map(t=>`<button class="key">${t}</button>`).join("")}
          </div>
        `).join("")}
      </div>
    </div>
  `}const W="wordle_progress";function O(s){localStorage.setItem(W,JSON.stringify(s))}function F(){const s=localStorage.getItem(W);return s?JSON.parse(s):null}let A=[],N=new Set,$=!1;async function V(){if(!$)try{const[s,e]=await Promise.all([fetch("wordle-data/answers.json"),fetch("wordle-data/allowed.json")]);if(!s.ok||!e.ok)throw new Error("Failed to load word list files");const t=await s.json(),o=await e.json();A=t.map(n=>n.toUpperCase());const i=o.map(n=>n.toUpperCase());N=new Set([...A,...i]),$=!0,console.log("✅ Word lists loaded:",A.length,"answers,",N.size,"allowed"),console.log("First 5 answers:",A.slice(0,5))}catch(s){throw console.error("❌ Failed to load word lists:",s),s}}function Z(s){if(!$)return console.warn("Word lists not loaded yet"),!1;const e=s.trim().toUpperCase();return N.has(e)}function ee(){if(!$)throw new Error("Word lists not loaded");if(A.length===0)throw new Error("No answers loaded");const s=new Date("2021-06-19"),e=new Date;s.setHours(0,0,0,0),e.setHours(0,0,0,0);const t=Math.floor((e-s)/864e5)%A.length,o=A[t];return console.log("Today's answer:",o),o}const P=5,M=6,x=100;async function te(s){await V();const e=ee(),t=new Date().toDateString(),o=F(),i=o&&o.date===t&&o.answer===e&&!o.won&&o.rowsUsed<M;let n=i?o.rowsUsed:0,a=0,w=i?!1:o&&o.date===t;const p=i?[...o.guesses]:[];s.innerHTML=`
    <div class="wordle-wrapper">

      <div class="wordle-header">
        <button class="back-btn" id="back-home">← Back</button>
        <h2>Wordle</h2>
      </div>

      <div id="wordle-root"></div>
    </div>
  `;const m=document.getElementById("wordle-root");K(m);const f=m.querySelectorAll(".row");i&&p.forEach((r,h)=>{const c=f[h].children;r.word.split("").forEach((g,d)=>{c[d].textContent=g,c[d].classList.add(r.result[d])})}),w&&o&&o.date===t&&(p.forEach((r,h)=>{const c=f[h].children;r.word.split("").forEach((g,d)=>{c[d].textContent=g,c[d].classList.add(r.result[d])})}),o.won?u(`🎉 You already completed today's Wordle! +${x} XP`):u(`😢 The word was ${e}`)),document.getElementById("back-home").onclick=()=>{!w&&p.length>0&&O({date:t,answer:e,won:!1,rowsUsed:n,guesses:p}),k(),window.showHome()};function R(r){a>=P||w||(f[n].children[a].textContent=r,a++)}function B(){a===0||w||(a--,f[n].children[a].textContent="")}function y(r){if(!w){if(r==="ENTER"){if(a!==P)return;L();return}if(r==="⌫"||r==="BACKSPACE"){B();return}/^[A-Z]$/.test(r)&&R(r)}}function L(){const r=f[n].children,h=Array.from(r).map(d=>d.textContent).join("");if(!Z(h)){u("❌ Not in word list");return}const c=e.split(""),g=Array(P).fill("absent");for(let d=0;d<P;d++)h[d]===c[d]&&(r[d].classList.add("correct"),g[d]="correct",c[d]=null);for(let d=0;d<P;d++){if(g[d]==="correct")continue;const E=c.indexOf(h[d]);E!==-1?(r[d].classList.add("present"),g[d]="present",c[E]=null):r[d].classList.add("absent")}if(p.push({word:h,result:g}),O({date:t,answer:e,won:h===e,rowsUsed:n+1,guesses:p}),h===e){T(!0);return}n++,a=0,n===M&&T(!1)}function T(r){w=!0,l.markPlayedToday("wordle"),r?(l.addXP(x),u(`🎉 You got it! +${x} XP`)):u(`😢 The word was ${e}`),O({date:t,answer:e,won:r,rowsUsed:p.length,guesses:p})}function u(r){const h=m.querySelector(".wordle-message");h&&h.remove();const c=document.createElement("div");c.className="wordle-message",c.textContent=r,m.appendChild(c)}function v(r){y(r.key.toUpperCase())}window.addEventListener("keydown",v),m.querySelectorAll(".key").forEach(r=>{r.addEventListener("click",()=>y(r.textContent))});function k(){window.removeEventListener("keydown",v)}}function se(s){const e=new Date().toDateString(),t=F();if(!t||t.date!==e){s.innerHTML=`
      <div class="review-screen">
        <button class="back-btn" onclick="showHome()">← Back</button>
        <h2>No Results Yet</h2>
        <p style="text-align:center; color:#666;">
          Play today’s Wordle first!
        </p>
      </div>
    `;return}s.innerHTML=`
    <div class="review-screen">
      <button class="back-btn" onclick="showHome()">← Back</button>

      <h2>Today’s Wordle</h2>

      <div class="review-summary ${t.won?"won":"lost"}">
        ${t.won?`🎉 Solved in ${t.rowsUsed} / 6 guesses`:"😢 Not solved today"}
      </div>

      <div class="wordle-review-grid">
        ${(t.guesses||[]).map(o=>`
          <div class="review-row">
            ${o.word.split("").map((i,n)=>`
              <div class="tile ${o.result[n]}">
                ${i}
              </div>
            `).join("")}
          </div>
        `).join("")}
      </div>

      <div class="review-answer">
        Answer: <strong>${t.answer}</strong>
      </div>
    </div>
  `}const S=[{category:"Nicknames",answers:["beanie","boobie","munt","tony"]},{category:"Favorite 80s Rock Bands",answers:["the smiths","talking heads","misfits","queen"]},{category:"In Your Room",answers:["box fan","john lennon poster","vision board","wallpaper"]},{category:"Food Combos",answers:["ketchup and rice","orange juice and popcorn","weenies and toast","jam and sausage"]},{category:"Road Names",answers:["pickle buddy court","honey girl lane","ruby golightly drive","apple butter drive"]},{category:"Crushes",answers:["cillian murphy","drew starkey","dallas","chris christie"]},{category:"Lead Actors of Movies We Watched",answers:["timothee chalamet","harrison ford","dylan o'brien","jim carrey"]},{category:"My Spotify Wrapped Artists",answers:["radiohead","nat king cole","bobby darin","a tribe called quest"]}],U="name_four_progress";function oe(s){localStorage.setItem(U,JSON.stringify(s))}function G(){const s=localStorage.getItem(U);return s?JSON.parse(s):null}const I=100;function ne(){const s=new Date("2025-01-01"),e=new Date;s.setHours(0,0,0,0),e.setHours(0,0,0,0);const t=Math.floor((e-s)/(1e3*60*60*24));return S[t%S.length]}function ie(s){const e=new Date().toDateString(),t=ne(),o=t.answers.map(u=>u.toUpperCase()),i=G(),n=new Set(i?.date===e?i.found:[]),a=i?.date===e&&i.completed;let w=i?.date===e&&i.guessCount||0;s.innerHTML=`
    <div class="name-four">
      <button class="back-btn" id="back-home">← Back</button>

      <h2>Name Four</h2>
      <div class="category">
        Category: <strong>${t.category}</strong>
      </div>

      <form id="guess-form" class="guess-form">
        <input
          id="guess-input"
          type="text"
          placeholder="Type a guess..."
          autocomplete="off"
          ${a?"disabled":""}
        />
        <button type="submit" ${a?"disabled":""}>
          Submit
        </button>
      </form>

      <div class="found">
        Found (<span id="found-count">0</span> / 4)
        <ul id="found-list"></ul>
      </div>

      <div id="completion-message"></div>
    </div>
  `;const p=document.getElementById("guess-input"),m=document.getElementById("found-list"),f=document.getElementById("found-count"),R=document.getElementById("completion-message");document.getElementById("back-home").onclick=()=>{window.showHome()},B(),a&&T(),document.getElementById("guess-form").onsubmit=u=>{if(u.preventDefault(),a)return;const v=p.value.trim();if(!v)return;const k=v.toUpperCase();if(p.value="",w++,n.has(k)){y(!1);return}if(o.includes(k)){n.add(k),y(!1),B(),n.size===4&&L();return}y(!1)};function B(){m.innerHTML="",f.textContent=n.size,[...n].forEach(u=>{const v=document.createElement("li");v.textContent=u,v.className="found-item",m.appendChild(v)})}function y(u){oe({date:e,found:[...n],completed:u,guessCount:w})}function L(){y(!0),l.addXP(I),l.markPlayedToday("name-four"),p.disabled=!0,document.querySelector("#guess-form button").disabled=!0,T()}function T(){R.innerHTML=`
      <div class="completion">
        🎉 You got all four!
        <div class="xp">+${I} XP</div>
        <p>Solved in <strong>${w}</strong> guesses</p>
        <p>Come back tomorrow for a new category</p>
      </div>
    `}}function re(){const s=new Date("2025-01-01"),e=new Date;s.setHours(0,0,0,0),e.setHours(0,0,0,0);const t=Math.floor((e-s)/(1e3*60*60*24));return S[t%S.length]}function ae(s){const e=new Date().toDateString(),t=re(),o=G();if(!o||o.date!==e){s.innerHTML=`
      <div class="name-four-review">
        <button class="back-btn" onclick="showHome()">← Back</button>

        <div class="review-card">
          <h2>Today's Name Four Review</h2>
          <p style="text-align: center; color: #6b7280;">
            No completed game to review today.
          </p>
        </div>
      </div>
    `;return}s.innerHTML=`
    <div class="name-four-review">
      <button class="back-btn" onclick="showHome()">← Back</button>

      <div class="review-card">
        <h2>Today's Name Four Review</h2>

        <div class="category">
          Category: <strong>${t.category}</strong>
        </div>

        <div class="answers">
          ${o.found.map(i=>`
            <div class="review-answer">${i}</div>
          `).join("")}
        </div>

        <div class="stats">
          Total guesses made:
          <strong>${o.guessCount??o.found.length}</strong>
        </div>
      </div>
    </div>
  `}const C=document.getElementById("app");function j(){const s=l.getCurrentLevel(),e=l.getTotalXP(),t=l.getXPToNextLevel(),o=l.getNextReward();C.innerHTML=`
    <div class="home-screen">
      <header class="app-header">
        <h1>The Andrew Times Games</h1>

        <div class="progress-summary">
          <div class="level-info">
            <span class="level">Level ${s}</span>
            <span class="xp">${e} XP</span>
          </div>

          ${o?`
            <div class="next-reward">
              <div class="xp-bar">
                <div class="xp-fill" style="width: ${e%300/300*100}%"></div>
              </div>
              <div class="next-reward-text">
                ${t} XP to next reward: ${o.title}
              </div>
            </div>
          `:`
            <div class="max-level">🎉 All rewards unlocked! 🎉</div>
          `}
        </div>
      </header>

      <div class="game-cards">

        <!-- THIS OR THAT -->
        <div class="game-card ${l.hasPlayedToday("thisOrThat")?"completed":""}"
             onclick="handleGameClick('thisOrThat')">
          <div class="game-icon">🤔</div>
          <h3>This or That</h3>
          <p>Guess what I would choose</p>
          <div class="game-xp">Up to 100 XP</div>

          ${l.hasPlayedToday("thisOrThat")?'<div class="completed-badge">✓ Completed – Click to Review</div>':'<div class="play-badge">Play Now</div>'}
        </div>

        <!-- WORDLE -->
        <div class="game-card ${l.hasPlayedToday("wordle")?"completed":""}"
             onclick="handleGameClick('wordle')">
          <div class="game-icon">📝</div>
          <h3>Wordle</h3>
          <p>Guess the secret word</p>
          <div class="game-xp">100 XP</div>

          ${l.hasPlayedToday("wordle")?'<div class="completed-badge">✓ Completed – Click to Review</div>':'<div class="play-badge">Play Now</div>'}
        </div>

        <!-- NAME FOUR -->
        <div class="game-card ${l.hasPlayedToday("name-four")?"completed":""}"
             onclick="handleGameClick('name-four')">
          <div class="game-icon">🔢</div>
          <h3>Name Four</h3>
          <p>Find the four that belong together</p>
          <div class="game-xp">100 XP</div>

          ${l.hasPlayedToday("name-four")?'<div class="completed-badge">✓ Completed – Click to Review</div>':'<div class="play-badge">Play Now</div>'}
        </div>

      </div>

      <button class="rewards-btn" onclick="showRewards()">
        View Rewards & Progress
      </button>
    </div>
  `}async function de(s){l.hasPlayedToday(s)?ce(s):await le(s)}async function le(s){C.innerHTML='<div id="game-container"></div>';const e=document.getElementById("game-container");s==="thisOrThat"&&q(e),s==="wordle"&&await te(e),s==="name-four"&&ie(e)}function ce(s){C.innerHTML='<div id="game-container"></div>';const e=document.getElementById("game-container");s==="thisOrThat"&&X(e),s==="wordle"&&se(e),s==="name-four"&&ae(e)}function ue(){const s=l.getUnlockedRewards(),e=l.getAllRewards();C.innerHTML=`
    <div class="rewards-screen">
      <button class="back-btn" onclick="showHome()">← Back</button>
      <h2>Your Rewards</h2>

      <div class="rewards-list">
        ${e.map(t=>{const o=s.some(i=>i.level===t.level);return`
            <div class="reward-item ${o?"unlocked":"locked"}">
              <div class="reward-header">
                <span class="reward-level">Level ${t.level}</span>
                <span class="reward-xp">${t.xpRequired} XP</span>
              </div>

              ${o?`
                <h3>${t.title}</h3>
                <p class="reward-description">${t.description}</p>

                ${t.type==="text"?`
                  <div class="reward-content">${t.content}</div>
                `:t.type==="image"?`
                  <div class="reward-media">
                    <img src="${t.path}" alt="${t.title}" />
                  </div>
                `:t.type==="video"?`
                  <div class="reward-media">
                    <video controls>
                      <source src="${t.path}" type="video/mp4">
                    </video>
                  </div>
                `:""}
              `:`
                <h3>🔒 Locked</h3>
                <p class="reward-description">Reach Level ${t.level} to unlock!</p>
              `}
            </div>
          `}).join("")}
      </div>
    </div>
  `}window.showHome=j;window.showRewards=ue;window.handleGameClick=de;j();
