a = "Here are the names of baby animals"
window.alert(a);

function Dictionaries(){ //creates function  to be called in HTML page
    var baby_animals = { //declare variable
        lion:"cub", //declare KVP's
        lion:"roar", //by using the key twice, it uses the most recent
        fish:"fry",
        fox:"kit",
        platypus:"puggle"
    };
    delete baby_animals.lion; //removes key 'lion' from dictionary
    document.getElementById("Dictionary").innerHTML = baby_animals.lion // displays the value in key 'lion' when clicked
}