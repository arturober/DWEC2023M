import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, inject } from '@angular/core';

@Directive({
  selector: '[setColor]',
  standalone: true
})
export class SetColorDirective {
  @Input()
  set setColor(color: string) {
    this.bgColor = color;
  }

  @HostBinding('style.backgroundColor') bgColor!: string;
  @HostBinding('style.color') textColor!: string;

  @HostListener('click')
  changeTextColor() {
    this.textColor = this.textColor !== "white" ? "white" : "black";
  }
}
