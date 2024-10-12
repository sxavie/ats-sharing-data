import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-services-first',
  standalone: true,
  imports: [FormsModule],
  providers: [],
  templateUrl: './services-first.component.html',
  styleUrl: './services-first.component.css'
})
export class ServicesFirstComponent {
  
  componentMessage = '';

  private dataService = inject(DataService)

  newMessage() {
    this.dataService.setMessage(this.componentMessage);
  }
}
