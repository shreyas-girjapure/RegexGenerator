function addRegX() {
    var x = document.getElementById("mySelect").value;
    console.log("-----"+x);
    document.getElementById("expression").value += x;
  }