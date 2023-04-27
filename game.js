<html>
<head>
  <title>Resource Collecting Game</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Resource Collecting Game</h1>
  <div id="game-container">
    <div id="resources">
      <h2>Resources</h2>
      <p>Gold: <span id="gold-count">0</span></p>
      <p>Wood: <span id="wood-count">0</span></p>
      <p>Stone: <span id="stone-count">0</span></p>
    </div>
    <div id="collection-methods">
      <h2>Collection Methods</h2>
      <button id="gold-mine">Gold Mine (Cost: 10 gold)</button>
      <button id="lumber-mill">Lumber Mill (Cost: 5 wood)</button>
      <button id="quarry">Quarry (Cost: 15 stone)</button>
    </div>
  </div>
  
  <script src="game.js"></script>
</body>
</html>
#game-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
}

#resources, #collection-methods {
  width: 45%;
}

#collection-methods button {
  margin: 10px 0;
}

#collection-methods button:disabled {
  opacity: 0.5;
}

// Define variables for resources and collection methods
let goldCount = 0;
let woodCount = 0;
let stoneCount = 0;
let goldMineCost = 10;
let lumberMillCost = 5;
let quarryCost = 15;

// Set up timer to add resources every few seconds
setInterval(function() {
  goldCount++;
  woodCount++;
  stoneCount++;
  updateResources();
}, 3000);

// Create functions for collection methods
function collect


