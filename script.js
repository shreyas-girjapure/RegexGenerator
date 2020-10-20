
document.getElementById('operatorSelect').addEventListener('change',handleOptionChange);
document.getElementById('setSelect').addEventListener('change',handleOptionChange);
document.getElementById('quantifierSelect').addEventListener('change',handleOptionChange);

function handleOptionChange(event){
  let value = event.target.value;
  document.getElementById('expression').value += value;
  generateSampleText(value);
}

function generateSampleText(value){
  let sampleExpressionElement = document.getElementById('DataString');  
  switch (value) {
    case '[0-9]':
      sampleExpressionElement.innerText += '4';
      break;
    case '[a-zA-Z]':
      sampleExpressionElement.innerText += 'H';
      break;    
    case '\\w':
      sampleExpressionElement.innerText += 'E';
      break;
      case '.':
      sampleExpressionElement.innerText += 'L';
      break;
      case '\\s':
      sampleExpressionElement.innerText += '  ';
      break;            
    default:
      break;
  }
}