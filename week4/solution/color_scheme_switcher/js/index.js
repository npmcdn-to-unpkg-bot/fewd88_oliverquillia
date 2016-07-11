document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;

function switchGray() {
  document.body.style.backgroundColor = 'gray';
 document.body.style.color = 'white';
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}

// $('#grayButton').click(function() {
// 	$('body').css('backgroundColor','gray')
// 	$('body').css('color','white');
// });
// $('#whiteButton').click(function() {
// 	$('body').css('backgroundColor','white');
// 	$('body').css('color','gray');
// });

