import { Component } from '@angular/core';
import { OutputFirstComponent } from './output-first/output-first.component';
import { OutputSecondComponent } from './output-second/output-second.component';
import { OutputThirdComponent } from './output-third/output-third.component';

const COMPONENTS = [
  OutputFirstComponent,
  OutputSecondComponent,
  OutputThirdComponent
]

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [COMPONENTS],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {

}
