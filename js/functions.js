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
				if(list[e] not in result){
					result.push(list[e])
				};
				e++
			} else {
				list.splice(e, 1)
			};
		};
	};
	if(result !== []) {
		console.log(result)
	};
	return 'None'
};
