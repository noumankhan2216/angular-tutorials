import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubsrcription!: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstObsSubsrcription = interval(1000).subscribe((index)=>{
    //   console.log(index)
    // })
    const customIntervalObervable = Observable.create( (observer: any) => {
      let count = 0;
      setInterval(()=>{
        observer.next(count)
        /* here complete error and next all three observer methods are called
        complete is just commented out to let the error mothod happen */

        // count === 2? observer.complete() : '';
        count > 3? observer.error(new Error('Count is greater 3!')) : ''
        count ++;
        
      }, 1000)
    })
    this.firstObsSubsrcription = customIntervalObervable.subscribe((data:any)=>{
      console.log(data)
    }, (err:any) => {
      console.log(err);
      alert(err.message)
    })
  }
  ngOnDestroy(): void {
    this.firstObsSubsrcription.unsubscribe()
  }


}
