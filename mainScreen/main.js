



/* Show modal windows SEND A MESSAGE */
function sendMessageModal() {
  const dialog = document.querySelector("#dialog");
  dialog.showModal();
}

/* Close modal window SEND A MESSAGE */
function closeModal() {
  const closeModal = document.querySelector("#closeModal");
  closeModal.closeModal();
}


/* Cart modal */
let count = document.querySelector("#count");

function showCartModal() {
  let amount = count.textContent;
  if (amount == 0) {
    const cartDialog = document.querySelector("#cart_dialog");
    cartDialog.showModal();
  } else {
    const cartDialog2 = document.querySelector(".cart_dialog2");
    cartDialog2.showModal();
  }
}

/* Add product to the basket */

// increase baskets count
function increaseCount() {
  count.textContent++;
}

