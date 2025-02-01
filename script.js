let score = 0;
let multiplier = 1;
let upgradeCost = 10;
let difficultyMultiplier = 1;

// DOM Elements
const scoreElement = document.getElementById('score');
const lemonButton = document.getElementById('lemon-button');
const multiplierElement = document.getElementById('multiplier');
const upgradeButton = document.getElementById('upgrade-button');
const restartButton = document.getElementById('restart-button');
const musicButton = document.getElementById('music-button');
const difficultySelect = document.getElementById('difficulty');
const clickSound = document.getElementById('click-sound');
const backgroundMusic = document.getElementById('background-music');

// Initialize the game
function startGame() {
  score = 0;
  multiplier = 1;
  upgradeCost = 10;
  updateScoreDisplay();
  updateMultiplierDisplay();
  updateUpgradeButton();
}

// Update score display
function updateScoreDisplay() {
  scoreElement.textContent = `Score: ${score}`;
}

// Update multiplier display
function updateMultiplierDisplay() {
  multiplierElement.textContent = `Multiplier: ${multiplier}x`;
}

// Update upgrade button text
function updateUpgradeButton() {
  upgradeButton.textContent = `Upgrade (Cost: ${upgradeCost})`;
}

// Handle lemon click
lemonButton.addEventListener('click', () => {
  score += multiplier * difficultyMultiplier;
  clickSound.currentTime = 0; // Reset sound to start
  clickSound.play();
  updateScoreDisplay();
});

// Handle upgrade purchase
upgradeButton.addEventListener('click', () => {
  if (score >= upgradeCost) {
    score -= upgradeCost;
    multiplier += 1;
    upgradeCost *= 2; // Increase cost for next upgrade
    updateScoreDisplay();
    updateMultiplierDisplay();
    updateUpgradeButton();
  } else {
    alert('Not enough points to upgrade!');
  }
});

// Handle difficulty change
difficultySelect.addEventListener('change', () => {
  const difficulty = difficultySelect.value;
  if (difficulty === 'easy') {
    difficultyMultiplier = 1;
  } else if (difficulty === 'medium') {
    difficultyMultiplier = 2;
  } else if (difficulty === 'hard') {
    difficultyMultiplier = 3;
  }
});

// Handle restart button
restartButton.addEventListener('click', () => {
  startGame();
});

// Handle music toggle
musicButton.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicButton.textContent = 'Stop Music';
  } else {
    backgroundMusic.pause();
    musicButton.textContent = 'Play Music';
  }
});

// Start the game
startGame();