import { Component } from "@angular/core";
import { timer } from "rxjs";



@Component({
  selector: 'app-samples-timer',
  templateUrl: './timer.component.html'
})
export class TimerSampleComponent {
  //let dateTime = new Date();

  startTime: Date = new Date();
  endTime: Date = null;//new Date();



  /**Пример использования setTimeOut */
  public sampleDelay() {
    this.startTime = new Date();

    console.log("timer");
    this.delay(10000);
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(this.setEndTime, ms));
  }
  setEndTime() {
    this.endTime = new Date();
    console.log(this.endTime);
  }


  public sampleObservible() {
    this.startTime = new Date();
    this.oberserableTimer();
  }
  
  oberserableTimer() {
    const source = timer(1000, 2000);
    let abc = source.subscribe(val => {
      if (val < 10) {
        console.log(val, '-');

      }
      else {
        this.endTime = new Date();
        console.log("End observible");
        abc.unsubscribe();
      }
    });
  }


  public sampleWait() {
    this.endTime = null;
    this.startTime = new Date();
    this.wait(5000);
    this.endTime = new Date();
  }
  wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }  
}
