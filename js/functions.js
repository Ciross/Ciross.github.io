function search() {
	const games = ["Zelda", "Sonic", "Mario", "COD", "Star wars", "Switch sports", "Elden ring", "Sony"]
	let list = games;
	let txt = document.getElementById('searchbar').value;
	let result = [];
	let i = -1;
	for(let k = 0; k < txt.length; k++) {
		i++
		let e = 0
		for(let z = 0; z < list.length; z++) {
			if(txt[k] === list[e][i]) {
				result.push(list[e])
				e++
			} else {
				list.splice(e, 1)
			};
		};
	};
	console.log(result)
};

// Fonction search() retravaillée.
function research() {
	const games = ["Mario", "Zelda", "Sonic", "Pokemon", "Mario kart", "Mario Party", "Zelda Breath of the Wild", "Sonic the Hedgehog", "COD", "Star wars", "Switch sports", "Elden ring", "Sony"];
	list = [];
	let txt = document.getElementById('searchbar').value;
	for(let i = 0; i < games.length; i++) {
		let value = true;
		for(let c = 0; c < txt.length; c++) {
			if(txt[c] !== games[i][c]) {
				value = false;
			};
		};
		if(value) list.push(games[i]);
	};
	document.getElementById('result').innerHTML = list.map(x => `<li>${x}</li>`).join('');
};
