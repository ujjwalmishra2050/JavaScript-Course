let buttons = document.querySelectorAll('.button');
let body = document.querySelector("body");

buttons.forEach(function (dot) {
  console.log(dot)
  dot.addEventListener('click', function (ujj) {
    console.log(ujj)
   console.log(ujj.target)
   if(ujj.target.id=== 'grey'){
     body.style.backgroundColor= ujj.target.id
   }

   if(ujj.target.id=== 'white'){
    body.style.backgroundColor= ujj.target.id
  }

  if(ujj.target.id=== 'blue'){
    body.style.backgroundColor= ujj.target.id
  }

  if(ujj.target.id=== 'yellow'){
    body.style.backgroundColor= ujj.target.id
  }
  });
});
