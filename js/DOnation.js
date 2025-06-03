
// Noakhali Donation Section
document.getElementById('Noakhali-donate').addEventListener('click',function(event){
   
    const donationAmount1  =getTextById('Noakhali-money');
  
const totalAmount = getTextById('main-money');
    const NoakhaliInput = getInputById('Noakhali-input');
if(totalAmount >= NoakhaliInput && Number.isInteger(NoakhaliInput) && NoakhaliInput>=1){
document.getElementById('Noakhali-money').innerText =NoakhaliInput + donationAmount1;
document.getElementById('main-money').innerText = totalAmount - NoakhaliInput;
event.preventDefault();
  dialog.show();


// History Section
const date = new Date();
const formatdate = date.toString();
        // Save to history
        const historyDiv = document.createElement('div');
        historyDiv.classList.add('rounded-2xl','border','border-gray-300','container','mx-auto','p-4','mb-4');
        historyDiv.innerHTML = `

            <p class="text-2xl font-bold">${NoakhaliInput} Taka is Donated for Flood at Noakhali, Bangladesh </p>
            <p>${formatdate}</p>
        `;
        document.getElementById('history-page').prepend(historyDiv);

        // Optionally clear input
        document.getElementById('Noakhali-input').value = '';


}
else{
    alert('Please enter a valid amount greater than 0 and less than the total amount available.');
}
})


// Feni donation Section
document.getElementById('feni-donate').addEventListener('click',function(event){
    // event.preventDefault();
    const donationAmount2 = getTextById('feni-money');
    
const totalAmount = getTextById('main-money');
    const feniInput = getInputById('feni-input');
    if(totalAmount>=feniInput && Number.isInteger(feniInput) && feniInput>=1){
        document.getElementById('feni-money').innerText =  feniInput + donationAmount2;
        document.getElementById('main-money').innerText = totalAmount - feniInput;
        event.preventDefault();
  dialog.show();

        // History Section
        const date = new Date();
        const formatdate = date.toString();
        // Save to history
        const historyDiv = document.createElement('div');   
        historyDiv.classList.add('rounded-2xl','border','border-gray-300','container','mx-auto','p-4','mb-4');
        historyDiv.innerHTML = `
            <p class="text-2xl font-bold">${feniInput} Taka is Donated for Flood at Feni, Bangladesh </p>
            <p>${formatdate}</p>
        `;

             document.getElementById('history-page').prepend(historyDiv);
             document.getElementById('feni-input').value = '';
    }

    else{
    alert('Please enter a valid amount greater than 0 and less than the total amount available.');
}
    
})

// Qouta movement Section

document.getElementById('qouta-donate').addEventListener('click',function(event){
    
    const donationAmount3  =getTextById('qouta-money');
  
const totalAmount = getTextById('main-money');
    const QoutaInput = getInputById('qouta-input');
if(totalAmount >= QoutaInput && Number.isInteger(QoutaInput) && QoutaInput>=1){
document.getElementById('qouta-money').innerText =QoutaInput + donationAmount3;
document.getElementById('main-money').innerText = totalAmount - QoutaInput;
event.preventDefault();
  dialog.show();


// History Section
const date = new Date();
const formatdate = date.toString();
        // Save to history
        const historyDiv = document.createElement('div');
        historyDiv.classList.add('rounded-2xl','border','border-gray-300','container','mx-auto','p-4','mb-4');
        historyDiv.innerHTML = `

            <p class="text-2xl font-bold">${QoutaInput} Taka is Donated for Injured in the Quota Movement </p>
            <p>${formatdate}</p>
        `;
        document.getElementById('history-page').prepend(historyDiv);

        // Optionally clear input
        document.getElementById('qouta-input').value = '';


}
else{
    alert('Please enter a valid amount greater than 0 and less than the total amount available.');
}
})






document.getElementById('donation-btn').addEventListener('click', function(event) {
document.getElementById('donation-page').style.display = 'block';
document.getElementById('history-page').style.display = 'none';

});

document.getElementById('history-btn').addEventListener('click', function(event) {
    document.getElementById('history-page').style.display = 'block';
document.getElementById('donation-page').style.display = 'none';


});

