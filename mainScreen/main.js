
/* view more picture button */
function viewMore() {
  const gallery2 = document.querySelector(".gallery2");
  gallery2.style.display = "grid";
}

/* Show modal windows f */
function sendMessageModal() {
  const dialog = document.querySelector("#dialog");
  dialog.showModal();
}

/* Close modal window f */
function closeModal()
{
    const closeModal = document.querySelector('#clodeModal')
    closeModal.closeModal()
}



let count = document.querySelector('#count')

function showCartModal()
{   
  let amount = count.textContent
  if(amount == 0)
  {
    const cartDialog = document.querySelector('#cart_dialog')
    cartDialog.showModal()
  }
  else{
    const cartDialog2 = document.querySelector('.cart_dialog2')
    cartDialog2.showModal()
  }
  
}

/* Add product to the basket */

// increase baskets count
function increaseCount()
{
  count.textContent++
}
let basket  = {}

// total amount 
function totalSum()
{

}

