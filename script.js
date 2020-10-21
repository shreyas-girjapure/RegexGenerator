console.log("Script loading started");

document
  .getElementById("operatorSelect")
  .addEventListener("change", handleOptionChange);
document
  .getElementById("setSelect")
  .addEventListener("change", handleOptionChange);
document
  .getElementById("quantifierSelect")
  .addEventListener("change", handleOptionChange);
document
  .getElementById("copyToClipboard-button")
  .addEventListener("click", copyToClipboard);
document.getElementById("reset").addEventListener("click", resetPage);

document
  .getElementById("operatorSelect")
  .addEventListener("change", handleOptionChange);
document
  .getElementById("setSelect")
  .addEventListener("change", handleOptionChange);
document
  .getElementById("quantifierSelect")
  .addEventListener("change", handleOptionChange);

function handleOptionChange(event) {
  let value = event.target.value;
  document.getElementById("expression").value += value;
  generateSampleText(value);
}

function resetPage(event) {
  let inputs = document.querySelectorAll("input");
  let selects = document.querySelectorAll("select");
  inputs.forEach((input) => {
    input.value = "";
  });
  selects.forEach((select) => {
    select.value = "";
  });
}

function generateSampleText(value) {
  let sampleExpressionElement = document.getElementById("DataString");
  switch (value) {
    case "[0-9]":
      sampleExpressionElement.innerText += "4";
      break;
    case "[a-zA-Z]":
      sampleExpressionElement.innerText += "H";
      break;
    case "\\w":
      sampleExpressionElement.innerText += "E";
      break;
    case ".":
      sampleExpressionElement.innerText += "L";
      break;
    case "s":
      sampleExpressionElement.innerText += " ";
      break;
    default:
      break;
  }
}

function copyToClipboard(event) {
  let expression = document.getElementById("expression");
  if (expression.value === "") return;
  expression.select();
  document.execCommand("copy");
  addAlert();
}

function addAlert(event) {
  let alert = document.createElement("div");
  alert.classList.add("alert");
  alert.classList.add("alert-success");
  alert.classList.add("transition-effect");
  alert.setAttribute("role", "alert");
  alert.innerText = "Copied to Clipboard!";
  document.querySelector(".card.w-100.mt-2").before(alert);
  setTimeout(() => {
    alert.remove();
  }, 1200);
}

function createInputBox(type, placeholderText) {
  let inputBox = document.createElement("input");
  inputBox.type = type;
  inputBox.classList.add("form-control");
  inputBox.placeholder = placeholderText;
  return inputBox;
}

function createRow() {
  let row = document.createElement("div");
  row.classList.add("row");
  return row;
}
function createColumns() {
  let col = document.createElement("div");
  col.classList.add("col-sm");
  return col;
}

let analyzerExpressions = [
  {
    label: "escapeCharacters",
    expression: /\[|\]|\(|\)|\.|\^|\$|\?|\||\+|\*/,
    hint:"hasEscapeCharacters",    
  },
  {
    label: "smallAlphabets",
    expression: /[a-z]/,
    hint:"hasAlphabets",
  },
  {
    label: "capitalAlphabets",
    expression: /[A-Z]/,
    hint:"hasCases"
  },
  {
    label: "numbers",
    expression: /[0-9]/,
    hint:"hasNumbers"
  },
  {
    label: "word",
    expression: /[a-zA-Z0-9]/,
    hint:"useWord"
  },
  {
    label: "spaces",
    expression: /[\s]/,
    hint:"hasSpace"
  },
  {
    label: "symbols",
    expression: /[!@#%&-="`;,~:{}]/,
    hint:"hasSpecialSymbols"
  },    
];

function analyzeString(input,expressions){
  let statsArray = []; 
  let inputString = String(input);
  if(inputString.length==0) return;
  if(inputString.length>1) statsArray.push('useQuantifiers');
  expressions.forEach((item)=>{
    if(inputString.match(item.expression)) statsArray.push(item.hint);
  })
  return statsArray;
}
