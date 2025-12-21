// src/games/wordle-clone/render.js

export function renderWordleGrid(root) {
  root.innerHTML = `
    <div class="wordle">
      <div class="grid">
        ${Array.from({ length: 6 })
          .map(
            () => `
          <div class="row">
            ${Array.from({ length: 5 })
              .map(() => `<div class="tile"></div>`)
              .join('')}
          </div>
        `
          )
          .join('')}
      </div>

      <div class="keyboard">
        <div class="key-row">
          ${'QWERTYUIOP'.split('').map(k => `<button class="key">${k}</button>`).join('')}
        </div>

        <div class="key-row">
          ${'ASDFGHJKL'.split('').map(k => `<button class="key">${k}</button>`).join('')}
        </div>

        <div class="key-row">
          <button class="key special-key enter-key">ENTER</button>
          ${'ZXCVBNM'.split('').map(k => `<button class="key">${k}</button>`).join('')}
          <button class="key special-key">⌫</button>
        </div>
      </div>
    </div>
  `;
}
