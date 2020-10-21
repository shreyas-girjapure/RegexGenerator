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

let analyzerExpressions = [
  {
    label: "escapeCharacters",
    expression: /\[|\]|\(|\)|\.|\^|\$|\?|\||\+|\*/,
    hint: "hasEscapeCharacters",
  },
  {
    label: "smallAlphabets",
    expression: /[a-z]/,
    hint: "hasAlphabets",
  },
  {
    label: "capitalAlphabets",
    expression: /[A-Z]/,
    hint: "hasCases",
  },
  {
    label: "numbers",
    expression: /[0-9]/,
    hint: "hasNumbers",
  },
  {
    label: "word",
    expression: /[a-zA-Z0-9]/,
    hint: "useWord",
  },
  {
    label: "spaces",
    expression: /[\s]/,
    hint: "hasSpace",
  },
  {
    label: "symbols",
    expression: /[!@#%&-="`;,~:{}]/,
    hint: "hasSpecialSymbols",
  },
];
