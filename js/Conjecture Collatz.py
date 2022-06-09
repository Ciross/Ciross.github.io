from time import*
def Collatz_Conjecture (k):
    while True:
        print(k)
        if k%2 == 0:
            k /= 2
        else:
            k = 3*k+1
    return None

def collatz(k):
    if k == 1:
        return[1]
    elif k % 2 == 0:
        return collatz(k/2)+ [k]
    else:
        return collatz(3*k+1)+ [k]

def test(n):
    while True:
        liste = collatz(n)
        if liste[0] == 1 and liste[1] == 2 and liste[2] == 4:
            print(f'{n} vraie')
        else:
            return print(f'{n} TU AS UN CONTRE EXEMPLE OMG !!')
        n += 2

#test(2**68+101)

def test2(n):
    verif = False
    while True:
        if n%2 == 0:
            print(f'{n} vraie PAIRE')
            n += 1
        liste = collatz(n)
        for k in liste:
            if k < n:
                verif = True
        if verif:
            print(f'{n} vraie')
        elif verif is False:
            return print(f'{n} TU AS UN CONTRE EXEMPLE OMG !!')
        n += 1


test2(2**68+101)
