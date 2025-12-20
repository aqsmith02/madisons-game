// src/games/name-four/storage.js

const STORAGE_KEY = 'name_four_progress';

/**
 * Save today's Name Four progress
 * @param {Object} data
 * @param {string} data.date - new Date().toDateString()
 * @param {Array<string>} data.found - answers the player has guessed correctly
 * @param {boolean} data.completed - true once all 4 are found
 */
export function saveNameFourProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

/**
 * Load saved Name Four progress
 * @returns {Object|null}
 */
export function loadNameFourProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return null;
  return JSON.parse(saved);
}

/**
 * Clear Name Four progress (dev / testing helper)
 */
export function clearNameFourProgress() {
  localStorage.removeItem(STORAGE_KEY);
}
