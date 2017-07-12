function getElements(doc) {
	var elements = doc.querySelectorAll('p,span,h1,h2,h3,h4,h5,h6');
	var numToTry = Math.min(elements.length, 1000); 

	return [].slice.call(elements,0,numToTry);
}

function replaceRoles(input) {
	if(input.includes('<') || input.includes('>')) {
		return input;
	}

	var subSpanTagOpen = '<span style="color:#FFC300;font-weight:bold">';
	var domSpanTagOpen = '<span style="color:#FFC300;font-weight:bold">';

	var coin = Math.floor((Math.random() * 100) + 1) > 50;
	var switchString = '<span style="color:' + getRandomColor() + ';font-weight:bold">';
	switchString += coin ? 'S' : 's';
	switchString += '</span>';
	switchString += '<span style="color:' + getRandomColor() + ';font-weight:bold">';
	switchString += !coin ? 'W' : 'w';
	switchString += '</span>';	
	switchString += '<span style="color:' + getRandomColor() + ';font-weight:bold">';
	switchString += coin ? 'I' : 'i';
	switchString += '</span>';
	switchString += '<span style="color:' + getRandomColor() + ';font-weight:bold">';
	switchString += !coin ? 'T' : 't';
	switchString += '</span>';
	switchString += '<span style="color:' + getRandomColor() + ';font-weight:bold">';
	switchString += coin ? 'C' : 'c';
	switchString += '</span>';
	switchString += '<span style="color:' + getRandomColor() + ';font-weight:bold">';
	switchString += !coin ? 'H' : 'h';
	switchString += '</span>';

	var replaced = input
	//doms - allowed to change case but T and D is always caps
	.replace(/[tT]R([uU][eE]) [dD]([oO][mM][iI][nN][aA][nN][tT]|[oO][mM])/g, domSpanTagOpen + 'TW$1 D$2</span>')
	.replace(/tr(ue) (dominant|dom)/gi, domSpanTagOpen + 'Tw$1 $2</span>')
	//subs - not allowed to change case
	.replace(/true submissive/gi, subSpanTagOpen + 'twue submissive</span>')
	.replace(/true sub/gi, subSpanTagOpen + 'twue sub</span>')
	//Just the word true
	.replace(/[tT]R([uU][eE])/g, domSpanTagOpen + 'TW$1</span>')
	.replace(/tr(ue)/gi, domSpanTagOpen + 'Tw$1</span>')
	//switches
	.replace(/switch(\w*)/gi, switchString + '$1');

	return replaced;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}