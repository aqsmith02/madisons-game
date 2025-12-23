// src/utils/progression.js

// Rarity drop rates
const RARITY_DROP_RATES = {
  common: 0.50,      // 50%
  uncommon: 0.30,    // 30%
  rare: 0.15,        // 15%
  legendary: 0.05    // 5%
};

// Define all 20 stickers with rarities (no manual weights needed)
const STICKERS = [
  // Common (50% chance) - 8 stickers
  { id: 1, name: 'Robber Andrew', rarity: 'common', image: 'stickers/robber.png' },
  { id: 2, name: 'Full Belly Andrew', rarity: 'common', image: 'stickers/full_belly.png' },
  { id: 3, name: 'Baby Andrew', rarity: 'common', image: 'stickers/baby.png' },
  { id: 4, name: 'Gambler Andrew', rarity: 'common', image: 'stickers/gambler.png' },
  { id: 5, name: 'Hotdog Andrew', rarity: 'common', image: 'stickers/hotdog.png' },
  { id: 6, name: 'Chef Andrew', rarity: 'common', image: 'stickers/chef.png' },
  { id: 7, name: 'Smart Andrew', rarity: 'common', image: 'stickers/smart.png' },
  { id: 8, name: 'Tweety Andrew', rarity: 'common', image: 'stickers/tweety.png' },
  
  // Uncommon (30% chance) - 7 stickers
  { id: 9, name: 'Cowboy Andrew', rarity: 'uncommon', image: 'stickers/cowboy.png' },
  { id: 10, name: 'Rapper Andrew', rarity: 'uncommon', image: 'stickers/rapper.png' },
  { id: 11, name: 'Racer Andrew', rarity: 'uncommon', image: 'stickers/racer.png' },
  { id: 12, name: 'Dancing Andrew', rarity: 'uncommon', image: 'stickers/dancer.png' },
  { id: 13, name: 'Judge Andrew', rarity: 'uncommon', image: 'stickers/judge.png' },
  { id: 14, name: 'Wizard Andrew', rarity: 'uncommon', image: 'stickers/wizard.png' },
  { id: 15, name: 'Gardener Andrew', rarity: 'uncommon', image: 'stickers/gardener.png' },
  
  // Rare (15% chance) - 3 stickers
  { id: 16, name: 'Pirate Andrew', rarity: 'rare', image: 'stickers/pirate.png' },
  { id: 17, name: 'Successful Andrew', rarity: 'rare', image: 'stickers/successful.png' },
  { id: 18, name: 'Spinosaurus Andrew', rarity: 'rare', image: 'stickers/spinosaurus.png' },
  
  // Legendary (5% chance) - 2 stickers
  { id: 19, name: 'Poochaco Andrew', rarity: 'legendary', image: 'stickers/poochaco.png' },
  { id: 20, name: 'Andrew Simpson', rarity: 'legendary', image: 'stickers/simpson.png' }
];

// Calculate weights automatically based on rarity drop rates
function calculateWeights() {
  const rarityCounts = {};
  
  // Count stickers per rarity
  STICKERS.forEach(sticker => {
    rarityCounts[sticker.rarity] = (rarityCounts[sticker.rarity] || 0) + 1;
  });
  
  // Assign weights to each sticker based on its rarity
  return STICKERS.map(sticker => ({
    ...sticker,
    weight: RARITY_DROP_RATES[sticker.rarity] / rarityCounts[sticker.rarity]
  }));
}

const WEIGHTED_STICKERS = calculateWeights();

const XP_PER_LEVEL = 300;

const DUPLICATE_BONUS_XP = {
  common: 25,
  uncommon: 50,
  rare: 100,
  legendary: 200
};

const RARITY_COLORS = {
  common: '#9ca3af',
  uncommon: '#10b981',
  rare: '#3b82f6',
  legendary: '#f59e0b'
};

const RARITY_LABELS = {
  common: 'Common',
  uncommon: 'Uncommon',
  rare: 'Rare',
  legendary: 'Legendary'
};

export class ProgressionSystem {
  constructor() {
    this.load();
  }

  load() {
    const saved = localStorage.getItem('gameProgress');
    if (saved) {
      const data = JSON.parse(saved);
      this.totalXP = data.totalXP || 0;
      this.lastPlayed = data.lastPlayed || {};
      
      // Sticker collection: { stickerId: count }
      this.stickerCollection = data.stickerCollection || {};
      
      // Mystery boxes waiting to be opened
      this.unopenedBoxes = data.unopenedBoxes || 0;
    } else {
      this.totalXP = 0;
      this.lastPlayed = {};
      this.stickerCollection = {};
      this.unopenedBoxes = 0;
    }
  }

  save() {
    localStorage.setItem('gameProgress', JSON.stringify({
      totalXP: this.totalXP,
      lastPlayed: this.lastPlayed,
      stickerCollection: this.stickerCollection,
      unopenedBoxes: this.unopenedBoxes
    }));
  }

  addXP(amount) {
    const oldLevel = this.getCurrentLevel();
    this.totalXP += amount;
    const newLevel = this.getCurrentLevel();
    
    // Award mystery boxes for each level gained
    const levelsGained = newLevel - oldLevel;
    if (levelsGained > 0) {
      this.unopenedBoxes += levelsGained;
    }
    
    this.save();
    
    return { 
      leveledUp: levelsGained > 0, 
      levelsGained,
      unopenedBoxes: this.unopenedBoxes 
    };
  }

  getCurrentLevel() {
    return Math.floor(this.totalXP / XP_PER_LEVEL);
  }

  getXPToNextLevel() {
    const currentLevel = this.getCurrentLevel();
    const nextLevelXP = (currentLevel + 1) * XP_PER_LEVEL;
    return nextLevelXP - this.totalXP;
  }

  getXPProgressInLevel() {
    const currentLevelBase = this.getCurrentLevel() * XP_PER_LEVEL;
    return this.totalXP - currentLevelBase;
  }

  // Open a mystery box and get a random sticker
  openMysteryBox() {
    if (this.unopenedBoxes <= 0) {
      return null;
    }

    const sticker = this.getRandomSticker();
    const isDuplicate = this.stickerCollection[sticker.id] > 0;
    
    // Add to collection
    this.stickerCollection[sticker.id] = (this.stickerCollection[sticker.id] || 0) + 1;
    
    // Reduce unopened boxes
    this.unopenedBoxes--;
    
    // Award bonus XP for duplicates based on rarity
    let bonusXP = 0;
    if (isDuplicate) {
      bonusXP = DUPLICATE_BONUS_XP[sticker.rarity];
      this.totalXP += bonusXP;
    }
    
    this.save();
    
    return {
      sticker,
      isDuplicate,
      bonusXP,
      totalOwned: this.stickerCollection[sticker.id]
    };
  }

  // Weighted random selection
  getRandomSticker() {
    const totalWeight = WEIGHTED_STICKERS.reduce((sum, s) => sum + s.weight, 0);
    let random = Math.random() * totalWeight;
    
    for (const sticker of WEIGHTED_STICKERS) {
      random -= sticker.weight;
      if (random <= 0) {
        return sticker;
      }
    }
    
    return WEIGHTED_STICKERS[WEIGHTED_STICKERS.length - 1]; // Fallback
  }

  // Collection stats
  getCollectionStats() {
    const uniqueOwned = Object.keys(this.stickerCollection).length;
    const totalStickers = STICKERS.length;
    const completionPercent = Math.round((uniqueOwned / totalStickers) * 100);
    
    const rarityStats = {
      common: { owned: 0, total: 0 },
      uncommon: { owned: 0, total: 0 },
      rare: { owned: 0, total: 0 },
      legendary: { owned: 0, total: 0 }
    };
    
    STICKERS.forEach(sticker => {
      rarityStats[sticker.rarity].total++;
      if (this.stickerCollection[sticker.id]) {
        rarityStats[sticker.rarity].owned++;
      }
    });
    
    return {
      uniqueOwned,
      totalStickers,
      completionPercent,
      rarityStats,
      unopenedBoxes: this.unopenedBoxes
    };
  }

  getAllStickers() {
    return STICKERS.map(sticker => ({
      ...sticker,
      owned: this.stickerCollection[sticker.id] || 0,
      isNew: !this.stickerCollection[sticker.id],
      isLocked: !this.stickerCollection[sticker.id]
    }));
  }

  getStickerById(id) {
    return STICKERS.find(s => s.id === id);
  }

  hasPlayedToday(gameName) {
    const today = new Date().toDateString();
    return this.lastPlayed[gameName] === today;
  }

  markPlayedToday(gameName) {
    const today = new Date().toDateString();
    this.lastPlayed[gameName] = today;
    this.save();
  }

  getTotalXP() {
    return this.totalXP;
  }

  getUnopenedBoxes() {
    return this.unopenedBoxes;
  }
}

export const progression = new ProgressionSystem();
export { RARITY_COLORS, RARITY_LABELS, STICKERS };