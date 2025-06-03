function getInputById(id){
const inputValue = document.getElementById(id).value;
const finalInput = parseFloat(inputValue);
return finalInput;
}

function getTextById(id){
const textValue = document.getElementById(id).innerText;    
const finalText = parseFloat(textValue);
return finalText;
}

const dialog = document.getElementById('my_modal_5');
document.getElementById("qouta-donate").addEventListener("click", (event) => {
event.preventDefault();
  dialog.show();
});


document.getElementById("close-btn").addEventListener("click", (event) => {
event.preventDefault();
  dialog.close();
});




document.getElementById("feni-donate").addEventListener("click", (event) => {
event.preventDefault();
  dialog.show();
});
document.getElementById("Noakhali-donate").addEventListener("click", (event) => {
event.preventDefault();
  dialog.show();
});