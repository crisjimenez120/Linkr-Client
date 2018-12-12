
function selectColor (n) {
	// Color array    blue,    	red      green,     yellow,     pink, purple, orange, aqua, light blue 
	var colors = ["#3300CC", "#D00000", "#006633", "#CCFF66", "#FF66FF", "#9900CC", "#00FFFF", "#00FFFF"];
	return colors[n % colors.size()];
}

export default selectColor;