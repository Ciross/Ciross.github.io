def favoris():
    liste_jeux = ["Zelda", "Sonic", "Mario", "COD", "Star wars", "Switch sports", "Elden ring", "Valorant"]
    res = []
    for k in liste_jeux:
        rep = input(f'Ajouter {k} aux favoris ?\n Y/N $:')
        if rep == 'y' or rep == 'Y':
            res.append(k)
    return res

print(favoris())