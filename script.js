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
document
  .getElementById("inputText")
  .addEventListener("input", handleInputTextChange);

document
  .getElementById("expression")
  .addEventListener("input", handleExpressionInput);

function handleExpressionInput(event) {
  let expr = event.target.value;  
  if(!expr) {
    clearHighlights();
    return;
  }    
  handleHighlight(expr);
}

function handleHighlight(expression) {
  let text = document.getElementById("inputText").value;
  if (!text) return;
  let highlightedText = applyHighlights(text, expression);
  let highlights = document.querySelector(".highlights");
  highlights.innerHTML = highlightedText;
}

function applyHighlights(text, expression) {
  try {
    let regex = new RegExp(expression);  
    return text.replace(/\n$/g, "\n\n").replace(new RegExp(expression), "<mark>$&</mark>");
  } catch (error) {
    console.log("invalid regex");
  }
}

function clearHighlights(){
  let highlightedEles = document.querySelectorAll('mark');
  highlightedEles.forEach((ele)=>{
    ele.remove();
  })
}

function handleOptionChange(event) {
  let value = event.target.value;
  document.getElementById("expression").value += value;
  generateSampleText(value);
}
function handleInputTextChange(event) {
  if(!event.target.value) clearHighlights();
  let statsEle = document.getElementById("stats");
  statsEle.innerHTML = "";
  let result = analyzeString(event.target.value, analyzerExpressions);
  if (!result) return;
  let badges = result.map((item) => createBadge(item.hint, item.type, "h4"));
  badges.forEach((item) => {
    statsEle.appendChild(item);
  });
}

function resetPage(event) {
  let inputs = document.querySelectorAll("input");
  let selects = document.querySelectorAll("select");
  let badges = document.querySelectorAll("span.badge");
  let sampleText = document.querySelector("#DataString");
  clearHighlights();  
  sampleText.innerHTML = "";
  badges.forEach((badge) => badge.remove());
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

function createBadge(value, type, size) {
  let badge = document.createElement("span");
  badge.classList.add("badge");
  badge.classList.add(`badge-${type}`);
  badge.classList.add("p-2");
  badge.classList.add("m-1");
  badge.innerHTML = value;
  if (size && size.match(/h[1-6]/)) {
    let sizeEle = document.createElement(size);
    sizeEle.classList.add("d-inline");
    sizeEle.appendChild(badge);
    return sizeEle;
  }
  return badge;
}

let analyzerExpressions = [
  {
    label: "escapeCharacters",
    expression: /\[|\]|\(|\)|\.|\^|\$|\?|\||\+|\*/,
    hint: "hasEscapeCharacters",
    type: "warning",
  },
  {
    label: "smallAlphabets",
    expression: /[a-z]/,
    hint: "hasAlphabets",
    type: "secondary",
  },
  {
    label: "capitalAlphabets",
    expression: /[A-Z]/,
    hint: "hasCases",
    type: "warning",
  },
  {
    label: "numbers",
    expression: /[0-9]/,
    hint: "hasNumbers",
    type: "secondary",
  },
  {
    label: "word",
    expression: /[a-zA-Z0-9]/,
    hint: "useWord",
    type: "info",
  },
  {
    label: "spaces",
    expression: /[\s]/,
    hint: "hasSpace",
    type: "secondary",
  },
  {
    label: "symbols",
    expression: /[!@#%&-="`;,~:{}]/,
    hint: "hasSpecialSymbols",
    type: "warning",
  },
];

function analyzeString(input, expressions) {
  let statsArray = [];
  let inputString = String(input);
  if (inputString.length == 0) return;
  if (inputString.length > 1)
    statsArray.push({
      label: "quantifiers",
      hint: "useQuantifiers",
      type: "info",
    });
  expressions.forEach((item) => {
    if (inputString.match(item.expression)) statsArray.push(item);
  });
  return statsArray;
}
