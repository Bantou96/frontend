import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../counter.service';
import { Observable } from 'rxjs';
import { Counter } from '../counter';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() position: number;

  value: Counter;

  constructor(public counterService: CounterService) { }

  ngOnInit() {
    console.log("call counter")
    this.counterService.getCounterValue(this.position)
          .subscribe(counter => this.value = counter) 
         
  }

  increment() {
    if(this.position == 1) this.counterService.increment(59).subscribe(counter => this.value = counter);
    if(this.position == 2) this.counterService.increment(60).subscribe(counter => this.value = counter);
    if(this.position == 3) this.counterService.increment(61).subscribe(counter => this.value = counter);
  }

}