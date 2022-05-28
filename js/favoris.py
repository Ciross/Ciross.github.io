def favoris():
    liste_jeux = ["Zelda", "Sonic", "Mario", "COD", "Star wars", "Switch sports", "Elden ring", "Valorant"]
    res = []
    for k in liste_jeux:
        rep = input(f'Ajouter {k} aux favoris ?\n Y/N $:')
        if rep == 'y' or rep == 'Y':
            res.append(k)
    return res

#Ici c'est genre un fct pour ajouter des jeux en favoris mais la partie input puis le if qui suit serai remplacer par des verif si une case est coché 
#(systeme de cases à cocher pour ajouter un jeu en fav sur le site)
#je la ferai en js plus tard vous inquiétez pas 
