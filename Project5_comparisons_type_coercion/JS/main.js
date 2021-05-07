document.write(typeof "data type");//dispays the data type 
//of what follows the typeof operator in browser

document.write(" ten " + 10);//type coercion concatenates the sting and integer

function notanumber(){
    document.getElementById("question").innerHTML = 0/0 //i tested using a string but it doesnt work
}

function b_boolean(){
    document.getElementById("boolean").innerHTML = isNaN('string');//testing a string to be not a number
}

function not_b_boolean(){
    document.getElementById("boolean").innerHTML = isNaN(3.14); //testing a number to return false as not a number
}

function stones(){
    document.write(4E312); //test to display infinity
}
function avengers(){
    document.write(-5E313); //test a negative to display negative infinity
}

function boolean_T(){
    document.write(8>7) //return a booelan value as true
}
function boolean_F(){ //return a boolean value as false
    document.write(7<6)
}

function logging(){ //display result on the console
    console.log(2+2);
}

function logging_logic(){ //using boolean logic to display result in console
    console.log(2>2);
}
function equal_logic(){ // utilizing the equal operator
    document.write(2==2);
}
function not_equal_logic(){ //display boolean logic result using the equal operator
    document.write((2+2)==2);
}

function tripleequal_a(){ // utilizing the triple = operator to compare value and data type
    document.write(3===3);
}

function tripleequal_b(){
    document.write("three" === 4);
}

function tripleequal_c(){
    document.write("three" === 3);
}

function tripleequal_d(){
    document.write(3 === 4 );
}

function and_op(){
    document.write(2==2&&3==3);// utilizing the  AND operator to compare two values to return true 
}

function or_op(){
    document.write(2==3||3==3); // utilizing the OR operator to compare two values to return true
}

function not_op_t(){
    document.getElementById("not_op_t").innerHTML = !(2<3); //utilizing the NOT operator to return false
}
function not_op_f(){
    document.getElementById("not_op_f").innerHTML = !(2>3); //utilizing the NOT operator as a double negativeto return true
}