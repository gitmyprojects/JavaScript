window.alert("Connected") // added to make sure the script is referenced correctly

function countdown(){
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1; //the minus 1 will cause the countdown
        timer.innerHTML = seconds; // this locates the id tag and displays the variable seconds
        setTimeout(tick, 1000); // this appears to be a range
    if(seconds == -1){ // if the value stored in seconds becomes equal to -1, the alert is called
            alert("Time's up!");
        }
            }
        tick(); //this continues iterations of the function
}

var slideIndex = 1; //this sets a starting point for the other functions associated with it
showSlides(slideIndex);

//next/previous controls
function plusSlides(n){
    showSlides(slideIndex += n);
}

//thumbnail image controls
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}; //i dont know what these brackets do
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) { //im starting to lose track of what everything is doing
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active,", "");
    }
    slides[slideIndex-1].style.display = "block"; //i think this blocks the other images from displaying
    dots[slideIndex-1].className += " active";
}