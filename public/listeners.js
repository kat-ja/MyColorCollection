//document.getElementById('pageTitle').addEventListener("click", () => console.log('hello'));

//let grid__items = document.querySelectorAll('.grid__item');
//grid__items.forEach(item => item.addEventListener('click', item => console.log(item)))

// console.log paikalle reittifunktio?

let colorPicker = new iro.ColorPicker("#picker", {
  // Set the size of the color picker
  width: 320,
  // Set the initial color to pure red
  color: "#f00",
});

// listen to a color picker's color:change event
// color:change callbacks receive the current color

let info = document.getElementById("info");
let colorValue = document.getElementById("colorValue");
let colorName = document.getElementById("colorName");
colorPicker.on("color:change", function (color) {
  // log the current color as a HEX string
  console.log(color.hexString);
  info.textContent = color.hexString;
  colorValue.value = color.hexString;
  colorName.value = color.hexString;
});

let hex = colorPicker.color.hexString;
