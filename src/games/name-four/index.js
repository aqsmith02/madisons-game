// src/games/name-four/index.js

import './style.css';
import { progression } from '../../utils/progression.js';
import { NAME_FOUR_PUZZLES } from './data.js';
import {
  loadNameFourProgress,
  saveNameFourProgress
} from './storage.js';

const XP_REWARD = 100;

/* =========================
   DAILY ROTATION
========================= */
function getTodayPuzzle() {
  const startDate = new Date('2025-01-01');
  const today = new Date();

  startDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffDays = Math.floor(
    (today - startDate) / (1000 * 60 * 60 * 24)
  );

  return NAME_FOUR_PUZZLES[
    diffDays % NAME_FOUR_PUZZLES.length
  ];
}

/* =========================
   GAME START
========================= */
export function startNameFour(container) {
  const today = new Date().toDateString();
  const todayData = getTodayPuzzle();
  const answers = todayData.answers.map(a => a.toUpperCase());

  // Load saved progress
  const saved = loadNameFourProgress();
  const found = new Set(
    saved?.date === today ? saved.found : []
  );
  const completedToday = saved?.date === today && saved.completed;
  let guessCount = saved?.date === today ? saved.guessCount || 0 : 0;

  container.innerHTML = `
    <div class="name-four">
      <button class="back-btn" id="back-home">← Back</button>

      <h2>Name Four</h2>
      <div class="category">
        Category: <strong>${todayData.category}</strong>
      </div>

      <form id="guess-form" class="guess-form">
        <input
          id="guess-input"
          type="text"
          placeholder="Type a guess..."
          autocomplete="off"
          ${completedToday ? 'disabled' : ''}
        />
        <button type="submit" ${completedToday ? 'disabled' : ''}>
          Submit
        </button>
      </form>

      <div class="found">
        Found (<span id="found-count">0</span> / 4)
        <ul id="found-list"></ul>
      </div>

      <div id="completion-message"></div>
    </div>

    <div class="mobile-back-bar">
      <button class="mobile-back-btn" id="mobile-back-home">← Back</button>
    </div>
  `;

  const input = document.getElementById('guess-input');
  const foundList = document.getElementById('found-list');
  const foundCount = document.getElementById('found-count');
  const completionMessage = document.getElementById('completion-message');

  document.getElementById('back-home').onclick = () => {
    window.showHome();
  };

  document.getElementById('mobile-back-home').onclick = () => {
    window.showHome();
  };

  renderFound();

  if (completedToday) {
    showCompletedMessage();
  }

  document.getElementById('guess-form').onsubmit = e => {
    e.preventDefault();
    if (completedToday) return;

    const raw = input.value.trim();
    if (!raw) return;

    const guess = raw.toUpperCase();
    input.value = '';
    guessCount++;

    // Already found
    if (found.has(guess)) {
      persistProgress(false);
      return;
    }

    // Correct guess
    if (answers.includes(guess)) {
      found.add(guess);
      persistProgress(false);
      renderFound();

      if (found.size === 4) {
        finishGame();
      }
      return;
    }

    // Wrong guess
    persistProgress(false);
  };

  /* =========================
     RENDERING
  ========================= */
  function renderFound() {
    foundList.innerHTML = '';
    foundCount.textContent = found.size;

    [...found].forEach(word => {
      const li = document.createElement('li');
      li.textContent = word;
      li.className = 'found-item';
      foundList.appendChild(li);
    });
  }

  /* =========================
     PROGRESS
  ========================= */
  function persistProgress(completed) {
    saveNameFourProgress({
      date: today,
      found: [...found],
      completed,
      guessCount
    });
  }

  function finishGame() {
    persistProgress(true);

    const result = progression.addXP(XP_REWARD);
    progression.markPlayedToday('name-four');

    input.disabled = true;
    document.querySelector('#guess-form button').disabled = true;

    showCompletedMessage(result);
  }

  function showCompletedMessage(result) {
    let message = `
      <div class="completion">
        🎉 You got all four!
        <div class="xp">+${XP_REWARD} XP</div>
        <p>Solved in <strong>${guessCount}</strong> guesses</p>
    `;

    if (result && result.leveledUp && result.newRewards.length > 0) {
      message += `
        <div style="margin-top: 20px; padding: 15px; background: linear-gradient(135deg, #5f8f7a 0%, #7fb3a1 100%); color: white; border-radius: 8px;">
          <div style="font-size: 1.2rem; font-weight: bold; margin-bottom: 10px;">🎉 LEVEL UP! 🎉</div>
          ${result.newRewards.map(reward => `
            <div style="margin-top: 10px;">
              <strong>${reward.title}</strong>
              <div style="font-size: 0.9rem; opacity: 0.9;">${reward.description}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    message += `
        <p>Come back tomorrow for a new category</p>
      </div>
    `;

    completionMessage.innerHTML = message;
  }
}