function Math_function(){ //this function will display the result of the addition expression
    var num1 = 21
    var num2 = 21
    var result = num1 + num2
    document.getElementById("Math").innerHTML = result
}

function subtract(){ //this function will display the result of the subtraction expression
    var subtract = 9-3;
    document.getElementById("Math").innerHTML = "9-3= " + subtract
}

function multiply(){ //this function will display the result of the multiplication expression
    var multiply = 7 * 7
    document.getElementById("Math").innerHTML = "7 mupltiplied by 7 equals " + multiply
}

function division(){ //this function will display the result of the division expression
    var divide = 100 / 20
    document.getElementById("Math").innerHTML = "100 / 20 = " + divide
}
function order_66(){ //this function utilizes order of operation
    var order_of_op = (5+5) * 5^2 / 10 + 1 - 10
    document.getElementById("Math").innerHTML = "Order 66 results in " + order_of_op
}
function oh(){ //this function will display the remainder of the division expression
    var modulo = 15 % 7
    document.getElementById("Math").innerHTML = "The remainder when 15 is divided by 7 is " + modulo
}
function neg_oper(){ //This function utilizes the negation operator
    var x = -55
    document.getElementById("Math").innerHTML = -x
}

function increment(){ // This function will increment the varible x by one
    var x = 10
    x++
    document.write(x)
}

function decrement(){ // This function will decrement the varible x by one
    var x = 10
    x--
    document.write(x)
}

window.alert(Math.random() * 100); //upon loading of the page, the alert window will appear with a random number between 0 and 100

function method(){ //this function will display the number passed in rounded down to the nearest whole number
document.getElementById("method").innerHTML = Math.floor(2.456463);
}