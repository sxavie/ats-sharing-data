import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.css'
})
export class ChipComponent implements AfterViewInit {
  @Input() text: string = '';
  @ViewChild('chip') chip!: ElementRef

  ngAfterViewInit() {
    switch (this.text) {
      case 'decorator':
        this.chip.nativeElement.style.backgroundColor = '#e57373';
        break;
      case 'class':
        this.chip.nativeElement.style.backgroundColor = '#81c784';
        break;
      case 'sec':
        this.chip.nativeElement.style.backgroundColor = '#ffd54f';
        break;
      case 'dep':
        this.chip.nativeElement.style.backgroundColor = '#ba68c8';
        break;
      default:
        this.chip.nativeElement.style.backgroundColor = '#64b5f6';
        break;
    }
  }
}


