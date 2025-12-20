// src/games/name-four/index.js

import './style.css';
import { progression } from '../../utils/progression.js';
import { DAILY_NAME_FOUR } from './data.js';
import {
  loadNameFourProgress,
  saveNameFourProgress
} from './storage.js';

const XP_REWARD = 75;

export function startNameFour(container) {
  const today = new Date().toDateString();
  const todayKey = new Date().toISOString().slice(0, 10);
  const todayData = DAILY_NAME_FOUR[todayKey];

  if (!todayData) {
    container.innerHTML = `
      <div class="name-four">
        <button class="back-btn" onclick="showHome()">← Back</button>
        <h2>Name Four</h2>
        <p>No puzzle available today.</p>
      </div>
    `;
    return;
  }

  const answers = todayData.answers.map(a => a.toUpperCase());

  // Load saved progress
  const saved = loadNameFourProgress();
  const found = new Set(
    saved?.date === today ? saved.found : []
  );
  const completedToday = saved?.date === today && saved.completed;

  const guesses = [];

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

      <div class="guesses">
        <h4>Guesses</h4>
        <ul id="guess-list"></ul>
      </div>

      <div id="completion-message"></div>
    </div>
  `;

  const input = document.getElementById('guess-input');
  const foundList = document.getElementById('found-list');
  const guessList = document.getElementById('guess-list');
  const foundCount = document.getElementById('found-count');
  const completionMessage = document.getElementById('completion-message');

  document.getElementById('back-home').onclick = () => {
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

    // Already found
    if (found.has(guess)) return;

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

    // Wrong guess (avoid duplicates)
    if (!guesses.includes(guess)) {
      guesses.unshift(guess);
      renderGuesses();
    }
  };

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

  function renderGuesses() {
    guessList.innerHTML = '';

    guesses.slice(0, 10).forEach(word => {
      const li = document.createElement('li');
      li.textContent = word;
      guessList.appendChild(li);
    });
  }

  function persistProgress(completed) {
    saveNameFourProgress({
      date: today,
      found: [...found],
      completed
    });
  }

  function finishGame() {
    persistProgress(true);

    progression.addXP(XP_REWARD);
    progression.markPlayedToday('name-four');

    input.disabled = true;
    document.querySelector('#guess-form button').disabled = true;

    showCompletedMessage();
  }

  function showCompletedMessage() {
    completionMessage.innerHTML = `
      <div class="completion">
        🎉 You got all four!
        <div class="xp">+${XP_REWARD} XP</div>
        <p>Come back tomorrow for a new category</p>
      </div>
    `;
  }
}
