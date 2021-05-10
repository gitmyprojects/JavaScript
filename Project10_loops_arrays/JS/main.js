function call_loop(){ 
    var digit = ""; // the varible is declared but no value is assigned
    var x = 2; // initiating variable x
    while (x < 11){  //this will loop until the condition is false
        digit += "<br>" + x;
        x++
    }
    document.getElementById("loop").innerHTML = digit;
}

function str_length(){ 
    var str_1 = "who's pulling my strings?"; //assigning a string value to the variable
    var str_len = str_1.length; //assigning the result of determnining the legth of the varible str_1
    document.getElementById("length").innerHTML = str_len;
}

var instruments = [
    "guitar", "drums", "piano", "bass", "violin", "trumpet", "flute"]; //the brackets create one element, the values inside the element have index numbers

var content = ""; //declaring the variable with no value

var y; //initiating global variable y

function for_loop(){ //the for loop will loop a until a condition is met. the condition is in paranthesis
    for (y = 0; y < instruments.length; y++) {
        content += instruments[y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = content;
}

function cat_pics() {
    var cat_pictures = []; //the variable is declared without a value
    cat_pictures[0] = "sleeping"; // these are assigning values based on index number
    cat_pictures[1] = "playing";
    cat_pictures[2] = "eating";
    cat_pictures[3] = "purring";
    document.getElementById("cat").innerHTML = "In this picture the cat is " + cat_pictures[2] + ".";
}


function array_function() {
    var letters = [];
    letters[0] = "a";
    letters[1] = "b";
    letters[2] = "c";
    letters[3] = "d";
    letters[4] = "e";
    letters[5] = "f";
    document.getElementById("array").innerHTML = "the value in index 3 is " + letters[3] + ".";

}

function constant_function_before(){ //i named this before to show a change has occured in the 'after' function
    const vehicle = {type:"car", make:"Pontiac", model:"firebird"};//vehicle is a constant so it wont change but the properties of vehicle can change
     vehicle.type = "death-trap";
    document.getElementById("constant").innerHTML = "My first vehicle was a " + vehicle.type + "." +
    "A 16 year old shouldnt drive a " + vehicle.make + " " + vehicle.model + "!";
}
function constant_function_after(){ //this is a copy of 'before' but a property was changed and another added
    const vehicle = {type:"car", make:"Pontiac", model:"firebird-trans am", year:1987};
     vehicle.type = "death-trap";
    document.getElementById("constant_two").innerHTML = "My first vehicle was a " + vehicle.type + "." +
    "A 16 year old shouldnt drive a " + vehicle.year + " " + vehicle.make + " " + vehicle.model + "!";
}

var str_x = "out";// what made this interesting is that i couldnt write it because i had async inside the head tag
document.write("let me " + str_x + "<br>");
{
    let str_x = "in"; //by using let, the value stored in vairble str_x staays local(in the braces)
    document.write("let me " + str_x + "<br>");
}
document.write("Thanks for letting me " + str_x + "<br>");//this confirms that str_x wasnt globally changed

function return_stmt(num1){
    return "Your number is " + num1; //this returns the string with the argument passed into num1
}
document.write(return_stmt(4))

function edibles(){ 
    let snack = { //snack is the variable element
        fruit: "apples", //everything within the braces is the propertys of the element
        nuts: "pistachios",
        finger_food: "popcorn",
        veggie: "carrots",
        todays_snack : function() { //this is the method
            return "Todays snack is " + this.fruit + "." + "tomorrow will be " + this.nuts + ".";
            }
        }; 
    document.getElementById("snack").innerHTML = snack.todays_snack(); 
        
}