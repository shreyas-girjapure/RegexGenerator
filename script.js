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
document
  .getElementById("reset")
  .addEventListener("click", resetPage);

function handleOptionChange(event) {
  let value = event.target.value;
  document.getElementById("expression").value += value;
  generateSampleText(value);
}

function resetPage(event) {
  let inputs = document.querySelectorAll('input');
  let selects = document.querySelectorAll('select');
  inputs.forEach((input)=>{
    input.value='';
  })
  selects.forEach((select)=>{
    select.value='';
  })
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
    case "\\s":
      sampleExpressionElement.innerText += "  ";
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
  alert.setAttribute("role", "alert");
  alert.innerText = "Copied to Clipboard!";
  document.querySelector(".card.w-100.mt-2").before(alert);
  setTimeout(() => {
    alert.remove();
  }, 1200);
}

function createInputBox(type,placeholderText) {
  let inputBox = document.createElement("input");
  inputBox.type = type;
  inputBox.classList.add("form-control");
  inputBox.placeholder=placeholderText;
  return inputBox;
}
/*                  <div class="row">
                        <div class="col-sm">
                            <label >Start</label>
                            <input type="text" class='form-control'>
                        </div>                        
                        <div class="col-sm">
                            <label >End</label>
                            <input type="text" class='form-control'>
                        </div>                        
                    </div>*/
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
