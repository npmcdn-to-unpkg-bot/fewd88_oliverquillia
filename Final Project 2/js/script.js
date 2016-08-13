

  $(function(){
      $("#slides").slidesjs({
        width: 940,
        height: 528
      });
    });
  

				// SLIDEHSOW

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


				// END OF SLIDEHSOW









// The background color change from JS Fiddle


// var used = [[], [], []],
//     div = document.getElementsByTagName("div")[0],
//     button = document.getElementsByTagName("button")[0];

// console.log(used);

// function change(){
//     var arr = [Math.random(), Math.random(), Math.random()];
    
//     arr.forEach(function(e, i){
//         arr[i] = ~~(e * 254 + 1);
        
//         while(used[i].indexOf(arr[i]) > -1){
//             arr[i] = ~~(Math.random() * 254 + 1);
//         }
        
//         used[i].push(arr[i]);
//     });   
    
//     var color = 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')';
    
//     div.style.background = color;
//     div.innerHTML = color;
// }

// var interval, text, r = 1; // if r is odd, then start, else stop

// button.onclick = function(){
//     if(r % 2)
//         interval = setInterval(change, 1000), text = "Stop";
//     else 
//         clearInterval(interval), text = "Start";
    
//     button.innerHTML = text;
//     r++;
// }