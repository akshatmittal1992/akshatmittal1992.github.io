
let stackOfCards = new Array();
let openCards = new Array();
let scoreCard = {"numberOfTurns": 0, "numberOfPairs": 0 };
const SUITE_NAMES = Object.freeze({"clubs":1, "diamonds":2, "hearts":3, "spades": 4});
const CARD_COLORS = Object.freeze({"red":1, "black":2});
const CARDS_IN_A_DECK = 13;
let isGameFreezed = false;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getSuiteOfCards(suiteName) {
	let color = CARD_COLORS.black;
	switch(suiteName) {
		case SUITE_NAMES.clubs:
			color = CARD_COLORS.black;
			break;
		case SUITE_NAMES.diamonds:
			color = CARD_COLORS.red;
			break;
		case SUITE_NAMES.hearts:
			color = CARD_COLORS.red;
			break;
		case SUITE_NAMES.spades:
			color = CARD_COLORS.black;
			break;
	};

	let suiteOfCards = new Array();
	for (let i = 0; i < CARDS_IN_A_DECK; i++) {
		let card = new Object();
		card.rank = i + 1;
		card.suite = suiteName;
		card.color = color;
		card.isOpen = false;
		card.isPlayable = true;
		suiteOfCards.push(card);
	}

	return suiteOfCards;
}

function getDeckOfCards() {
	let deckOfCards = new Array;
	deckOfCards = getSuiteOfCards(SUITE_NAMES.clubs)
		.concat(getSuiteOfCards(SUITE_NAMES.diamonds))
		.concat(getSuiteOfCards(SUITE_NAMES.hearts))
		.concat(getSuiteOfCards(SUITE_NAMES.spades))
	return deckOfCards;
}

function initializeStackOfCards() {
	document.getElementById('restart_game').style.display = 'none';
	document.getElementById('game_over').style.display = 'none';

	stackOfCards.length = 0;
	scoreCard = {"numberOfTurns": 0, "numberOfPairs": 0 };
	stackOfCards = getDeckOfCards();
	stackOfCards = shuffle(stackOfCards);
	console.log(JSON.stringify(stackOfCards));
	showStackOfCards();
}

function createCard(card) {
	//Array containing all the ranks
	let cardDiv = document.createElement('div');
	cardDiv.className = 'card';
	if (card['color'] == CARD_COLORS.black) {
		cardDiv.className += " black";
	} else {
		cardDiv.className += " red";
	}

	if (card['isPlayable'] == true) {	
		if (card['isOpen'] == false) {
			let cardDivContent = '<div class="unopened_card"></div>';
			cardDiv.innerHTML = cardDivContent;
 			return cardDiv;
		}
	} else {
		cardDiv.className += " matched";
	}

    let ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "J", "Q", "K");
    //Array with the card types using the unicode representations.
    let suites = new Array("&clubs;", "&diams;", "&hearts;", "&spades;");
    // const type = suites[SUITE_NAMES[card['suite']]];
    const type = suites[card['suite'] - 1];
    let cardDivContent = '<div class="top"><span class="number">' + ranks[card['rank']-1] + '</span><span class="icon">' + type + '</span></div><div class="lg_icon">' + type + '</div><div class="bottom"><span class="icon rotate">' + type + '</span><span class="number rotate">' + ranks[card['rank']-1] + '</span></div>';
 	cardDiv.innerHTML = cardDivContent;
 	return cardDiv;
}

function showStackOfCards() {
	const numberOfCards = stackOfCards.length;
    let gameTable = document.getElementById('game_table');
    gameTable.innerHTML = '';
	let i = 0;
	for(i = 0; i < numberOfCards; i++) {
		const card = stackOfCards[i];
		const index = i;
		let cardDiv = createCard(card);
		cardDiv.addEventListener('click', function (event) {
			if (isGameFreezed) {
				return;
			}
			if (card['isOpen'] == true) {
				return;
			}
			scoreCard.numberOfTurns++;
            flipCard(card, index);
        });
		gameTable.appendChild(cardDiv);
	}

	let scoreCardDisplay = document.getElementById('score_card_display');
	scoreCardDisplay.innerHTML = 'Number of turns: ' + scoreCard.numberOfTurns 
		+ ', Number of pairs: ' + scoreCard.numberOfPairs;
}

function flipCard(card, i) {
	console.log('suite-' + card['suite'] + ' ' + 'rank-' + card['rank'] + ' ' + 'color-' + card['color']);
	if (card['isOpen'] == true) {
		card['isOpen'] = false;
		isGameFreezed = false;
	} else {
		card['isOpen'] = true;
		openCards.push(card);
	}
	showStackOfCards();
	if (card['isOpen'] == true) {
		if (openCards.length == 2) {
			isGameFreezed = true;
			setTimeout(matchCardPair, 1000);
		}
	}
}

function gameOver() {
	document.getElementById('game_over').innerHTML = 'Congrats. Next time try with fewer turns than ' + scoreCard.numberOfTurns;
	document.getElementById('game_over').style.display = 'block';
	document.getElementById('restart_game').style.display = 'block';
}

function matchCardPair() {
		if (openCards[0]['rank'] == openCards[1]['rank']
			&& openCards[0]['color'] == openCards[1]['color']) {
			//they match
			openCards[0]['isPlayable'] = false;
			openCards[1]['isPlayable'] = false;
			scoreCard.numberOfPairs++;
			if (scoreCard.numberOfPairs == 26) {
				gameOver();
			}
		}
		openCards[0]['isOpen'] = false;
		openCards[1]['isOpen'] = false;
		openCards.length = 0;
		showStackOfCards();
	isGameFreezed = false;
}


function resetGame() {
	initializeStackOfCards();
}



