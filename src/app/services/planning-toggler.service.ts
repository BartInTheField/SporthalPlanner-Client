import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PlanningTogglerService {

  public showingAllPlannings = new Subject<boolean>();
  public allPlanningsShowed = false;

  constructor() {
    this.showingAllPlannings.next(this.allPlanningsShowed);
  }

  public toggleAllPlannings() {
    if (this.allPlanningsShowed) {
      this.allPlanningsShowed = false;
      this.showingAllPlannings.next(this.allPlanningsShowed);
    } else {
      this.allPlanningsShowed = true;
      this.showingAllPlannings.next(this.allPlanningsShowed);
    }
  }
}
