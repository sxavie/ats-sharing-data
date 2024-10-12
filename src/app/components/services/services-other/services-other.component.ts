import { Component, DestroyRef, OnDestroy, OnInit, inject } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Subject, Subscription, take, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-services-other',
  standalone: true,
  imports: [],
  templateUrl: './services-other.component.html',
  styleUrl: './services-other.component.css'
})
export class ServicesOtherComponent implements OnInit, OnDestroy {
  
  private dataService = inject(DataService);
  private destroyRef: DestroyRef = inject(DestroyRef);
  
  messageSubscription: Subscription = new Subscription()
  destroyed: Subject<boolean> = new Subject();

  messageString = '';
  message$ = this.dataService.message;

  ngOnInit(): void {
    this.messageSubscription = this.message$
    .pipe(
      // takeUntil(this.destroyed)
      takeUntilDestroyed(this.destroyRef)
    )
      .subscribe(message => {
        console.log('subscripcion a message$')
        this.messageString = message;
      });
  }

  ngOnDestroy(): void {
    // this.messageSubscription.unsubscribe();
    // this.destroyed.next(true)
    // this.destroyed.complete();
  }

}
