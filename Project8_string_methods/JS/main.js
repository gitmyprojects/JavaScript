function concate_1(){ //decalre the function
    var str1 = "Ric flair, "; //assign values to the variable
    var str2 = "Arn Anderson, ";
    var str3 = "Ole Anderson, ";
    var str4 = " and Tully Blanchard";
    var four_horsemen = str1.concat(str2,str3,str4); //concatenate the four variables
    document.getElementById("answer").innerHTML = four_horsemen + " are the original four horesman.";
}

function chop_chop(){ //this function uses the slice method
    var str5 = "It can slice and dice!"; //this is before the slice is applied
    document.getElementById("piece").innerHTML = str5.slice(17,21) + "d!";
}

function upper(){ //this is the toUppperCase method
    var me= "me";
    var me_and_more = me.toUpperCase(); //did this different from the slice method by making a new variable
    document.getElementById("mushroom").innerHTML = me_and_more;
}

function num_convert(){
    var num_1 = 42; //giving the variable an integer value
    document.getElementById("convert").innerHTML = num_1.toString(); //converting the integer to a string
}

var pi = 3.14159265359

function precision_method(){ //returns a more precise number based on whats passed in to the parameters
    document.getElementById("precise").innerHTML = pi.toPrecision(4)
}

function to_fixed(){ //limits the number of digits after the decimal to whats passed in to the parameters
    document.getElementById("fixed").innerHTML = pi.toFixed(6)
}

function value_of(){ //returns the primitive value of the variable xv
    var xv = 15;
    document.getElementById("primative").innerHTML = xv.valueOf();
}