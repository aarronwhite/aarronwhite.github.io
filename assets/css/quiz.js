var start = function () {
	var correct = 0;
	var incorrect = 0;
	var question = "none";
	var input = "none";
	var answer = "none";
}

var ask = function() {
	input = prompt(question);
};

var score = function(){
	if(input == answer){
		correct = correct+1;
		alert("correct");
		
	}else{
		incorrect = incorrect+1;
		alert("incorrect");
	}
};

var lazy = function(){
	ask();
	score();
};

alert("Welcome to my Gaming Quiz, You will be answering 10 questions.");

question = "What is the matrix?";
answer = "There is no spoon";
lazy();

alert("Well done, you got " + correct + " out of 10");