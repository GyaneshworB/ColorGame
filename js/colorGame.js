var square = document.querySelectorAll("#square");
var message = document.querySelector("#message");
var resetButton = document.querySelector("#playAgain");
var h1 = document.querySelector("h1");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var colors=generateRandomColors(6);
h1.style.backgroundColor = "steelblue";


var displayColor = document.querySelector("#display");
var pickedColor = pickColor();
displayColor.textContent=pickedColor;

for(var i=0;i<square.length;i++ ){
	//assigning color to the squares
    square[i].style.backgroundColor=colors[i];
    //this is used to select d=from the element the recent one

    //clicked color
    square[i].addEventListener("click",function(){

    	var clickedColor = this.style.backgroundColor;

    	console.log(clickedColor,pickedColor);

        if(clickedColor === pickedColor){
        	message.textContent = "correct";
        	changeColor(clickedColor);
        	h1.style.backgroundColor = clickedColor;
        	resetButton.textContent = "PLAY AGAIN";


        }
        else{
    	    console.log("wrong!");
    	    this.style.backgroundColor = "#232323";
    	    message.textContent = "Try Again";
        }
    });

}

function changeColor(colors){
	for(var i=0; i<square.length; i++){
		square[i].style.backgroundColor = colors;
	}

}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// declare an array
	var arr = [];
	// insert random colors in array
	for(var i = 0; i<num; i++){
    arr.push(randomColor());
    }
	// return array
	return arr;
}

function randomColor(){
	//random "red" color from 0-255
	var r = Math.floor(Math.random() * 255+1);
	//random "green" color from 0-255
	var g = Math.floor(Math.random() * 255+1);
	//random "blue" color from 0-255
	var b = Math.floor(Math.random() * 255+1);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}


easyButton.addEventListener("click",function(){
 	easyButton.classList.add("selected");

 	hardButton.classList.remove("selected");
 

 	

 		//generate 3 random square color
 	colors=generateRandomColors(3);

 	//picked color
 	pickedColor = pickColor();

 	displayColor.textContent = pickedColor;



 	for(var i=0; i<square.length; i++){

 		if(i<3){
 			square[i].style.backgroundColor = colors[i]  //only give colors to first 3 squares
 		}
 		else{
 			square[i].style.display = "none";  //hides the colors from display
 		}
 	}

 });

 hardButton.addEventListener("click",function(){
 	hardButton.classList.add("selected");
 	//remove color of easy
 	easyButton.classList.remove("selected");

 	colors=generateRandomColors(6);

 	pickedColor = pickColor();


 	displayColor.textContent = pickedColor;
 	//add colors and make display block instead of none

 	for(var i=0; i<square.length;i++){
    	square[i].style.backgroundColor=colors[i];

    	if(i>2){
    		square[i].style.display = "block";
    	}
    }




 });

 resetButton.addEventListener("click",function(){
	//reset the random color
	colors=generateRandomColors(6);
    //reset the picked color
    pickedColor = pickColor();
    //display new picked color
    displayColor.textContent= pickedColor;
    //change the color of square
    for(var i=0; i<square.length;i++){
    	square[i].style.backgroundColor=colors[i];

    	if(i>2){
    		square[i].style.display = "block";
    	}
    }

    resetButton.textContent = "NEW GAME";

    h1.style.backgroundColor = "steelblue";

    message.textContent = "";

    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");


});

//You can also use the function below to reset
// resetButton.addEventListener("click",function(){
// 		window.location.reload();
// 	});

