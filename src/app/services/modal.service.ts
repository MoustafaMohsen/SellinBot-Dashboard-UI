export class ModalService {
  modalSelector = ".modal"
  constructor(modalSelector:string, closeOnOverlay = true) {
    this.modalSelector = modalSelector

    // close modal on overlay click
    if (closeOnOverlay) {
      const overlay = document.querySelector(modalSelector + " .modal-overlay")
      overlay?.addEventListener('click', ()=>{
        this.closeModal()
      })
    }

  }

  // close modal on esc press
  // @HostListener('document:keypress', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent) {
  //   {
  //     console.log("handleKeyboardEvent()",event.key)
  //     var isEscape = event.key === "Esc"
  //     if (isEscape && document.body.classList.contains(".modal-active")) {
  //       this.closeModal()
  //     }
  //   };
  // }

  openModal(){
    const modal = document.querySelector(this.modalSelector)
    const body = document.querySelector('body')
    modal.classList.remove('opacity-0')
    modal.classList.remove('pointer-events-none')
    body.classList.add(".modal-active")

  }

  closeModal(){
    const modal = document.querySelector(this.modalSelector)
    const body = document.querySelector('body')
    modal.classList.add('opacity-0')
    modal.classList.add('pointer-events-none')
    body.classList.remove(".modal-active")
  }
}
