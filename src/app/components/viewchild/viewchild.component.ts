import { Component } from '@angular/core';
import { ViewchildChildComponent } from './viewchild-child/viewchild-child.component';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [ViewchildChildComponent],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent {


}
