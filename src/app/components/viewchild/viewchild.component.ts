import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ViewchildChildComponent } from './viewchild-child/viewchild-child.component';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [ViewchildChildComponent],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent implements AfterViewInit {
  @ViewChild(ViewchildChildComponent) child: ViewchildChildComponent = new ViewchildChildComponent;

  username = 'empty'

  ngAfterViewInit(): void {
    this.username = this.child.username;
  }

  getValue() {
    this.username = this.child.username;
  }

}
