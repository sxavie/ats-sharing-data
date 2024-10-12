import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-output-second',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './output-second.component.html',
  styleUrl: './output-second.component.css'
})
export class OutputSecondComponent {
  @Output() lastnameEmitter = new EventEmitter<string>();

  lastname = '';

  sendLastnameToParent() {
    this.lastnameEmitter.emit(this.lastname);
  }

}
