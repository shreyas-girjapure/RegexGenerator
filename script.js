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

function handleOptionChange(event) {
  let value = event.target.value;
  document.getElementById("expression").value += value;
  generateSampleText(value);
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
  }, 1000);
}
