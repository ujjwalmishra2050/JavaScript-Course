let randomColor = function(){
    let hex = "0123456789ABCDEF"
    let color = '#';
    for (let i=0; i<6;  i++){
   color += hex[Math.floor(Math.random()* 16)];
    }
    return color;
  };
  
  let intervalId;
  let StartChangingcolor=function(){
    function colorChange() {
  document.body.style.backgroundColor = randomColor();
    } 
  intervalId = setInterval(colorChange ,1000)
  }
  let StopChangingColor= function(){
  clearInterval(intervalId)
  } 
  document.querySelector('#start').addEventListener('click' ,StartChangingcolor);
  document.querySelector('#stop').addEventListener('click' ,StopChangingColor)