import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Counter } from './counter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public initialValue = [12, 6, 78];

  constructor(private httpClient: HttpClient) { }

  url = 'https://lp4asgadot.herokuapp.com/counters/'
  reset() {
    this.initialValue = [0, 0, 0];
  }

  increment(id:number): Observable<Counter>{
    
    this.httpClient.patch(this.url+id+".json",{"value" : 1}).subscribe();
    return this.httpClient.get<Counter>(this.url+id+".json");
}
  
  getCounterValue(id: number): Observable<Counter> {
    return this.httpClient.get<Counter>(this.url+"59.json")
  }
}
