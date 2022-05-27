import { Injectable } from '@angular/core';
import { HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylesService {
  modalSelector = ".modal"
  constructor(modalSelector, openModalBtn, closeModalBtn) {

    var openmodal = document.querySelectorAll(openModalBtn) 
    for (var i = 0; i < openmodal.length; i++) {
      var that = this
      openmodal[i].addEventListener('click', function (event) {
        event.preventDefault()
        that.openModal()
      })
    }

    // close modal on overlay click
    const overlay = document.querySelector(modalSelector + " .modal-overlay")
    overlay.addEventListener('click', this.closeModal)

    // close modal on close btn click
    var closemodal = document.querySelectorAll(closeModalBtn)
    for (var i = 0; i < closemodal.length; i++) {
      closemodal[i].addEventListener('click', this.closeModal)
    }
  }

  // close modal on esc press
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    {
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
    modal.classList.add('opacity-0')
    modal.classList.add('pointer-events-none')
    body.classList.remove(".modal-active")
  }
}
