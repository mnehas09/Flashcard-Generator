var BasicCard = require("./BasicCard.js");


var ClozeCard = function(text, cloze) {

	
	if (this instanceof ClozeCard) {
		this.fullText = text;
		this.cloze = cloze;

		
		this.partial = function() {
			if (this.fullText.includes(this.cloze)) {
				return this.fullText.replace(this.cloze, '...');
			} else {
				var brokenClozeMessage = "Oops, wrong answer. The answer is " + this.fullText;
				return brokenClozeMessage;
			}
		};

	} else {
		return new ClozeCard(text, cloze);
	}
};




var firstPresidentCloze = new ClozeCard("George Washington was the first president of the US.", "George Washington");
console.log(firstPresidentCloze.fullText);
console.log(firstPresidentCloze.cloze);
console.log(firstPresidentCloze.partial());


var typoPresidentCloze = new ClozeCard("Donald Trump is the current president of the US.", "Donald Frump");
console.log(typoPresidentCloze.fullText);
console.log(typoPresidentCloze.cloze);
console.log(typoPresidentCloze.partial());


module.exports = ClozeCard;