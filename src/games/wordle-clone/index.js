// src/games/wordle-clone/index.js

import './style.css';
import { renderWordleGrid } from './render.js';
import { progression } from '../../utils/progression.js';
import { saveWordleProgress } from './storage.js';
import {
  loadWordLists,
  getDailyAnswer,
  isValidGuess
} from './words.js';

const WORD_LENGTH = 5;
const MAX_ROWS = 6;
const WIN_XP = 100;

export async function startWordle(container) {
  // 🔑 ENSURE WORD LISTS ARE LOADED
  await loadWordLists();

  const ANSWER = getDailyAnswer();

  let currentRow = 0;
  let currentCol = 0;
  let gameOver = false;
  const guesses = [];

  container.innerHTML = `
    <div class="wordle-wrapper">
      <button class="back-btn" id="back-home">← Back</button>
      <div id="wordle-root"></div>
    </div>
  `;

  const root = document.getElementById('wordle-root');
  renderWordleGrid(root);
  const rows = root.querySelectorAll('.row');

  document.getElementById('back-home').onclick = () => {
    cleanup();
    window.showHome();
  };

  /* =========================
     INPUT
  ========================= */
  function addLetter(letter) {
    if (currentCol >= WORD_LENGTH || gameOver) return;
    rows[currentRow].children[currentCol].textContent = letter;
    currentCol++;
  }

  function removeLetter() {
    if (currentCol === 0 || gameOver) return;
    currentCol--;
    rows[currentRow].children[currentCol].textContent = '';
  }

  function handleKey(key) {
    if (gameOver) return;

    if (key === 'ENTER') {
      if (currentCol !== WORD_LENGTH) return;
      submitGuess();
      return;
    }

    if (key === '⌫' || key === 'BACKSPACE') {
      removeLetter();
      return;
    }

    if (/^[A-Z]$/.test(key)) {
      addLetter(key);
    }
  }

  /* =========================
     GAME LOGIC
  ========================= */
  function submitGuess() {
    const tiles = rows[currentRow].children;
    const guess = Array.from(tiles).map(t => t.textContent).join('');

    if (!isValidGuess(guess)) {
      showMessage('❌ Not in word list');
      return;
    }

    const answerLetters = ANSWER.split('');
    const result = Array(WORD_LENGTH).fill('absent');

    // Pass 1: correct
    for (let i = 0; i < WORD_LENGTH; i++) {
      if (guess[i] === answerLetters[i]) {
        tiles[i].classList.add('correct');
        result[i] = 'correct';
        answerLetters[i] = null;
      }
    }

    // Pass 2: present / absent
    for (let i = 0; i < WORD_LENGTH; i++) {
      if (result[i] === 'correct') continue;

      const index = answerLetters.indexOf(guess[i]);
      if (index !== -1) {
        tiles[i].classList.add('present');
        result[i] = 'present';
        answerLetters[index] = null;
      } else {
        tiles[i].classList.add('absent');
      }
    }

    guesses.push({ word: guess, result });

    if (guess === ANSWER) {
      endGame(true);
      return;
    }

    currentRow++;
    currentCol = 0;

    if (currentRow === MAX_ROWS) {
      endGame(false);
    }
  }

  function endGame(won) {
    gameOver = true;
    progression.markPlayedToday('wordle');

    if (won) {
      progression.addXP(WIN_XP);
      showMessage(`🎉 You got it! +${WIN_XP} XP`);
    } else {
      showMessage(`😢 The word was ${ANSWER}`);
    }

    saveWordleProgress({
      date: new Date().toDateString(),
      answer: ANSWER,
      won,
      rowsUsed: guesses.length,
      guesses
    });
  }

  function showMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'wordle-message';
    msg.textContent = text;
    root.appendChild(msg);
  }

  /* =========================
     EVENTS
  ========================= */
  function handlePhysicalKeyboard(e) {
    handleKey(e.key.toUpperCase());
  }

  window.addEventListener('keydown', handlePhysicalKeyboard);

  root.querySelectorAll('.key').forEach(btn => {
    btn.addEventListener('click', () => handleKey(btn.textContent));
  });

  function cleanup() {
    window.removeEventListener('keydown', handlePhysicalKeyboard);
  }
}
