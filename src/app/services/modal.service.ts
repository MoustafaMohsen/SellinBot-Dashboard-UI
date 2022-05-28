import { Injectable } from '@angular/core';
import { HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalSelector = ".modal"
  constructor(modalSelector, closeOnOverlay = true) {
    this.modalSelector = modalSelector

    // var openmodal = document.querySelectorAll(openModalBtn) 
    // for (var i = 0; i < openmodal.length; i++) {
    //   var that = this
    //   openmodal[i].addEventListener('click', function (event) {
    //     console.log("addEventListener Open modal",event.key)
    //     event.preventDefault()
    //     that.openModal()
    //   })
    // }

    // close modal on overlay click
    if (closeOnOverlay) {
      const overlay = document.querySelector(modalSelector + " .modal-overlay")
      overlay.addEventListener('click', ()=>{
        this.closeModal()
      })
    }

    // // close modal on close btn click
    // var closemodal = document.querySelectorAll(closeModalBtn)
    // for (var i = 0; i < closemodal.length; i++) {
    //   closemodal[i].addEventListener('click', this.closeModal)
    // }
  }

  // close modal on esc press
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    {
      console.log("handleKeyboardEvent()",event.key)
      var isEscape = event.key === "Esc"
      if (isEscape && document.body.classList.contains(".modal-active")) {        
        this.closeModal()
      }
    };
  }

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
    // console.log("closeModal()", this.modalSelector,modal)
    modal.classList.add('opacity-0')
    modal.classList.add('pointer-events-none')
    body.classList.remove(".modal-active")
  }
}
