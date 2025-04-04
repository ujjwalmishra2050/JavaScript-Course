let form = document.querySelector('form');
form.addEventListener('submit', function (p) {
  p.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Please Enter A Valid Height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Please Enter A Valid Weight';
  } else {
    let results = (weight / ((height * height) / 1000)).toFixed(2);
    result.innerHTML = results
  }
});