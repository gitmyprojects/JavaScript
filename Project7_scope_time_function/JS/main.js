x = 42 //assign global variable

function scope_1(){
    document.write(x * 2);
}

//function scope_2(){ This is commented out so because it returns and error (on purpose)
    //console.log(y * 2);
//}
scope_1();
//scope_2();

function get_date(){
    if (new Date().getHours() < 21 ){ //uses the Date method to get the hour from the time of day
        document.getElementById("whip").innerHTML = "Get back to studying!";
    }
    else 
        document.getElementById("whip").innerHTML = "Breaktime but you should be thinking about coding"//this will display if the if statement returns false
    }

    function is_it_enough(){
        x = document.getElementById("num_of_hrs").value; //this assigns the value of the input to the variable x
        if (x < 8) {
            instruction = "get back to work!";
        }
        else {
            instruction = "is that enough?"
        }
        document.getElementById("result").innerHTML = instruction;
    }

    function Time_function(){
        var Time = new Date().getHours(); //this assigns the hour of the day to the variable time
        var Reply; //this initiates a variable named Reply
        if (Time < 12 == Time > 0) { // this is using an AND condition to determine output
            Reply = "Its mornin time!";
        }
        else if (Time >= 12 == Time < 18) {
            Reply = "Tis time for tea!";
        }
        else {
            Reply = "It is Netflix time.";
        }
        document.getElementById("Time_of_Day").innerHTML = Reply; //this sends the value stored in the variable reply to the element with the ID "Time of Day"
    }