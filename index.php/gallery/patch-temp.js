console.log("js loaded")

var recentItem = ""
function showItem(itemId) {
	document.getElementById('patch-item-collection').style.display = "none"
	document.getElementById(itemId).style.display = "block"
	recentItem = itemId
}

function hideDetail() {
	document.getElementById('patch-item-collection').style.display = "block"
	document.getElementById(recentItem).style.display = "none"
}