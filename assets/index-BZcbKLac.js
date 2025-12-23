(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const U=[{id:1,optionA:"Methodical Coffee",optionB:"Rowan Coffee",answer:"B"},{id:2,optionA:"Clash Royale",optionB:"Overwatch",answer:"B"},{id:3,optionA:"Pocket 8s",optionB:"Ace 9 Suited",answer:"B"},{id:4,optionA:"Apple Bold Rock",optionB:"Mimosa Bold Rock",answer:"A"},{id:5,optionA:"Dr Pepper",optionB:"Coke",answer:"B"},{id:6,optionA:"Krusty",optionB:"Ned",answer:"B"},{id:7,optionA:"Robots",optionB:"Hoodwinked",answer:"A"},{id:8,optionA:"WW2",optionB:"Vietnam",answer:"B"},{id:9,optionA:"Oil",optionB:"Acrylic",answer:"A"},{id:10,optionA:"Pearl Jam",optionB:"Alice in Chains",answer:"A"},{id:11,optionA:"Sophomore Year High School",optionB:"Sophomore Year College",answer:"A"},{id:12,optionA:"Calculus",optionB:"Statistics",answer:"A"},{id:13,optionA:"George Bush",optionB:"Bill Clinton",answer:"A"},{id:14,optionA:"Quiche",optionB:"Roast",answer:"A"},{id:15,optionA:"Japan",optionB:"Greece",answer:"A"},{id:16,optionA:"100 Spiders",optionB:"20 Squirrels",answer:"A"},{id:17,optionA:"Unlimited Games & Bacon",optionB:"No Games",answer:"A"},{id:18,optionA:"Minecraft Cottage",optionB:"Minecraft Castle",answer:"A"},{id:19,optionA:"Lead Out Bluff",optionB:"Re-raise Bluff",answer:"B"},{id:20,optionA:"Checkerboard Flooring",optionB:"Carpet",answer:"A"},{id:21,optionA:"Sci-Fi",optionB:"Westerns",answer:"A"},{id:22,optionA:"Sunny",optionB:"Partly Cloudy",answer:"B"},{id:23,optionA:"Spring",optionB:"Summer",answer:"A"},{id:24,optionA:"Big Black Puffer",optionB:"Fake Leather",answer:"A"},{id:25,optionA:"Whole Number",optionB:"Decimal Numbers",answer:"B"},{id:26,optionA:"Butt Rash",optionB:"Butt Cuts",answer:"B"},{id:27,optionA:"Queen",optionB:"Michael Jackson",answer:"B"},{id:28,optionA:"Peak Scythe",optionB:"Peak Poker",answer:"A"},{id:29,optionA:"Bench Press",optionB:"Deadlift",answer:"A"},{id:30,optionA:"Chicken Pot Pie",optionB:"Hamburger",answer:"A"},{id:31,optionA:"Cadbury Egg",optionB:"Chocolate Chip Cookie",answer:"B"},{id:32,optionA:"Fame",optionB:"Money",answer:"B"},{id:33,optionA:"Matcha",optionB:"Iced Americano",answer:"B"},{id:34,optionA:"Mimi",optionB:"Nana",answer:"B"},{id:35,optionA:"Leather",optionB:"Velvet",answer:"A"},{id:36,optionA:"Morning Person",optionB:"Night Owl",answer:"B"},{id:37,optionA:"Beach Vacation",optionB:"Snowy Mountains",answer:"A"},{id:38,optionA:"Pizza",optionB:"Tacos",answer:"A"},{id:39,optionA:"Voice Messages",optionB:"Calling",answer:"B"},{id:40,optionA:"Biking",optionB:"Swimming",answer:"B"},{id:41,optionA:"Sweet",optionB:"Savory",answer:"A"},{id:42,optionA:"Stubbed Toe",optionB:"Pinched Finger",answer:"B"},{id:43,optionA:"Mixed Drink",optionB:"Shots",answer:"A"},{id:44,optionA:"Disney",optionB:"Universal",answer:"A"},{id:45,optionA:"In Rainbows",optionB:"Kid A",answer:"B"},{id:46,optionA:"Family Guy",optionB:"Rick and Morty",answer:"A"},{id:47,optionA:"Cruise",optionB:"Train",answer:"B"},{id:48,optionA:"Board Games",optionB:"Video Games",answer:"A"},{id:49,optionA:"Sabrina Carpenter",optionB:"Billie Eilish",answer:"A"},{id:50,optionA:"Wutang Clan",optionB:"A Tribe Called Quest",answer:"A"},{id:51,optionA:"Rainy Days",optionB:"Snowy Days",answer:"B"},{id:52,optionA:"Pancakes",optionB:"Waffles",answer:"B"},{id:53,optionA:"Chocolate",optionB:"Vanilla",answer:"A"},{id:54,optionA:"Instagram Reels",optionB:"Youtube Shorts",answer:"B"},{id:55,optionA:"Group Hang",optionB:"One-on-One",answer:"B"},{id:56,optionA:"Stanley Kubrick",optionB:"Francis Ford Coppola",answer:"B"},{id:57,optionA:"Ryan Gosling",optionB:"Harrison Ford",answer:"A"},{id:58,optionA:"Bowling",optionB:"Mini Golf",answer:"A"},{id:59,optionA:"Physical Books",optionB:"Audiobooks",answer:"B"},{id:60,optionA:"Southern Food",optionB:"Mexican Food",answer:"A"},{id:61,optionA:"Fried Eggs",optionB:"Scrambled Eggs",answer:"B"},{id:62,optionA:"Driving Leisurely",optionB:"Speeding",answer:"A"},{id:63,optionA:"Gold Jewelry",optionB:"Silver Jewelry",answer:"A"},{id:64,optionA:"Tom Brady",optionB:"Lebron James",answer:"A"},{id:65,optionA:"Connecticut",optionB:"Oregon",answer:"A"},{id:66,optionA:"Window Seat",optionB:"Aisle Seat",answer:"B"},{id:67,optionA:"Light Roast",optionB:"Medium Roast",answer:"A"},{id:68,optionA:"Monopoly",optionB:"Sequence",answer:"B"},{id:69,optionA:"Painting",optionB:"Sketching",answer:"A"},{id:70,optionA:"Einstein",optionB:"Newton",answer:"B"},{id:71,optionA:"Burritos",optionB:"Bowls",answer:"B"},{id:72,optionA:"Walton Goggins",optionB:"Christoph Waltz",answer:"B"},{id:73,optionA:"Christopher Nolan",optionB:"Quentin Tarantino",answer:"B"},{id:74,optionA:"Geometry",optionB:"Algebra",answer:"B"},{id:75,optionA:"Caleb Hearon",optionB:"Theo Von",answer:"A"},{id:76,optionA:"Silent Sleep",optionB:"Box Fan Sleep",answer:"A"},{id:77,optionA:"Randy Marsh",optionB:"Eric Cartman",answer:"A"},{id:78,optionA:"Pen",optionB:"Pencil",answer:"A"},{id:79,optionA:"The Beatles",optionB:"The Rolling Stones",answer:"A"},{id:80,optionA:"OJ",optionB:"Diddy",answer:"B"},{id:81,optionA:"Piano",optionB:"Saxophone",answer:"A"},{id:82,optionA:"Rick",optionB:"Morty",answer:"A"},{id:83,optionA:"Bird As A Pet",optionB:"Turtle As A Pet",answer:"B"},{id:84,optionA:"Flying",optionB:"Driving",answer:"B"},{id:85,optionA:"Sweet",optionB:"Salty",answer:"A"},{id:86,optionA:"Gregg Turkington",optionB:"Tim Heidecker",answer:"A"},{id:87,optionA:"Elves",optionB:"Dwarves",answer:"B"},{id:88,optionA:"Its Always Sunny In Philadelphia",optionB:"Seinfeld",answer:"A"},{id:89,optionA:"King Kong",optionB:"Godzilla",answer:"A"},{id:90,optionA:"Ping Pong",optionB:"Pool",answer:"B"},{id:91,optionA:"D-Day",optionB:"Bin Laden Raid",answer:"B"},{id:92,optionA:"Fight A Leopard Seal",optionB:"Fight A Lion",answer:"B"},{id:93,optionA:"Aura",optionB:"Clout",answer:"A"},{id:94,optionA:"Poop",optionB:"Crap",answer:"B"},{id:95,optionA:"Plus 10 IQ Points",optionB:"Plus 2 Inches Of Height",answer:"A"},{id:96,optionA:"Skin Turns Green",optionB:"Defy Gravity",answer:"B"},{id:97,optionA:"Salami",optionB:"Pepperoni",answer:"A"},{id:98,optionA:"Half Of Population Turns To Dust",optionB:"Extinction From Lack Of Resources",answer:"B"},{id:99,optionA:"The Shire",optionB:"Diagon Alley",answer:"B"},{id:100,optionA:"There Are More Doors In The World",optionB:"There Are More Wheels In The World",answer:"A"},{id:101,optionA:"Climb Trees Faster Than A Monkey",optionB:"Swim Faster Than An Alligator",answer:"B"},{id:102,optionA:"Tilted Towers",optionB:"Retail Row",answer:"B"},{id:103,optionA:"Cirrus",optionB:"Cumulus",answer:"A"},{id:104,optionA:"Rewatch",optionB:"Watch Something New",answer:"A"},{id:105,optionA:"Be President",optionB:"Be The Richest Man Alive",answer:"A"}];function ae(){const t=new Date().toDateString(),e=localStorage.getItem("thisOrThat_daily");if(e){const a=JSON.parse(e);if(a.date===t)return a.questions}const n=Y();let o=U.filter(a=>!n.includes(a.id));o.length<5&&(le(),o=[...U]);const i=o.sort(()=>Math.random()-.5).slice(0,5);return re(i.map(a=>a.id)),localStorage.setItem("thisOrThat_daily",JSON.stringify({date:t,questions:i})),i}function Y(){const t=localStorage.getItem("thisOrThat_seen");return t?JSON.parse(t):[]}function re(t){const e=Y(),n=[...new Set([...e,...t])];localStorage.setItem("thisOrThat_seen",JSON.stringify(n))}function le(){localStorage.setItem("thisOrThat_seen",JSON.stringify([]))}const ce={common:.5,uncommon:.3,rare:.15,legendary:.05},P=[{id:1,name:"Robber Andrew",rarity:"common",image:"stickers/robber.png"},{id:2,name:"Full Belly Andrew",rarity:"common",image:"stickers/full_belly.png"},{id:3,name:"Baby Andrew",rarity:"common",image:"stickers/baby.png"},{id:4,name:"Gambler Andrew",rarity:"common",image:"stickers/gambler.png"},{id:5,name:"Hotdog Andrew",rarity:"common",image:"stickers/hotdog.png"},{id:6,name:"Chef Andrew",rarity:"common",image:"stickers/chef.png"},{id:7,name:"Smart Andrew",rarity:"common",image:"stickers/smart.png"},{id:8,name:"Tweety Andrew",rarity:"common",image:"stickers/tweety.png"},{id:9,name:"Cowboy Andrew",rarity:"uncommon",image:"stickers/cowboy.png"},{id:10,name:"Rapper Andrew",rarity:"uncommon",image:"stickers/rapper.png"},{id:11,name:"Racer Andrew",rarity:"uncommon",image:"stickers/racer.png"},{id:12,name:"Dancing Andrew",rarity:"uncommon",image:"stickers/dancer.png"},{id:13,name:"Judge Andrew",rarity:"uncommon",image:"stickers/judge.png"},{id:14,name:"Wizard Andrew",rarity:"uncommon",image:"stickers/wizard.png"},{id:15,name:"Gardener Andrew",rarity:"uncommon",image:"stickers/gardener.png"},{id:16,name:"Pirate Andrew",rarity:"rare",image:"stickers/pirate.png"},{id:17,name:"Successful Andrew",rarity:"rare",image:"stickers/successful.png"},{id:18,name:"Spinosaurus Andrew",rarity:"rare",image:"stickers/spinosaurus.png"},{id:19,name:"Poochaco Andrew",rarity:"legendary",image:"stickers/poochaco.png"},{id:20,name:"Andrew Simpson",rarity:"legendary",image:"stickers/simpson.png"}];function de(){const t={};return P.forEach(e=>{t[e.rarity]=(t[e.rarity]||0)+1}),P.map(e=>({...e,weight:ce[e.rarity]/t[e.rarity]}))}const I=de(),N=300,ue={common:25,uncommon:50,rare:100,legendary:200},C={common:"#9ca3af",uncommon:"#10b981",rare:"#3b82f6",legendary:"#f59e0b"},X={common:"Common",uncommon:"Uncommon",rare:"Rare",legendary:"Legendary"};class pe{constructor(){this.load()}load(){const e=localStorage.getItem("gameProgress");if(e){const n=JSON.parse(e);this.totalXP=n.totalXP||0,this.lastPlayed=n.lastPlayed||{},this.stickerCollection=n.stickerCollection||{},this.unopenedBoxes=n.unopenedBoxes||0}else this.totalXP=0,this.lastPlayed={},this.stickerCollection={},this.unopenedBoxes=1,this.save()}save(){localStorage.setItem("gameProgress",JSON.stringify({totalXP:this.totalXP,lastPlayed:this.lastPlayed,stickerCollection:this.stickerCollection,unopenedBoxes:this.unopenedBoxes}))}addXP(e){const n=this.getCurrentLevel();this.totalXP+=e;const s=this.getCurrentLevel()-n;return s>0&&(this.unopenedBoxes+=s),this.save(),{leveledUp:s>0,levelsGained:s,unopenedBoxes:this.unopenedBoxes}}getCurrentLevel(){return Math.floor(this.totalXP/N)}getXPToNextLevel(){return(this.getCurrentLevel()+1)*N-this.totalXP}getXPProgressInLevel(){const e=this.getCurrentLevel()*N;return this.totalXP-e}openMysteryBox(){if(this.unopenedBoxes<=0)return null;const e=this.getRandomSticker(),n=this.stickerCollection[e.id]>0;this.stickerCollection[e.id]=(this.stickerCollection[e.id]||0)+1,this.unopenedBoxes--;let o=0;return n&&(o=ue[e.rarity],this.totalXP+=o),this.save(),{sticker:e,isDuplicate:n,bonusXP:o,totalOwned:this.stickerCollection[e.id]}}getRandomSticker(){const e=I.reduce((o,s)=>o+s.weight,0);let n=Math.random()*e;for(const o of I)if(n-=o.weight,n<=0)return o;return I[I.length-1]}getCollectionStats(){const e=Object.keys(this.stickerCollection).length,n=P.length,o=Math.round(e/n*100),s={common:{owned:0,total:0},uncommon:{owned:0,total:0},rare:{owned:0,total:0},legendary:{owned:0,total:0}};return P.forEach(i=>{s[i.rarity].total++,this.stickerCollection[i.id]&&s[i.rarity].owned++}),{uniqueOwned:e,totalStickers:n,completionPercent:o,rarityStats:s,unopenedBoxes:this.unopenedBoxes}}getAllStickers(){return P.map(e=>({...e,owned:this.stickerCollection[e.id]||0,isNew:!this.stickerCollection[e.id],isLocked:!this.stickerCollection[e.id]}))}getStickerById(e){return P.find(n=>n.id===e)}hasPlayedToday(e){const n=new Date().toDateString();return this.lastPlayed[e]===n}markPlayedToday(e){const n=new Date().toDateString();this.lastPlayed[e]=n,this.save()}getTotalXP(){return this.totalXP}getUnopenedBoxes(){return this.unopenedBoxes}}const l=new pe;if(typeof document<"u"){const t=document.createElement("style");t.textContent=`
    * {
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      user-select: none;
    }
  `,document.head.appendChild(t)}class me{constructor(e){this.container=e,this.questions=ae(),this.currentQuestionIndex=0,this.score=0,this.answers=[],this.isComplete=!1,this.totalLevelsGained=0,this.unopenedBoxes=0,this.loadProgress(),this.render()}loadProgress(){const e=new Date().toDateString(),n=localStorage.getItem("thisOrThat_progress");if(n){const o=JSON.parse(n);if(o.date===e)return this.score=o.score||0,this.answers=o.answers||[],this.currentQuestionIndex=this.answers.length,this.isComplete=o.complete||!1,!0}return!1}saveProgress(e=!1){const n=new Date().toDateString();localStorage.setItem("thisOrThat_progress",JSON.stringify({date:n,complete:e||this.isComplete,score:this.score,answers:this.answers,currentQuestionIndex:this.currentQuestionIndex}))}handleAnswer(e){const n=this.questions[this.currentQuestionIndex],o=e===n.answer;if(this.answers.push({question:n,userChoice:e,correct:o}),o){this.score+=20;const s=l.addXP(20);s.leveledUp&&(this.totalLevelsGained+=s.levelsGained,this.unopenedBoxes=s.unopenedBoxes)}this.saveProgress(!1),this.showResult(o,n),setTimeout(()=>{this.currentQuestionIndex++,this.currentQuestionIndex>=this.questions.length?this.completeGame():this.render()},1500)}showResult(e,n){const o=this.container.querySelector(".game-content"),s=n.answer==="A"?n.optionA:n.optionB;o.innerHTML=`
      <div class="result-screen ${e?"correct":"incorrect"}">
        <div class="result-icon">${e?"✓":"✗"}</div>
        <div class="result-text">
          ${e?"Correct!":"Not quite!"}
        </div>
        <div class="correct-answer">
          I would choose: <strong>${s}</strong>
        </div>
        <div class="xp-earned">+${e?20:0} XP</div>
      </div>
    `}completeGame(){this.isComplete=!0,this.saveProgress(!0),l.markPlayedToday("thisOrThat");const e=l.getCurrentLevel(),n=l.getTotalXP();this.showCompletionScreen({currentLevel:e,totalXP:n})}showCompletionScreen(e){const n=this.score/100*100;let o=`
      <div class="completion-screen">
        <h2>Today's Results</h2>
    `;this.totalLevelsGained>0?o+=`
        <div class="completion-box completion-box-levelup">
          <div style="font-size: 2rem; margin-bottom: 15px;">${this.score} / 100 XP</div>
          <div class="score-bar">
            <div class="score-fill" style="width: ${n}%"></div>
          </div>
          <div style="font-size: 1.1rem; margin: 15px 0;">
            You got ${this.answers.filter(i=>i.correct).length} out of ${this.questions.length} correct!
          </div>
          
          <div style="font-size: 1.4rem; font-weight: 700; margin: 20px 0 10px;">🎉 LEVEL UP! 🎉</div>
          <div style="background: rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 8px; margin-top: 10px;">
            <div style="font-size: 1.1rem; margin-bottom: 8px;">
              You gained ${this.totalLevelsGained} ${this.totalLevelsGained===1?"level":"levels"}!
            </div>
            <div style="margin-bottom: 12px;">
              ${this.unopenedBoxes} mystery ${this.unopenedBoxes===1?"box":"boxes"} waiting for you!
            </div>
            <button class="open-boxes-btn" onclick="window.showMysteryBox()">
              Open Mystery ${this.unopenedBoxes===1?"Box":"Boxes"} 🎁
            </button>
          </div>
        </div>
      `:o+=`
        <div class="final-score">${this.score} / 100 XP</div>
        <div class="score-bar">
          <div class="score-fill" style="width: ${n}%"></div>
        </div>
        <div class="summary">
          You got ${this.answers.filter(i=>i.correct).length} out of ${this.questions.length} correct!
        </div>
      `,o+=`
        <div class="total-progress">
          Total XP: ${e.totalXP} 
          <span class="level-badge">Level ${e.currentLevel}</span>
        </div>
        <button class="review-btn">Review Answers</button>
      </div>
    `,this.container.querySelector(".game-content").innerHTML=o;const s=this.container.querySelector(".review-btn");s&&s.addEventListener("click",()=>this.showReview())}showReview(){const e=`
      <div class="review-screen">
        <button class="back-btn">← Back</button>
        <h2>Answer Review</h2>
        <div class="review-list">
          ${this.answers.map((o,s)=>`
            <div class="review-item ${o.correct?"correct":"incorrect"}">
              <div class="review-number">Question ${s+1}</div>
              <div class="review-question">
                <span class="choice ${o.userChoice==="A"?"selected":""}">${o.question.optionA}</span>
                <span class="vs">or</span>
                <span class="choice ${o.userChoice==="B"?"selected":""}">${o.question.optionB}</span>
              </div>
              <div class="review-result">
                ${o.correct?"✓ Correct!":`✗ I chose: ${o.question.answer==="A"?o.question.optionA:o.question.optionB}`}
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn">← Back</button>
      </div>
    `;this.container.innerHTML=e,this.container.querySelectorAll(".back-btn, .mobile-back-btn").forEach(o=>{o.addEventListener("click",()=>window.showHome())})}render(){if(this.isComplete){const n=l.getCurrentLevel(),o=l.getTotalXP();this.showCompletionScreen({currentLevel:n,totalXP:o});return}const e=this.questions[this.currentQuestionIndex];this.container.innerHTML=`
      <div class="this-or-that-game">
        <div class="game-header">
          <button class="back-btn">← Back</button>
          <h2>This or That</h2>
          <div class="progress-indicator">
            Question ${this.currentQuestionIndex+1} / ${this.questions.length}
          </div>
        </div>
        
        <div class="game-content">
          <div class="question-prompt">Which would I choose?</div>
          
          <div class="choices">
            <button class="choice-btn choice-a" data-choice="A">
              ${e.optionA}
            </button>
            
            <div class="or-divider">OR</div>
            
            <button class="choice-btn choice-b" data-choice="B">
              ${e.optionB}
            </button>
          </div>
        </div>
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn">← Back</button>
      </div>
    `,this.attachEventListeners()}attachEventListeners(){this.container.querySelectorAll(".choice-btn").forEach(o=>{o.blur();const s=i=>{i.preventDefault(),i.stopPropagation(),o.blur(),o.style.pointerEvents="none";const a=o.getAttribute("data-choice");this.handleAnswer(a)};o.addEventListener("click",s,{once:!0}),o.addEventListener("touchend",s,{once:!0})}),this.container.querySelectorAll(".back-btn, .mobile-back-btn").forEach(o=>{o.addEventListener("click",()=>window.showHome())})}}window.thisOrThat=null;function z(t){window.thisOrThat=new me(t)}function V(t){const e=new Date().toDateString(),n=localStorage.getItem("thisOrThat_progress");if(!n){t.innerHTML=`
      <div class="review-screen">
        <button class="back-btn">← Back</button>
        <h2>No Results Yet</h2>
        <p style="text-align: center; color: #666;">Play today's This or That game first!</p>
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn">← Back</button>
      </div>
    `,W(t);return}const o=JSON.parse(n);if(o.date!==e||!o.complete){const i=o.answers?.length||0;t.innerHTML=`
      <div class="review-screen">
        <button class="back-btn">← Back</button>
        <h2>${i>0?"In Progress":"No Results Yet"}</h2>
        <p style="text-align: center; color: #666;">
          ${i>0?`You've answered ${i} of 5 questions. Complete the game to review all answers!`:"Complete today's This or That game first!"}
        </p>
        ${i>0?`
          <button class="continue-btn">Continue Game</button>
        `:""}
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn">← Back</button>
      </div>
    `,W(t);const a=t.querySelector(".continue-btn");a&&a.addEventListener("click",()=>z(t));return}const s=`
    <div class="review-screen">
      <button class="back-btn">← Back</button>
      <h2>Today's This or That Review</h2>
      <div class="review-score">Score: ${o.score} / 100 XP</div>
      <div class="review-list">
        ${o.answers.map((i,a)=>`
          <div class="review-item ${i.correct?"correct":"incorrect"}">
            <div class="review-number">Question ${a+1}</div>
            <div class="review-question">
              <span class="choice ${i.userChoice==="A"?"selected":""}">${i.question.optionA}</span>
              <span class="vs">or</span>
              <span class="choice ${i.userChoice==="B"?"selected":""}">${i.question.optionB}</span>
            </div>
            <div class="review-result">
              ${i.correct?"✓ Correct!":`✗ I chose: ${i.question.answer==="A"?i.question.optionA:i.question.optionB}`}
            </div>
          </div>
        `).join("")}
      </div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn">← Back</button>
    </div>
  `;t.innerHTML=s,W(t)}function W(t){t.querySelectorAll(".back-btn, .mobile-back-btn").forEach(n=>{n.addEventListener("click",()=>window.showHome())})}window.reviewThisOrThat=function(){const t=document.getElementById("app");V(t)};window.startThisOrThatFromMenu=function(){const t=document.getElementById("app");z(t)};function ve(t){t.innerHTML=`
    <div class="wordle">
      <div class="grid">
        ${Array.from({length:6}).map(()=>`
          <div class="row">
            ${Array.from({length:5}).map(()=>'<div class="tile"></div>').join("")}
          </div>
        `).join("")}
      </div>

      <div class="keyboard">
        <div class="key-row">
          ${"QWERTYUIOP".split("").map(e=>`<button class="key">${e}</button>`).join("")}
        </div>

        <div class="key-row">
          ${"ASDFGHJKL".split("").map(e=>`<button class="key">${e}</button>`).join("")}
        </div>

        <div class="key-row">
          <button class="key special-key enter-key">ENTER</button>
          ${"ZXCVBNM".split("").map(e=>`<button class="key">${e}</button>`).join("")}
          <button class="key special-key">⌫</button>
        </div>
      </div>
    </div>
  `}const K="wordle_progress";function G(t){localStorage.setItem(K,JSON.stringify(t))}function Z(){const t=localStorage.getItem(K);return t?JSON.parse(t):null}let x=[],ee=new Set,H=!1;const J="/the-andrew-times-games/";function he(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return()=>(e+=e<<13,e^=e>>>7,e+=e<<3,e^=e>>>17,e+=e<<5,(e>>>0)/4294967296)}function we(t,e){const n=he(e),o=[...t];for(let s=o.length-1;s>0;s--){const i=Math.floor(n()*(s+1));[o[s],o[i]]=[o[i],o[s]]}return o}async function ge(){if(!H)try{const[t,e]=await Promise.all([fetch(`${J}wordle-data/answers.json`),fetch(`${J}wordle-data/allowed.json`)]);if(!t.ok||!e.ok)throw new Error("Failed to load word list files");const n=await t.json(),o=await e.json();x=n.map(i=>i.toUpperCase()),x=we(x,"wordle-v1");const s=o.map(i=>i.toUpperCase());ee=new Set([...x,...s]),H=!0}catch(t){throw console.error("❌ Failed to load word lists:",t),t}}function be(t){if(!H)return console.warn("Word lists not loaded yet"),!1;const e=t.trim().toUpperCase();return ee.has(e)}function ye(){if(!H)throw new Error("Word lists not loaded");if(x.length===0)throw new Error("No answers loaded");const t=new Date("2021-06-19"),e=new Date;t.setHours(0,0,0,0),e.setHours(0,0,0,0);const n=Math.floor((e-t)/864e5)%x.length;return x[n]}const M=5,j=6,O=100;async function fe(t){await ge();const e=ye(),n=new Date().toDateString(),o=Z(),s=o&&o.date===n&&o.answer===e&&!o.won&&o.rowsUsed<j;let i=s?o.rowsUsed:0,a=0,u=s?!1:o&&o.date===n;const y=s?[...o.guesses]:[];let g=0,m=0;t.innerHTML=`
    <div class="wordle-wrapper">

      <div class="wordle-header">
        <button class="back-btn" id="back-home">← Back</button>
        <h2>Wordle</h2>
      </div>

      <div id="wordle-root"></div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" id="mobile-back-home">← Back</button>
    </div>
  `;const v=document.getElementById("wordle-root");ve(v);const d=v.querySelectorAll(".row");s&&y.forEach((r,c)=>{const w=d[c].children;r.word.split("").forEach((B,p)=>{w[p].textContent=B,w[p].classList.add(r.result[p])})}),u&&o&&o.date===n&&(y.forEach((r,c)=>{const w=d[c].children;r.word.split("").forEach((B,p)=>{w[p].textContent=B,w[p].classList.add(r.result[p])})}),o.won?S(`🎉 You already completed today's Wordle! +${O} XP`):S(`The word was ${e}`));const h=()=>{!u&&y.length>0&&G({date:n,answer:e,won:!1,rowsUsed:i,guesses:y}),f(),window.showHome()};document.getElementById("back-home").onclick=h,document.getElementById("mobile-back-home").onclick=h;function b(r){a>=M||u||(d[i].children[a].textContent=r,a++)}function A(){a===0||u||(a--,d[i].children[a].textContent="")}function k(r){if(!u){if(r==="ENTER"){if(a!==M)return;E();return}if(r==="⌫"||r==="BACKSPACE"){A();return}/^[A-Z]$/.test(r)&&b(r)}}function E(){const r=d[i].children,c=Array.from(r).map(p=>p.textContent).join("");if(!be(c)){S("⌫ Not in word list");return}const w=e.split(""),B=Array(M).fill("absent");for(let p=0;p<M;p++)c[p]===w[p]&&(r[p].classList.add("correct"),B[p]="correct",w[p]=null);for(let p=0;p<M;p++){if(B[p]==="correct")continue;const _=w.indexOf(c[p]);_!==-1?(r[p].classList.add("present"),B[p]="present",w[_]=null):r[p].classList.add("absent")}if(y.push({word:c,result:B}),G({date:n,answer:e,won:c===e,rowsUsed:i+1,guesses:y}),c===e){R(!0);return}i++,a=0,i===j&&R(!1)}function R(r){if(u=!0,l.markPlayedToday("wordle"),r){const c=l.addXP(O);c.leveledUp?(g=c.levelsGained,m=c.unopenedBoxes,T()):S(`🎉 You got it! +${O} XP`)}else S(`The word was ${e}`);G({date:n,answer:e,won:r,rowsUsed:y.length,guesses:y})}function T(){const r=v.querySelector(".wordle-message");r&&r.remove();const c=document.createElement("div");c.className="wordle-message level-up-message",c.innerHTML=`
      <div style="font-size: 1.3rem; margin-bottom: 10px;">🎉 You got it! +${O} XP</div>
      <div style="font-size: 1.4rem; font-weight: 700; margin: 15px 0 10px;">🎉 LEVEL UP! 🎉</div>
      <div style="background: rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 8px; margin-top: 10px;">
        <div style="font-size: 1.1rem; margin-bottom: 8px;">
          You gained ${g} ${g===1?"level":"levels"}!
        </div>
        <div style="margin-bottom: 12px;">
          ${m} mystery ${m===1?"box":"boxes"} waiting for you!
        </div>
        <button class="open-boxes-btn" onclick="window.showMysteryBox()">
          Open Mystery ${m===1?"Box":"Boxes"} 🎁
        </button>
      </div>
    `,v.appendChild(c)}function S(r){const c=v.querySelector(".wordle-message");c&&c.remove();const w=document.createElement("div");w.className="wordle-message",w.textContent=r,v.appendChild(w)}function L(r){k(r.key.toUpperCase())}window.addEventListener("keydown",L),v.querySelectorAll(".key").forEach(r=>{r.addEventListener("click",()=>k(r.textContent))});function f(){window.removeEventListener("keydown",L)}}function Be(t){const e=new Date().toDateString(),n=Z();if(!n||n.date!==e){t.innerHTML=`
      <div class="review-screen">
        <button class="back-btn" onclick="showHome()">← Back</button>
        <h2>No Results Yet</h2>
        <p style="text-align:center; color:#666;">
          Play today’s Wordle first!
        </p>
      </div>
    `;return}t.innerHTML=`
    <div class="review-screen">
      <button class="back-btn" onclick="showHome()">← Back</button>

      <h2>Today’s Wordle</h2>

      <div class="review-summary ${n.won?"won":"lost"}">
        ${n.won?`🎉 Solved in ${n.rowsUsed} / 6 guesses`:"😢 Not solved today"}
      </div>

      <div class="wordle-review-grid">
        ${(n.guesses||[]).map(o=>`
          <div class="review-row">
            ${o.word.split("").map((s,i)=>`
              <div class="tile ${o.result[i]}">
                ${s}
              </div>
            `).join("")}
          </div>
        `).join("")}
      </div>

      <div class="review-answer">
        Answer: <strong>${n.answer}</strong>
      </div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `}const D=[{category:"My Favorite 80s Rock Bands",answers:["the smiths","talking heads","misfits","queen"]},{category:"My Four Favorite Beers",answers:["guinness","blue moon","coors light","michelob ultra"]},{category:"Madison's Food Combos",answers:["ketchup and rice","orange juice and popcorn","weenies and toast","jam and sausage"]},{category:"My Spotify Wrapped Artists",answers:["radiohead","nat king cole","bobby darin","a tribe called quest"]},{category:"The Four Best Cities I Have Visited",answers:["Chicago","Charleston","St. Augustine","Anna Maria"]},{category:"My Favorite SNL Cast Members",answers:["Tim Robinson","Fred Armisen","Mike Myers","Norm Macdonald"]},{category:"Art I Would Get A Tattoo Of (Music, Movies, etc.)",answers:["Bladerunner","Rage Against The Machine","Radiohead","Tool"]},{category:"Things I Would Put In My Butt If I Had To",answers:["Marshmallow","M&Ms","Bar of Soap","Finger"]},{category:"Jobs I'd Try For A Month",answers:["Police Officer","Baker","Fisherman","Mechanic"]},{category:"Best Xbox Games I've Played",answers:["Doom Eternal","Overwatch","South Park: The Fractured But Whole","Call of Duty: Black Ops 2"]},{category:"Things I'd Buy If I Won The Lottery",answers:["Suit","Ear Rings","Radiohead Tickets","Porsche"]},{category:"Male Dog Names I Like",answers:["James","Winston","Peter","Ryan"]},{category:"Favorite Historical Civilizations",answers:["Greeks","Egyptians","Mongols","Anglo-Saxons"]},{category:"Worst Celebrities (Not Criminal)",answers:["James Corden","Ellen DeGeneres","Drake","Adam Sandler"]},{category:"Bugs I Would Like To Be",answers:["Bee","Dragonfly","Caterpillar","Centipede"]},{category:"Funny Road Names Near Madison",answers:["pickle buddy court","honey girl lane","ruby golightly drive","apple butter drive"]},{category:"Food Items That Give You The Worst Breath",answers:["Garlic","Onion","Lemonade","Candy"]},{category:"Best 90s Female Singers",answers:["Bjork","Fiona Apple","Janet Jackson","Lauryn Hill"]},{category:"Best Reality TV Shows",answers:["Love Is Blind","Love On The Spectrum","Big Brother","To Catch A Predator"]},{category:"Celebrities I Have Been Told I Look Like",answers:["Josh Allen","Markiplier","Josheph Gordon-Levitt","Mark Wahlberg"]},{category:"Show Hosts I Enjoy(ed)",answers:["Conan O'Brien","Tom Bergeron","Chris Harrison","Steve Harvey"]},{category:"Best Roller Coasters I've Been On",answers:["Fury 325","Mako","The Hulk","Dueling Dragons"]},{category:"Childhood Games I Enjoyed",answers:["Webkinz","Mariokart","Puzzle Quest","Wolf Of The Battlefield: Commando 3"]},{category:"Favorite Simpson Characters",answers:["Homer Simpson","Ned Flanders","Smithers","Principal Skinner"]},{category:"Restaurants I Have Eaten At The Most In My Life",answers:["Chickfila","Moes","Chipotle","Wendys"]},{category:"Video Games I Wish I Liked More",answers:["The Witcher 3","Mortal Kombat","Cuphead","Grand Theft Auto V"]},{category:"Superheroes I'd Like To Be",answers:["Batman","Spiderman","Cyclops","Doctor Strange"]},{category:"Cereal Mascots I Could Beat In A Fight",answers:["Lucky","Buzz","Toucan Sam","Trix Rabbit"]},{category:"Favorite Poker Slang",answers:["Muck","Bullets","Wheel","Donk"]},{category:"Breeds of Dogs I Like",answers:["English Labrador","Corgi","Dachshund","Cattle Dog"]}],te="name_four_progress";function ke(t){localStorage.setItem(te,JSON.stringify(t))}function oe(){const t=localStorage.getItem(te);return t?JSON.parse(t):null}const F=25;function Ae(){const t=new Date("2025-01-01"),e=new Date;t.setHours(0,0,0,0),e.setHours(0,0,0,0);const n=Math.floor((e-t)/(1e3*60*60*24));return D[n%D.length]}function Se(t){const e=new Date().toDateString(),n=Ae(),o=n.answers.map(f=>f.toUpperCase()),s=oe(),i=new Set(s?.date===e?s.found||[]:[]),a=new Set(s?.date===e?s.revealed||[]:[]);let u=s?.date===e&&s.guessCount||0,y=s?.date===e&&s.xpAwarded||0,g=s?.date===e&&s.completed,m=0,v=0;t.innerHTML=`
    <div class="name-four">
      <!-- DESKTOP BACK BUTTON -->
      <button class="back-btn" id="back-home">← Back</button>

      <h2>Name Four</h2>

      <div class="category">
        Category: <strong>${n.category}</strong>
      </div>

      <div class="answer-grid" id="answer-grid"></div>

      <form id="guess-form" class="guess-form">
        <input
          id="guess-input"
          type="text"
          placeholder="Type a guess..."
          autocomplete="off"
          ${g?"disabled":""}
        />
        <button type="submit" ${g?"disabled":""}>
          Submit
        </button>
      </form>

      <div id="feedback-message" class="feedback-message"></div>
      <div id="completion-message"></div>
      <div id="level-up-message"></div>
    </div>

    <!-- MOBILE BACK BAR -->
    <div class="mobile-back-bar">
      <button class="mobile-back-btn" id="mobile-back-home">← Back</button>
    </div>
  `;const d=document.getElementById("guess-input"),h=document.getElementById("answer-grid"),b=document.getElementById("completion-message");document.getElementById("level-up-message");const A=document.getElementById("feedback-message");document.getElementById("back-home").onclick=()=>window.showHome(),document.getElementById("mobile-back-home").onclick=()=>window.showHome(),k(),g&&L(),document.getElementById("guess-form").onsubmit=f=>{if(f.preventDefault(),g)return;const r=d.value.trim();if(!r)return;const c=r.toUpperCase();if(d.value="",u++,i.has(c)||a.has(c)){T();return}if(o.includes(c)){i.add(c);const w=R();w.leveledUp&&(m+=w.levelsGained,v=w.unopenedBoxes),E(c,!0),setTimeout(()=>{k(),A.innerHTML="",i.size+a.size===4&&S()},1500)}else E(c,!1),setTimeout(()=>{A.innerHTML=""},1500);T()};function k(){h.innerHTML="",o.forEach(f=>{const r=i.has(f)||a.has(f),c=document.createElement("div");c.className=`answer-box ${r?"solved":""}`;const w=document.createElement("div");if(w.className="answer-text",w.textContent=r?f:f.replace(/[A-Z]/gi,"_"),c.appendChild(w),!r&&!g){const B=document.createElement("button");B.className="reveal-single-btn",B.textContent="Reveal",B.onclick=()=>{a.add(f),k(),i.size+a.size===4&&S(),T()},c.appendChild(B)}h.appendChild(c)})}function E(f,r){A.innerHTML=`
      <div class="feedback-display ${r?"correct":"incorrect"}">
        <div class="feedback-icon">${r?"✓":"✗"}</div>
        <div class="feedback-text">
          ${r?"Correct!":"Not quite!"}
        </div>
        <div class="feedback-answer">
          ${r?f:"Try again!"}
        </div>
        <div class="xp-earned">+${r?F:0} XP</div>
      </div>
    `}function R(){return y+=F,l.addXP(F)}function T(f=!1){ke({date:e,found:[...i],revealed:[...a],completed:f||g,guessCount:u,xpAwarded:y})}function S(){g=!0,l.markPlayedToday("name-four"),d.disabled=!0,document.querySelector("#guess-form button").disabled=!0,T(!0),L()}function L(){m>0?b.innerHTML=`
        <div class="completion completion-with-levelup">
          <div style="font-size: 1.3rem; margin-bottom: 10px;">🎉 Puzzle complete</div>
          <div style="font-size: 1.2rem; font-weight: bold; margin-bottom: 8px;">+${y} XP</div>
          <div style="margin-bottom: 15px;">Total guesses: <strong>${u}</strong></div>
          
          <div style="font-size: 1.4rem; font-weight: 700; margin: 15px 0 10px;">🎉 LEVEL UP! 🎉</div>
          <div style="background: rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 8px; margin-top: 10px;">
            <div style="font-size: 1.1rem; margin-bottom: 8px;">
              You gained ${m} ${m===1?"level":"levels"}!
            </div>
            <div style="margin-bottom: 12px;">
              ${v} mystery ${v===1?"box":"boxes"} waiting for you!
            </div>
            <button class="open-boxes-btn" onclick="window.showMysteryBox()">
              Open Mystery ${v===1?"Box":"Boxes"} 🎁
            </button>
          </div>
          
          <div style="margin-top: 15px;">Come back tomorrow for a new category</div>
        </div>
      `:b.innerHTML=`
        <div class="completion">
          🎉 Puzzle complete
          <div class="xp">+${y} XP</div>
          <p>Total guesses: <strong>${u}</strong></p>
          <p>Come back tomorrow for a new category</p>
        </div>
      `}}function xe(){const t=new Date("2025-01-01"),e=new Date;t.setHours(0,0,0,0),e.setHours(0,0,0,0);const n=Math.floor((e-t)/(1e3*60*60*24));return D[n%D.length]}function Te(t){const e=new Date().toDateString(),n=xe(),o=oe();if(!o||o.date!==e){t.innerHTML=`
      <div class="name-four-review">
        <button class="back-btn" onclick="showHome()">← Back</button>

        <div class="review-card">
          <h2>Today's Name Four Review</h2>
          <p style="text-align: center; color: #6b7280;">
            No completed game to review today.
          </p>
        </div>
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn" onclick="showHome()">← Back</button>
      </div>
    `;return}const s=new Set(o.found||[]),i=new Set(o.revealed||[]);t.innerHTML=`
    <div class="name-four-review">
      <button class="back-btn" onclick="showHome()">← Back</button>

      <div class="review-card">
        <h2>Today's Name Four Review</h2>

        <div class="category">
          Category: <strong>${n.category}</strong>
        </div>

        <div class="answers">
          ${n.answers.map(a=>{const u=a.toUpperCase();return s.has(u)?`
                <div class="review-answer guessed">
                  ${u}
                </div>
              `:i.has(u)?`
                <div class="review-answer revealed">
                  ${u}
                  <div class="review-note">Revealed</div>
                </div>
              `:`
              <div class="review-answer missed">
                ${u.replace(/[A-Z]/gi,"_")}
                <div class="review-note">Missed</div>
              </div>
            `}).join("")}
        </div>

        <div class="stats">
          Total guesses made:
          <strong>${o.guessCount??0}</strong>
        </div>
      </div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `}function Ce(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function Pe(t,e,n,o){for(let a=0;a<9;a++)if(t[e][a]===o||t[a][n]===o)return!1;const s=Math.floor(e/3)*3,i=Math.floor(n/3)*3;for(let a=0;a<3;a++)for(let u=0;u<3;u++)if(t[s+a][i+u]===o)return!1;return!0}function ne(t){for(let e=0;e<9;e++)for(let n=0;n<9;n++)if(t[e][n]===0){for(const o of Ce([1,2,3,4,5,6,7,8,9]))if(Pe(t,e,n,o)){if(t[e][n]=o,ne(t))return!0;t[e][n]=0}return!1}return!0}function $e(t,e=45){const n=t.map(s=>[...s]);let o=0;for(;o<e;){const s=Math.floor(Math.random()*9),i=Math.floor(Math.random()*9);n[s][i]!==0&&(n[s][i]=0,o++)}return n}function Le(t=45){const e=Array.from({length:9},()=>Array(9).fill(0));return ne(e),{solution:e,puzzle:$e(e,t)}}const se="sudoku_progress";function Q(t){localStorage.setItem(se,JSON.stringify(t))}function ie(){const t=localStorage.getItem(se);return t?JSON.parse(t):null}function Me(t){const e=new Date().toDateString();let n=ie(),o,s,i;if(n&&n.date===e)({puzzle:o,solution:s,grid:i}=n);else{const g=Le(45);o=g.puzzle,s=g.solution,i=o.map(m=>[...m]),Q({date:e,puzzle:o,solution:s,grid:i})}function a(){t.innerHTML=`
    <div class="sudoku">
      <button class="back-btn" onclick="showHome()">← Back</button>
      <h2>Sudoku</h2>

      <div class="sudoku-grid">
        ${i.map((m,v)=>m.map((d,h)=>{const b=o[v][h]!==0;return`
              <input
                type="text"
                maxlength="1"
                class="cell ${b?"fixed":""}"
                data-r="${v}"
                data-c="${h}"
                value="${d||""}"
                ${b?"disabled":""}
              />
            `}).join("")).join("")}
      </div>

      <button class="check-btn" id="checkSudokuBtn">
        Check
      </button>

      <div id="sudoku-feedback" class="sudoku-feedback"></div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `,t.querySelectorAll(".cell").forEach(m=>{m.addEventListener("input",()=>{const v=+m.dataset.r,d=+m.dataset.c,h=+m.value;h>=1&&h<=9?i[v][d]=h:(i[v][d]=0,m.value=""),Q({date:e,puzzle:o,solution:s,grid:i})})}),document.getElementById("checkSudokuBtn").addEventListener("click",()=>{y()})}function u(g,m=!1){const v=document.getElementById("sudoku-feedback");v&&(v.innerHTML=`
    <div class="sudoku-feedback-box ${m?"success":"error"}">
      ${g}
    </div>
  `,setTimeout(()=>{v.innerHTML=""},1500))}function y(){const g=d=>{const h=new Set(d);if(h.size!==9)return!1;for(let b of h)if(b<1||b>9)return!1;return!0};for(let d=0;d<9;d++)if(!g(i[d]))return u("Win condition not met"),!1;for(let d=0;d<9;d++){const h=[];for(let b=0;b<9;b++)h.push(i[b][d]);if(!g(h))return u("Win condition not met"),!1}for(let d=0;d<3;d++)for(let h=0;h<3;h++){const b=[];for(let A=0;A<3;A++)for(let k=0;k<3;k++)b.push(i[d*3+A][h*3+k]);if(!g(b))return u("Win condition not met"),!1}const m="sudoku";return l.hasPlayedToday(m)||(l.addXP(100),l.markPlayedToday(m)),localStorage.setItem("sudokuReview",JSON.stringify({date:new Date().toDateString(),grid:i})),u("🎉 Puzzle complete!",!0),!0}a()}function Ee(t){const e=ie(),n=new Date().toDateString();if(!e||e.date!==n){t.innerHTML=`
      <div class="sudoku-review">
        <div class="header">
          <button class="back-btn" onclick="showHome()">← Back</button>
          <h2>Sudoku Review</h2>
        </div>
        <p style="text-align:center;color:#6b7280;">
          No Sudoku played today.
        </p>
      </div>

      <div class="mobile-back-bar">
        <button class="mobile-back-btn" onclick="showHome()">← Back</button>
      </div>
    `;return}const{grid:o}=e;t.innerHTML=`
      <div class="sudoku-review">
        <div class="header">
          <button class="back-btn" onclick="showHome()">← Back</button>
          <h2>Sudoku Review</h2>
        </div>

      <div class="sudoku-grid review">
        ${o.flat().map(s=>`
          <div class="cell review-cell">${s}</div>
        `).join("")}
      </div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `}const $=document.getElementById("app");function q(){const t=l.getCurrentLevel(),e=l.getTotalXP(),n=l.getXPToNextLevel(),o=l.getXPProgressInLevel(),s=l.getUnopenedBoxes(),i=l.getCollectionStats(),a=s>0&&i.uniqueOwned===0;$.innerHTML=`
    <div class="home-screen">
      <header class="app-header">
        <h1>The Andrew Times Games</h1>
        
        ${a?`
          <div class="welcome-message">
            <div class="welcome-icon">
              <img src="./misc/welcome.png" alt="Welcome" />
            </div>
            <h2>Welcome!</h2>
            <p>Thanks for visiting! You've earned a free mystery box to get you started. Open it to receive your first sticker!</p>
          </div>
        `:""}

        <div class="progress-summary">
          <div class="level-info">
            <span class="level">Level ${t}</span>
            <span class="xp">${e} XP</span>
          </div>

          <div class="xp-section">
            <div class="xp-bar">
              <div class="xp-fill" style="width: ${o/300*100}%"></div>
            </div>
            <div class="xp-text">${n} XP to Level ${t+1}</div>
          </div>

          <div class="collection-summary">
            <div class="collection-icon">🎁</div>
            <div class="collection-info">
              <div class="collection-progress">${i.uniqueOwned}/${i.totalStickers} Stickers</div>
              <div class="collection-percent">${i.completionPercent}% Complete</div>
            </div>
          </div>

          ${s>0?`
            <button class="mystery-box-alert" onclick="showMysteryBox()">
              🎁 ${s} Mystery ${s===1?"Box":"Boxes"} Available!
            </button>
          `:""}
        </div>
      </header>

      <div class="game-cards">
        <!-- THIS OR THAT -->
        <div class="game-card ${l.hasPlayedToday("thisOrThat")?"completed":""}"
             onclick="handleGameClick('thisOrThat')">
          <div class="game-icon">
            <img src="./game-icons/this_or_that_192.png" alt="This or That" />
          </div>
          <h3>This or That</h3>
          <p>Guess what I would choose</p>
          <div class="game-xp">Up to 100 XP</div>

          ${l.hasPlayedToday("thisOrThat")?'<div class="completed-badge">✓ Completed — Click to Review</div>':'<div class="play-badge">Play Now</div>'}
        </div>

        <!-- WORDLE -->
        <div class="game-card ${l.hasPlayedToday("wordle")?"completed":""}"
             onclick="handleGameClick('wordle')">
          <div class="game-icon">
            <img src="./game-icons/wordle_clone_192.png" alt="Wordle" />
          </div>
          <h3>Wordle</h3>
          <p>Guess the secret word</p>
          <div class="game-xp">100 XP</div>

          ${l.hasPlayedToday("wordle")?'<div class="completed-badge">✓ Completed — Click to Review</div>':'<div class="play-badge">Play Now</div>'}
        </div>

        <!-- NAME FOUR -->
        <div class="game-card ${l.hasPlayedToday("name-four")?"completed":""}"
             onclick="handleGameClick('name-four')">
          <div class="game-icon">
            <img src="./game-icons/name_four_192.png" alt="Name Four" />
          </div>
          <h3>Name Four</h3>
          <p>Find the four that belong together</p>
          <div class="game-xp">Up to 100 XP</div>

          ${l.hasPlayedToday("name-four")?'<div class="completed-badge">✓ Completed — Click to Review</div>':'<div class="play-badge">Play Now</div>'}
        </div>

        <!-- SUDOKU -->
        <div class="game-card ${l.hasPlayedToday("sudoku")?"completed":""}"
            onclick="handleGameClick('sudoku')">
          <div class="game-icon">
            <img src="./game-icons/sudoku_192.png" alt="Sudoku" />
          </div>
          <h3>Sudoku</h3>
          <p>Complete the daily puzzle</p>
          <div class="game-xp">100 XP</div>

          ${l.hasPlayedToday("sudoku")?'<div class="completed-badge">✓ Completed — Click to Review</div>':'<div class="play-badge">Play Now</div>'}
        </div>
      </div>

      <button class="collection-btn" onclick="showCollection()">
        View Sticker Collection
      </button>
    </div>
  `}function Re(){$.innerHTML=`
    <div class="mystery-box-screen">
      <button class="back-btn" onclick="showHome()">← Back</button>
      
      <div class="mystery-box-container">
        <h2>Mystery Box</h2>
        <p class="mystery-subtitle">Open a box to reveal a sticker!</p>
        
        <div class="box-animation-area">
          <div class="mystery-box" id="mysteryBox" onclick="openBox()">
            <div class="box-lid">🎁</div>
            <div class="box-body"></div>
          </div>
        </div>

        <div class="boxes-remaining">
          ${l.getUnopenedBoxes()} ${l.getUnopenedBoxes()===1?"box":"boxes"} remaining
        </div>

        <button class="open-box-btn" onclick="openBox()">
          Open Box
        </button>
      </div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `}function Ie(){const t=l.openMysteryBox();if(!t){q();return}const{sticker:e,isDuplicate:n,bonusXP:o,totalOwned:s}=t;document.getElementById("mysteryBox").classList.add("opening"),setTimeout(()=>{Oe(e,n,o,s)},800)}function Oe(t,e,n,o){const s=C[t.rarity],i=X[t.rarity],a=l.getUnopenedBoxes();$.innerHTML=`
    <div class="sticker-reveal-screen">
      <div class="reveal-container">
        <div class="reveal-card" style="border-color: ${s}">
          <div class="reveal-rarity" style="color: ${s}">
            ${i}
          </div>
          
          <div class="reveal-sticker">
            <img src="${t.image}" alt="${t.name}" 
                 onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><rect width=%22200%22 height=%22200%22 fill=%22${s}%22/><text x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2248%22 fill=%22white%22>${t.name.charAt(0)}</text></svg>'" />
          </div>
          
          <div class="reveal-name">${t.name}</div>
          
          ${e?`
            <div class="duplicate-badge">
              <span class="duplicate-icon">×${o}</span>
              <span class="duplicate-text">Duplicate! +${n} Bonus XP</span>
            </div>
          `:`
            <div class="new-badge">🌟 NEW!</div>
          `}
        </div>

        <div class="reveal-actions">
          ${a>0?`
            <button class="reveal-btn primary" onclick="showMysteryBox()">
              Open Another (${a} left)
            </button>
          `:""}
          
          <button class="reveal-btn ${a>0?"":"primary"}" onclick="showCollection()">
            View Collection
          </button>
          
          <button class="reveal-btn" onclick="showHome()">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  `,setTimeout(()=>{document.querySelector(".reveal-card").classList.add("animate-in")},50)}function He(){const t=l.getAllStickers(),e=l.getCollectionStats(),n=l.getUnopenedBoxes(),o={legendary:t.filter(s=>s.rarity==="legendary"),rare:t.filter(s=>s.rarity==="rare"),uncommon:t.filter(s=>s.rarity==="uncommon"),common:t.filter(s=>s.rarity==="common")};$.innerHTML=`
    <div class="collection-screen">
      <button class="back-btn" onclick="showHome()">← Back</button>
      
      <div class="collection-header">
        <h2>Sticker Collection</h2>
        <div class="collection-stats">
          <div class="stat">
            <span class="stat-value">${e.uniqueOwned}/${e.totalStickers}</span>
            <span class="stat-label">Collected</span>
          </div>
          <div class="stat">
            <span class="stat-value">${e.completionPercent}%</span>
            <span class="stat-label">Complete</span>
          </div>
          ${n>0?`
            <button class="stat open-boxes-btn" onclick="showMysteryBox()">
              🎁 ${n} ${n===1?"Box":"Boxes"}
            </button>
          `:""}
        </div>
      </div>

      <div class="rarity-breakdown">
        ${Object.entries(e.rarityStats).map(([s,i])=>`
          <div class="rarity-stat" style="border-left: 3px solid ${C[s]}">
            <span class="rarity-name" style="color: ${C[s]}">
              ${X[s]}
            </span>
            <span class="rarity-count">${i.owned}/${i.total}</span>
          </div>
        `).join("")}
      </div>

      ${Object.entries(o).map(([s,i])=>`
        <div class="sticker-section">
          <h3 class="section-title" style="color: ${C[s]}">
            ${X[s]} (${i.filter(a=>a.owned>0).length}/${i.length})
          </h3>
          <div class="sticker-grid">
            ${i.map(a=>`
              <div class="sticker-card ${a.owned>0?"owned":"locked"}" 
                   style="border-color: ${C[s]}">
                ${a.owned>0?`
                  <img src="${a.image}" alt="${a.name}"
                       onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect width=%22100%22 height=%22100%22 fill=%22${C[s]}%22/><text x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2232%22 fill=%22white%22>${a.name.charAt(0)}</text></svg>'" />
                  <div class="sticker-name">${a.name}</div>
                  ${a.owned>1?`<div class="sticker-count">×${a.owned}</div>`:""}
                `:`
                  <div class="sticker-locked">🔒</div>
                  <div class="sticker-name">${a.name}</div>
                `}
              </div>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `}async function De(t){l.hasPlayedToday(t)?We(t):await Ne(t)}async function Ne(t){$.innerHTML=`
    <div id="game-container"></div>
    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `;const e=document.getElementById("game-container");t==="thisOrThat"&&z(e),t==="wordle"&&await fe(e),t==="name-four"&&Se(e),t==="sudoku"&&Me(e)}function We(t){$.innerHTML=`
    <div id="game-container"></div>
    <div class="mobile-back-bar">
      <button class="mobile-back-btn" onclick="showHome()">← Back</button>
    </div>
  `;const e=document.getElementById("game-container");t==="thisOrThat"&&V(e),t==="wordle"&&Be(e),t==="name-four"&&Te(e),t==="sudoku"&&Ee(e)}window.showHome=q;window.showCollection=He;window.showMysteryBox=Re;window.openBox=Ie;window.handleGameClick=De;q();
