window.alert("connected")//confirm link to html
function Ride_Function(){ 
    var Height, Can_Ride; //declare two variables using comma
    Height = document.getElementById("Height").value; //this will look for height id and the value entered in the input
    Can_Ride = (Height < 52) ? "You are too short":"you are tall enough"; //if the conditional statement in paranthesis is true, the string on the left of the colon will be displayed
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride."; // this will display to the paragraph element with the id Ride and concatenate the string
}

function check_age(){
    var voter_age, can_vote;
    voter_age = document.getElementById("voter_age").value;
    can_vote = (voter_age > 17) ? "you can vote!":"not just yet";
    document.getElementById("vote").innerHTML = can_vote
}

//var x = True //this is a test to see what displays when a reserved keyword is used
//document.write(x)

function Presidents(name, president_number, party){
    this.last_name = name; //my understanding is "this" allows the global variable to be used multiple times using multiple variables
    this.prez_num = president_number;
    this.party = party;
}
var Clinton = new Presidents("Clinton", 42,"Democrat"); // this creates a new instance of the Presidents function

function prez_info(){ //this is what will finally be displayed when the event is triggered
    document.getElementById("New_and_This").innerHTML = "President " + Clinton.last_name + " was the " + Clinton.prez_num + " president. He ran as a "
    + Clinton.party + ".";
}

function nest(){ //this is a nested function that runs when the parent function event is triggered. the results of the "nested" function gets stored to be displayed
    document.getElementById("Nested_Function").innerHTML = nested();
    function nested(){
        var x = 1;
        function plus_one(){x +=1;}
        plus_one();
        return x;
    }
}