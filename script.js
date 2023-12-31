const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const consentForm = document.getElementById('consent-form');
const modalText = document.getElementById('modal-text');
const declineBtn = document.getElementById('decline-btn');
const modalChoiceBtns = document.getElementById('modal-choice-btns');

setTimeout(function() {
  modal.style.display = 'inline'
}, 1500);


modalCloseBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});


declineBtn.addEventListener('mouseenter', function() {
modalChoiceBtns.classList.toggle('modal-btns-reverse');
});



consentForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const consentFormData = new FormData(consentForm);
  const fullName = consentFormData.get('fullName');

  modalText.innerHTML = `
  <div class="modal-inner-loading">
  <img type="image/svg+xml" src="https://svgshare.com/i/yoa.svg" class="loading">
  <p id="upload-text">uploading data...</p>
  </div>
  `;

  setTimeout(function () {
    document.getElementById('upload-text').innerHTML = `
    making the sale...
    `
  }, 1500);

  setTimeout(function () {
    document.getElementById('modal-inner').innerHTML = `
   <h2> thanks <span class="modal-display-name">${fullName}</span></h2>
   <div class="idiot-gif">
    <img src="https://i.postimg.cc/brhMJKRh/pirate.gif">
   </div>
    `;
    modalCloseBtn.disabled = false;
  }, 3000);
})


