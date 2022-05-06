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
	// Initialisation des jeux (pour l'instant manuel mais sera fait seul avec la db)
	const games = ["Mario", "Zelda", "Sonic", "Pokemon", "Mario kart", "Mario Party", "Zelda Breath of the Wild", "Sonic the Hedgehog", "COD", "Star wars", "Switch sports", "Elden ring", "Sony"];
	// Création d'une 2ème liste qui rendra notre résultat final
	list = [];
	// Récupération du texte dans la balise input
	let txt = document.getElementById('searchbar').value;
	// Explication vite fait du for:
	// for([1]; [2]; [3])
	// [1] Initialisation de la variable qui sera utilisé, généralement avec la valeur 0.
	// [2] Mise en place de la condition, comme pour un while. Le for tournera tant que la condition n'est pas remplie.
	// [3] Augmentation de la variable initiée.
	// Ici, cela correspondrait en python à: 'for i in range(len(games))'
	for(let i = 0; i < games.length; i++) {
		// Préparation de notre booléen, pour donner la validité d'un nom.
		let value = true;
		// Ici: 'for c in range(len(txt))'
		for(let c = 0; c < txt.length; c++) {
			// Si un caractère ne correspond pas à celui du nom ou de l'input..
			if(txt[c] !== games[i][c]) {
				// ..notre booléen est mis à jour
				value = false;
			};
		};
		// Si notre booléen de départ est toujours valide (true) on ajoute le mot dans 'list'
		if(value) list.push(games[i]);
	};
	// Ici, 'document.getElementById('result').innerHTML' correspond au code html de l'élément portant l'ID 'result'.
	// Le égal signifie qu'on va le modifier par la nouvelle valeur..
	// ..'list.map(x => `<li>${x}</li>`).join('')'
	// Ici, list.map() va renvoyer tous les éléments de list
	// On les définies sur 'x'. Donc x = 1 élément de la liste
	// puis pour chaque x on créer '<li>${x}</li>' où x = le nom du jeu.
	// On termine par '.join('')' pour dire au script de ne rien mettre à la fin de notre string (car par défaut il met une virgule).
	document.getElementById('result').innerHTML = list.map(x => `<li>${x}</li>`).join('');
};
// La fonction peut paraître grosse comme ça, mais en vrai sans les commentaires elle fait 13 lignes.

