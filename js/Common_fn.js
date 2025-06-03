function getInputById(id){
const inputValue1 = document.getElementById(id).value.trim();
const inputValue = Number(inputValue1);
if(isNaN(inputValue) || inputValue < 0) {
     return -1;
}
const finalInput = parseFloat(inputValue);
return finalInput;
}

function getTextById(id){
const textValue = document.getElementById(id).innerText;    
const finalText = parseFloat(textValue);
return finalText;
}

const dialog = document.getElementById('my_modal_5');
// document.getElementById("qouta-donate").addEventListener("click", (event) => {
// event.preventDefault();
//   dialog.show();
// });


document.getElementById("close-btn").addEventListener("click", (event) => {
event.preventDefault();
  dialog.close();
});




// document.getElementById("feni-donate").addEventListener("click", (event) => {
// event.preventDefault();
//   dialog.show();
// });
// document.getElementById("Noakhali-donate").addEventListener("click", (event) => {
// event.preventDefault();
//   dialog.show();
// });

// document.getElementById("block-reset").addEventListener("submit", (event) => {
// event.preventDefault();
// });

// document.getElementById("home-link").addEventListener("submit", (event) => {
// event.preventDefault();
// });