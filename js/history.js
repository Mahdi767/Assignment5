const history = document.getElementById('history-btn');
const donation = document.getElementById('donation-btn');


donation.addEventListener('click', function(event) {

  

donation.classList.add('bg-[#B4F461]', 'text-black')
donation.classList.remove('bg-transparent', 'border', 'text-gray-700', 'border-gray-300');


history.classList.add('bg-transparent', 'border', 'text-gray-700', 'border-gray-300');

history.classList.remove('bg-[#B4F461]', 'text-black');
});
history.addEventListener('click', function(event) {

    history.classList.add('bg-[#B4F461]', 'text-black')
    history.classList.remove('bg-transparent', 'border', 'text-gray-700', 'border-gray-300');

 
    donation.classList.add('bg-transparent', 'border', 'text-gray-700', 'border-gray-300');
   donation.classList.remove('bg-[#B4F461]', 'text-black');

});




// {/* <button id="donation-btn"
//   class="tab-btn bg-[#B4F461] text-black  rounded-md px-4 py-2 transition duration-300">
//   Donation
// </button>

// <button id="history-btn"
//   class="tab-btn bg-transparent border text-gray-700 border-gray-300   rounded-md px-4 py-2 transition duration-300">
//   History
// </button> */}