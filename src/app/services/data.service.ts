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
    this.messageSubject.next(message)
  }

}
