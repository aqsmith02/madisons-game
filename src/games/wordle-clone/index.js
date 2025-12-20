// src/games/wordle-clone/index.js

import './style.css';
import { renderWordleGrid } from './render.js';
import { progression } from '../../utils/progression.js';

const WORD_LENGTH = 5;
const MAX_ROWS = 6;
const WIN_XP = 100;
const ANSWER = 'MADLY'; // change later
let gameOver = false;


export function startWordle(container) {
  container.innerHTML = `
    <button class="back-btn" id="back-home">← Back</button>
    <div id="wordle-root"></div>
  `;

  document.getElementById('back-home').onclick = () => {
    window.showHome();
  };

  const root = document.getElementById('wordle-root');
  renderWordleGrid(root);

  let currentRow = 0;
  let currentCol = 0;

  const rows = root.querySelectorAll('.row');

  function addLetter(letter) {
    if (currentCol >= WORD_LENGTH) return;
    const tile = rows[currentRow].children[currentCol];
    tile.textContent = letter;
    currentCol++;
  }

  function removeLetter() {
    if (currentCol === 0) return;
    currentCol--;
    const tile = rows[currentRow].children[currentCol];
    tile.textContent = '';
  }

function handleKey(key) {
  if (gameOver) return;

  if (key === 'ENTER') {
    if (currentCol !== WORD_LENGTH) return;

    const guess = Array.from(rows[currentRow].children)
      .map(tile => tile.textContent)
      .join('');

    evaluateGuess(guess);
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


function evaluateGuess(guess) {
  const answerLetters = ANSWER.split('');
  const tiles = rows[currentRow].children;

  // First pass: correct positions
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guess[i] === answerLetters[i]) {
      tiles[i].classList.add('correct');
      answerLetters[i] = null;
    }
  }

  // Second pass: present letters
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (tiles[i].classList.contains('correct')) continue;

    const index = answerLetters.indexOf(guess[i]);
    if (index !== -1) {
      tiles[i].classList.add('present');
      answerLetters[index] = null;
    } else {
      tiles[i].classList.add('absent');
    }
  }

  // WIN
  if (guess === ANSWER) {
    gameOver = true;

    progression.addXP(WIN_XP);
    progression.markPlayedToday('wordle');

    showMessage(`🎉 You got it! +${WIN_XP} XP`);
    return;
  }

  currentRow++;
  currentCol = 0;

  // LOSS
  if (currentRow === MAX_ROWS) {
    gameOver = true;

    progression.markPlayedToday('wordle');

    showMessage(`😢 The word was ${ANSWER}`);
  }


}

function showMessage(text) {
  const msg = document.createElement('div');
  msg.className = 'wordle-message';
  msg.textContent = text;

  document.getElementById('wordle-root').appendChild(msg);
}



  // Physical keyboard
  window.addEventListener('keydown', e => {
    handleKey(e.key.toUpperCase());
  });

  // On-screen keyboard
  root.querySelectorAll('.key').forEach(button => {
    button.addEventListener('click', () => {
      handleKey(button.textContent);
    });
  });
}
