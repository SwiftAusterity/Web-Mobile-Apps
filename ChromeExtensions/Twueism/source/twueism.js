function getElements(doc) {
	var elements = doc.querySelectorAll('p,span,h1,h2,h3,h4,h5,h6');
	var numToTry = Math.min(elements.length, 500); //Stop at 500, that's a ridiculous number

	return [].slice.call(elements, 0, numToTry);
}

function replaceRoles(input) {
	var tagOpen = input.indexOf('<');
	var tagClose = input.indexOf('>');

	//Don't mess with stuff with tags in it.
	if(tagOpen >= 0 && tagOpen < tagClose) {
		return input;
	}

	var subSpanTagOpen = '<span style="color:#FFC300;font-weight:bold">';
	var domSpanTagOpen = '<span style="color:#FFC300;font-weight:bold">';

	var replaced = input
	//doms - allowed to change case but T and D is always caps
	.replace(/[tT]R([uU][eE]) [dD]([oO][mM][iI][nN][aA][nN][tT]|[oO][mM])/g, domSpanTagOpen + 'TW$1 D$2</span>')
	.replace(/tr(ue) d(ominant|om)/gi, domSpanTagOpen + 'Tw$1 D$2</span>')
	//subs - not allowed to change case
	.replace(/true submissive/gi, subSpanTagOpen + 'twue submissive</span>')
	.replace(/true sub/gi, subSpanTagOpen + 'twue sub</span>')
	//Just the word true
	.replace(/[tT]R([uU][eE])/g, domSpanTagOpen + 'TW$1</span>')
	.replace(/tr(ue)/gi, domSpanTagOpen + 'Tw$1</span>')
	//switches
	.replace(/switch(\w*)/gi, getSwitchString() + '$1');

	return replaced;
}

function getSwitchString() {
	var coin = Math.floor((Math.random() * 100) + 1) > 50;
	var secondCoin = Math.floor((Math.random() * 100) + 1) > 50;

	var switchString = '<span style="color:' + getRandomColor() + ';font-weight:bold">';
	switchString += coin && secondCoin ? 'S' : 's';
	switchString += '</span>';
	switchString += '<span style="color:' + getRandomColor() + ';font-weight:bold">';
	switchString += !coin && secondCoin ? 'W' : 'w';
	switchString += '</span>';	
	switchString += '<span style="color:' + getRandomColor() + ';font-weight:bold">';
	switchString += coin && !secondCoin ? 'I' : 'i';
	switchString += '</span>';
	switchString += '<span style="color:' + getRandomColor() + ';font-weight:bold">';
	switchString += !coin && !secondCoin ? 'T' : 't';
	switchString += '</span>';
	switchString += '<span style="color:' + getRandomColor() + ';font-weight:bold">';
	switchString += coin && secondCoin ? 'C' : 'c';
	switchString += '</span>';
	switchString += '<span style="color:' + getRandomColor() + ';font-weight:bold">';
	switchString += !coin && !secondCoin ? 'H' : 'h';
	switchString += '</span>';

	return switchString;
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}