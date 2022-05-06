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
	document.getElementById('searchbar').innerHTML = `<p>RESULT: ${result}</p>`;
};

function research() {
	const games = ["Zelda", "Sonic", "Mario", "COD", "Star wars", "Switch sports", "Elden ring", "Sony"]
	let list = games;
	let txt = document.getElementById('searchbar').value;
	let result = [];
	for(let i = 0; i < txt.length; i++) {
		if(result) {
			list = result;
			result = [];
		}
		for(let k = 0; k < list.length; k++) {
			if(txt[i] == list[k][i]) {
				result.push(list[k])
			} else {
				list.splice(k, 1)
			};
		};
	};
	console.log(liste)
};
