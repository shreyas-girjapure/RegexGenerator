let setOptions = [
  { value: "[a-zA-Z]", label: "Alphabets Set" },
  { value: "[0-9]", label: "Numbers Set" },
  { value: "w", label: "Character or Number" },
  { value: ".", label: "Anything" },
  { value: "s", label: "Space" },
  { value: "", label: "Custom String" },
];

let operatorOptions = [
  { value: "^", label: "Starts With" },
  { value: "$", label: "Ends With" },
  { value: "|", label: "OR" },
];

let quantifierOptions = [
  { value: "*", label: "0 or more" },
  { value: "[0-9]", label: "Numbers Set" },
  { value: "+", label: "Atleast One" },
  { value: "?", label: "Zero or One" },
  { value: "{}", label: "Between Range" },
];

let dropdownId = "setSelect";
setOptions.forEach((item) => setValues(dropdownId, item));

dropdownId = "operatorSelect";
operatorOptions.forEach((item) => setValues(dropdownId, item));

dropdownId = "quantifierSelect";
quantifierOptions.forEach((item) => setValues(dropdownId, item));

function setValues(dropdownId, item) {
  let inputElement = document.createElement("option");
  inputElement.setAttribute("class", "dropdown-item");
  inputElement.setAttribute("value", item.value);
  inputElement.innerHTML = item.label;
  document.getElementById(dropdownId).appendChild(inputElement);
}
