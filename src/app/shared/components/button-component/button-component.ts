import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-button-component',
  imports: [],
  template: `
   <button (click)="handleClick()" [class]="class" [disabled]="disabled">
      {{ text }}
   </button>
  `
})
export class ButtonComponent implements OnInit {
  solidFrameStyle: string = 'btn btn-primary px-8 py-3 font-medium';
  regularFrameStyle: string = 'btn btn-outline px-8 py-3 font-medium';
  @Input() text: string = 'Default Text';
  @Input() disabled: boolean = false;
  @Input() regularFrame: boolean = false;
  @Input() class: string = '';
  @Output() onClick = new EventEmitter<void>();

  ngOnInit(): void {
    if (this.regularFrame) {
      this.class = this.regularFrameStyle;
    } else {
      this.class = this.solidFrameStyle;
    }
  }

  handleClick() {
    this.onClick.emit();
  }
}
