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
