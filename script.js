let goldCount = 0;
let woodCount = 0;
let stoneCount = 0;

const goldButton = document.getElementById('gold-button');
const woodButton = document.getElementById('wood-button');
const stoneButton = document.getElementById('stone-button');

const goldCountSpan = document.getElementById('gold-count');
const woodCountSpan = document.getElementById('wood-count');
const stoneCountSpan = document.getElementById('stone-count');

const clickSound = document.getElementById('click-sound');

const saveButton = document.getElementById('save-button');
const loadButton = document.getElementById('load-button');

const autoClickerInterval = 1000; // 1 second
let autoClickerEnabled = false;

function addGold() {
  goldCount++;
  goldCountSpan.innerText = goldCount;
  playClickSound();
}

function addWood() {
  woodCount++;
  woodCountSpan.innerText = woodCount;
  playClickSound();
}

function addStone() {
  stoneCount++;
  stoneCountSpan.innerText = stoneCount;
  playClickSound();
}

function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

function saveGame() {
  const gameData = {
    goldCount,
    woodCount,
    stoneCount
  };
  localStorage.setItem('resourceGameSaveData', JSON.stringify(gameData));
}

function loadGame() {
  const savedData = localStorage.getItem('resourceGameSaveData');
  if (savedData) {
    const gameData = JSON.parse(savedData);
    goldCount = gameData.goldCount;
    woodCount = gameData.woodCount;
    stoneCount = gameData.stoneCount;
    updateResourceCounts();
  }
}

function updateResourceCounts() {
  goldCountSpan.innerText = goldCount;
  woodCountSpan.innerText = woodCount;
  stoneCountSpan.innerText = stoneCount;
}

goldButton.addEventListener('click', addGold);
wood
