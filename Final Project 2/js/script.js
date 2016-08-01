

  $(function(){
      $("#slides").slidesjs({
        width: 940,
        height: 528
      });
    });
  











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