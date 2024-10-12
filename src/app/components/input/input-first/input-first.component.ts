import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-first',
  standalone: true,
  imports: [],
  templateUrl: './input-first.component.html',
  styleUrl: './input-first.component.css'
})
export class InputFirstComponent {
  @Input('user-name') name: string = '';
}
