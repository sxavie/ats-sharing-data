import { Component } from '@angular/core';
import { InputFirstComponent } from './input-first/input-first.component';
import { InputSecondComponent } from './input-second/input-second.component';

const COMPONENTS = [
  InputFirstComponent,
  InputSecondComponent,
]

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [COMPONENTS],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  user = {
    name: 'Santiago',
    lastName: 'Hernandez'
  }
}
