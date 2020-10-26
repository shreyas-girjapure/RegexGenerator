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

module.exports = analyzerExpressions;