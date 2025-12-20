// src/games/name-four/data.js

export const NAME_FOUR_PUZZLES = [
  {
    category: 'Nicknames',
    answers: ['beanie', 'boobie', 'munt', 'tony']
  },
  {
    category: 'Favorite 80s Rock Bands',
    answers: ['the smiths', 'talking heads', 'misfits', 'queen']
  },
  {
    category: 'In Your Room',
    answers: ['box fan', 'john lennon poster', 'vision board', 'wallpaper']
  },
  {
    category: 'Food Combos',
    answers: [
      'ketchup and rice',
      'orange juice and popcorn',
      'weenies and toast',
      'jam and sausage'
    ]
  },
  {
    category: 'Road Names',
    answers: [
      'pickle buddy court',
      'honey girl lane',
      'ruby golightly drive',
      'apple butter drive'
    ]
  },
  {
    category: 'Crushes',
    answers: [
      'cillian murphy',
      'drew starkey',
      'dallas',
      'chris christie'
    ]
  },
  {
    category: 'Lead Actors of Movies We Watched',
    answers: [
      'timothee chalamet',
      'harrison ford',
      'dylan o\'brien',
      'jim carrey'
    ]
  },
  {
    category: 'My Spotify Wrapped Artists',
    answers: [
      'radiohead',
      'nat king cole',
      'bobby darin',
      'a tribe called quest'
    ]
  }
];

/**
 * Returns today's Name Four puzzle using date-based rotation
 */
export function getTodayNameFourPuzzle() {
  const startDate = new Date('2024-01-01');
  const today = new Date();

  const daysSinceStart = Math.floor(
    (today - startDate) / (1000 * 60 * 60 * 24)
  );

  const index = daysSinceStart % NAME_FOUR_PUZZLES.length;
  return NAME_FOUR_PUZZLES[index];
}
