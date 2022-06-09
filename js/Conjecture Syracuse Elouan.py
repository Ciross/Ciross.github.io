
def syracuse(n):
    if n ==1:
        return [1]
    if n%2 == 0:
        return syracuse(n//2) + [n]
    else:
        return syracuse(3*n+1) + [n]

def limited():
    while True:
        n = int(input("Enter a number: "))
        print(syracuse(n))

def start():
    function = input("Choose your function:\n1. Limited\t2. Unlimited\n$~: ")
    if function == "1":
        return limited()
    elif function == "2":
        n = int(input("Enter a number: "))
        return unlimited(n)
    else:
        print("Please enter a valid number\n\n")
        return start()

#start()

x = 4

def syracuse2(n):
    global x
    if n ==1:
        return [1]
    if n%2 == 0:
        x+=1
        return syracuse2(n//2) + [n]
    else:
        x+=1
        return syracuse2(3*n+1) + [n]

while True:
    list = syracuse2(x)
    if list[0] == 1 and list[1] == 2 and list[2] == 4:
        print(f'True for {x}')
    else:
        print(f'False for {x}')
        break
    x+=1