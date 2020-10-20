

document.getElementById('mySelect').addEventListener('change',handleOptionChange);


function handleOptionChange(event){
  let value = event.target.value;
  document.getElementById('expression').value += value;
  generateSampleText(value);
}

function generateSampleText(value){
  let sampleExpressionElement = document.getElementById('DataString');
  switch (value) {
    case '\\d':
      sampleExpressionElement.innerText = '4';
      break;
    case '[a-zA-Z]':
      sampleExpressionElement.innerText = 'K';    
    default:
      break;
  }
}