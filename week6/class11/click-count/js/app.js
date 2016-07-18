// Program Flow
//
// 1: User clicks on #clickme (this element)
// 2: Increment the value of #click-num by one for each click (eg if clicknum is 0, make it 1; it clicknum is 10, make it 11; etc.)
// 3: If the number of clicks == 5, change the background-color of <body> to red
// 4: Else if the number of clicks == 10, change the background-color of <body> to green
// 5: Else if the number of clicks == 15, change the background-color of <body> to blue
// 6: Else, change the background-color of <body> to black

$(document).ready(function () {
	
	// var count = 0;

	// $('#clickme').click(function(){
	
	// 	count += 1;
	// 	$('#click-num').html(count);

	var num = 0;

	$('#clickme').click(function(){
		
		num ++;

		$('#click-num').html(num);

		if(num === 5){
			$('body').css('background-color', 'red');
		}else if (num === 10){
			$('body').css('background-color', 'gren');
		}else if (num === 15){
			$('body').css('background-color', 'blue');
		}else{
			$('body').css('background-color', 'black');
		}
	});











})






// if (x == 5) {
// 		alert('beer');
// 	} else if (x == 10) {
// 		alert('coffee');
// 	} else {
// 		alert('water');
// 	}




// if (condition is true) {

// alert("The condition is true!")

// } else if (some other condition is true) {

// alert('The first condition was false, but this one is true!')

// } else if (some other conditions is true) {

// alert('The first two conditions were false, but this one is true!')

// } else {

// alert('None of the above conditions were true!')

// }