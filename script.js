let input = document.querySelector("#inputBox");
let buttons = document.querySelectorAll("button");
let result = "";

// turn button node-list into Array
let array = Array.from(buttons);

array.forEach((button) => {
  button.addEventListener("click", (event) => {

    let value = event.target.innerHTML;
    
    if (value == "=") {
      result = eval(result);
      input.value = result;
    } else if (value == "AC") {
      input.value = "";
      result = "";
    } else if (value == "C") {
      result = result.slice(0, -1);
      input.value = result;
    } else {
      result += value;
      input.value = result;
    }
  });
});
