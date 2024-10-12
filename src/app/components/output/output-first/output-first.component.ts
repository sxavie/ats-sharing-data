import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-output-first',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './output-first.component.html',
  styleUrl: './output-first.component.css'
})
export class OutputFirstComponent {
  @Output() nameEmitter: EventEmitter<string> = new EventEmitter()

  name = '';

  sendNameToParent() {
    this.nameEmitter.emit(this.name)
  }

}
