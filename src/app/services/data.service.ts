import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSubject = new BehaviorSubject<string>('Hola Mundo');

  constructor() { }

  get message() {
    return this.messageSubject.asObservable();
  }

  setMessage(message: string) {
    const newMessage = (message) ? message : 'Empty'; 
    this.messageSubject.next(newMessage)
  }

}
