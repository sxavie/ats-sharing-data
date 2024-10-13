import { Component } from '@angular/core';
import { OutputFirstComponent } from './output-first/output-first.component';
import { OutputSecondComponent } from './output-second/output-second.component';
import { OutputThirdComponent } from './output-third/output-third.component';
import { ChipComponent } from "../../shared/chip/chip.component";

const COMPONENTS = [
  OutputFirstComponent,
  OutputSecondComponent,
  OutputThirdComponent
]

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [COMPONENTS, ChipComponent],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {

  nameValue = '';
  lastnameValue = '';

  readName(name: string) {
    this.nameValue = name;
  }

  readLastname(lastname: string) {
    this.lastnameValue = lastname;
  }

  get name() { return `${this.nameValue || 'Empty'} ${this.lastnameValue  || 'Empty'}` }

}
