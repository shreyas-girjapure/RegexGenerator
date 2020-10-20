
document.getElementById('operatorSelect').addEventListener('change',handleOptionChange);
document.getElementById('setSelect').addEventListener('change',handleOptionChange);
document.getElementById('quantifierSelect').addEventListener('change',handleOptionChange);

//document.getElementById('setSelect').addEventListener('load',setValues);

let setOptions=[
  {value:"[a-zA-Z]", label:"Alphabets Set"},
  {value:"[0-9]", label:"Numbers Set"},
  {value:"\w", label:"Character or Number"},
  {value:".", label:"Anything"},
  {value:"\s", label:"Space"},
  {value:"", label:"Custom String"},
  {value:"UNSTOPPABLE", label:"UNSTOPPABLE"}
];
  setOptions.forEach(setValues);


function setValues(item){
  let inputElement=document.createElement('option');
  inputElement.setAttribute("class","dropdown-item");
  inputElement.setAttribute("value",item.value);
  inputElement.innerHTML=item.label;
  document.getElementById("setSelect").appendChild(inputElement);
}

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