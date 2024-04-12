// import { Directive, HostBinding, HostListener } from "@angular/core";


// @Directive({
//     selector: '[appDropdown]',
//     standalone: true
// })

// export class DropdownDirective {

//     @HostBinding('class.open') isOpen = false;

//     @HostListener('click') toggleOpen() {
//         this.isOpen = !this.isOpen;
//     }
// }



// ================================================================================================
// ================================================================================================
// ================================================================================================

// If you want that a dropdown can also be closed by a click anywhere outside (which also means that a click on one dropdown closes any other one, btw.), replace the code of dropdown.directive.ts by this one (placing the listener not on the dropdown, but on the document):


import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
 

@Directive({
  selector: '[appDropdown]',
  standalone: true
})


export class DropdownDirective {

  // @HostBinding permet de lier une propriété de la classe directive à une propriété de l'élément DOM sur lequel la directive est appliquée.
  // Ici, 'class.open' lie la propriété isOpen à la classe 'open' sur l'élément hôte.
  // Si isOpen est true, la classe 'open' est ajoutée à l'élément, sinon elle est retirée.
  @HostBinding('class.open') isOpen = false;


  // @HostListener permet d'écouter les événements sur l'élément hôte de la directive ou, dans ce cas, sur le document entier.
  // L'écouteur ici réagit aux clics sur le document. Lorsqu'un clic est détecté, la méthode toggleOpen est appelée avec l'événement de clic comme argument.
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    // Cette ligne vérifie si l'élément cliqué est à l'intérieur de l'élément hôte de la directive.
    // Si c'est le cas, isOpen est inversé (true devient false et vice versa).
    // Si le clic est en dehors de l'élément hôte, isOpen est mis à false, fermant ainsi le dropdown si il était ouvert.
    
    // --------------------------------------------------------------------------------------------
    // console.log(event.target);                 
    // event.target  -> élément sur lequel on a cliqué
    
    // console.log(this.elRef.nativeElement);
    // this.elRef.nativeElement -> élément hôte de la directive (élément sur lequel la directive "appDropdown" est appliquée)
    
    // console.log(this.elRef.nativeElement.contains(event.target));
    // this.elRef.nativeElement.contains(event.target) -> true si l'élément cliqué est à l'intérieur de l'élément hôte de la directive, sinon false
    // --------------------------------------------------------------------------------------------
    
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }


  // Le constructeur injecte ElementRef dans la directive. ElementRef est une référence à l'élément du DOM sur lequel la directive est appliquée.
  // Cela permet à la directive d'accéder directement à l'élément hôte et d'interagir avec lui.
  constructor(private elRef: ElementRef) {}

}



