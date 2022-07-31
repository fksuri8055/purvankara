var myIndex = 0
carousel()

function carousel() {
  var i
  var x = document.getElementsByClassName('mySlides')
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none'
  }
  myIndex++
  if (myIndex > x.length) {
    myIndex = 1
  }
  x[myIndex - 1].style.display = 'block'
  setTimeout(carousel, 2000) // Change image every 2 seconds
}


const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach((modal) => {
    closeModal(modal)
  })
})

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

// FORM
