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
        ${['QWERTYUIOP', 'ASDFGHJKL', 'ENTERZXCVBNM⌫']
          .map(
            row => `
          <div class="key-row">
            ${row.split('').map(key => `<button class="key">${key}</button>`).join('')}
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;
}
