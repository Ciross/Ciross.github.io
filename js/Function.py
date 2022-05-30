def favoris():
    liste_jeux = ["Zelda", "Sonic", "Mario", "COD", "Star wars", "Switch sports", "Elden ring", "Valorant"]
    res = []
    for k in liste_jeux:
        rep = input(f'Ajouter {k} aux favoris ?\n Y/N $:')
        if rep == 'y' or rep == 'Y':
            res.append(k)
    return res

def sign_in():
    Profile = {}
    pseudo = input(f"Choisisez un pseudo \n $:")
    mail = input(f"Donner votre adresse Mail \n $:")
    mdp = input(f"Choisisez un mot de passe \n $:")
    nom = input(f"Votre nom \n $:")
    prénom = input(f"Votre prénom \n $:")
    âge = int(input(f"Votre âge \n $:"))
    if âge < 18:
        return print("Les mineurs ne peuvent pas s'inscire")
    num = input(f"Votre numéro de téléphone \n $:")
    pays = input(f"Votre pays \n $:")
    adresse = input(f"Votre adresse \n $:")
    devise = input(f"Votre monnaie \n $:")
    jeux = favoris()
    Profile["Pseudo"] = pseudo
    Profile["Mail"] = mail
    Profile["Mot De Passe"] = mdp
    Profile["Nom"] = nom
    Profile["Prénom"] = prénom
    Profile["Âge"] = âge
    Profile["Numéro de téléphone"] = num
    Profile["Pays"] = pays
    Profile["Adresse"] = adresse
    Profile["Devise"] = devise
    Profile["jeux favoris"] = jeux
    return Profile

    
