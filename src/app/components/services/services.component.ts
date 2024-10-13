import { Component } from '@angular/core';
import { ServicesFirstComponent } from './services-first/services-first.component';
import { ServicesOtherComponent } from './services-other/services-other.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServicesFirstComponent, ServicesOtherComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
