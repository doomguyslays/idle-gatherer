// Variables to track resource count, upgrade costs, and auto clicker settings
var resourceCount = 0;
var upgrade1Cost = 10;
var upgrade2Cost = 20;
var upgrade3Cost = 50;
var autoClickerCost = 100;
var autoClickerLevel = 0;
var autoClickerSpeed = 0;

// Function to update the resource count on the page
function updateResourceCount() {
	document.getElementById("resourceCount").innerHTML = resourceCount;
}

// Function to handle clicking the button
function handleClick() {
	resourceCount++;
	updateResourceCount();
}

// Functions to handle purchasing upgrades
function purchaseUpgrade1() {
	if (resourceCount >= upgrade1Cost) {
		resourceCount -= upgrade1Cost;
		upgrade1Cost *= 2;
		updateResourceCount();
		document.getElementById("upgrade1").innerHTML = "Upgrade 1 - Cost: " + upgrade1Cost;
	}
}

function purchaseUpgrade2() {
	if (resourceCount >= upgrade2Cost) {
		resourceCount -= upgrade2Cost;
		upgrade2Cost *= 2;
