def add(num1, num2):
    return num1 + num2

def sub(num1, num2):
    return num1 - num2

def multi(num1, num2):
    return num1 * num2

def div(num1, num2):
    return num1 / num2

userInput1 = input("What is your first number?")
userInput2 = input("What is your second number?")
operation = input("Type your operation")

num1 = int(userInput1)
num2 = int(userInput2)

if (operation == "+"):
    sum = add(num1, num2)
    print(sum)  
elif (operation == "-"):
    difference = sub(num1, num2)
    print(difference)
elif (operation == "*"):
    times = multi(num1, num2)
    print(times)
elif (operation == "/"):
    quotient = div(num1, num2)
    print(quotient)
    
