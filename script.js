

function openModal(modalNome){
  let dialog = document.getElementById(modalNome)
  dialog.showModal()
}

function  hideModal(modalNome){
  let dialog = document.getElementById(modalNome)
  dialog.close()
}