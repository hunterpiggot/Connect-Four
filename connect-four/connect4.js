let board = [];
let playerColor = true;
if (playerColor === true) {
}
window.onload = function() {
	x = 0;
	while (x < 6) {
		board.push([ false, false, false, false, false, false, false ]);
		x++;
	}
};

let topRow = document.querySelector('#column-top');

function changeColor(e) {
	let id = e.target.id;
	for (let i = board.length - 1; i >= 0; i--) {
		if (board[i][id] === false) {
			if (playerColor === true) {
				board[i][id] = 'player1';
				return (document.getElementById(`${i}-${id}`).style.background = '#00eff7');
			} else {
				board[i][id] = 'player2';
				return (document.getElementById(`${i}-${id}`).style.background = '#e00202');
			}
		}
	}
}

function toggling(e) {
	playerColor = !playerColor;
	console.log(playerColor);
}

function checkForWinner1() {
	for (let j = 5; j >= 0; j--) {
		for (let k = 6; k >= 0; k--) {
			if (board[j][k] === 'player1') {
				if (board[j][k - 1] === 'player1') {
					if (board[j][k - 2] === 'player1') {
						if (board[j][k - 3] === 'player1') {
							alert('You Win!');
						}
					}
				}
			}
			if (board[j][k] === 'player1') {
				if (board[j - 1][k] === 'player1') {
					if (board[j - 2][k] === 'player1') {
						if (board[j - 3][k] === 'player1') {
							alert('You Win');
						}
					}
				}
			}
			if (board[j][k] === 'player1') {
				if (board[j - 1][k - 1] === 'player1') {
					if (board[j - 2][k - 2] === 'player1') {
						if (board[j - 3][k - 3] === 'player1') {
							alert('You Win');
						}
					}
				}
			}
			if (board[j][k] === 'player1') {
				if (board[j - 1][k + 1] === 'player1') {
					if (board[j - 2][k + 2] === 'player1') {
						if (board[j - 3][k + 3] === 'player1') {
							alert('You Win');
						}
					}
				}
			}
		}
	}
}
function checkForWinner2(e) {
	for (let j = 5; j >= 0; j--) {
		for (let k = 6; k >= 0; k--) {
			if (board[j][k] === 'player2') {
				if (board[j][k - 1] === 'player2') {
					if (board[j][k - 2] === 'player2') {
						if (board[j][k - 3] === 'player2') {
							alert('You Win!');
						}
					}
				}
			}
			if (board[j][k] === 'player2') {
				if (board[j - 1][k] === 'player2') {
					if (board[j - 2][k] === 'player2') {
						if (board[j - 3][k] === 'player2') {
							alert('You Win');
						}
					}
				}
			}
			if (board[j][k] === 'player2') {
				if (board[j - 1][k - 1] === 'player2') {
					if (board[j - 2][k - 2] === 'player2') {
						if (board[j - 3][k - 3] === 'player2') {
							alert('You Win');
						}
					}
				}
			}
			if (board[j][k] === 'player2') {
				if (board[j - 1][k + 1] === 'player2') {
					if (board[j - 2][k + 2] === 'player2') {
						if (board[j - 3][k + 3] === 'player2') {
							alert('You Win');
						}
					}
				}
			}
		}
	}
}

topRow.addEventListener('click', changeColor);
topRow.addEventListener('click', toggling);
topRow.addEventListener('click', checkForWinner1);
topRow.addEventListener('click', checkForWinner2);
