import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Maintenance} from "../models/maintenance.model";
import {environment} from "../../environments/environment";
import {Maintenancee} from "../models/maintenancee.model";

@Injectable()
export class MaintenanceService{
  private allMaintenance: Maintenance[];
  private maintenanceForOneFacility: Maintenance[];
  private maintenance: Maintenance;
  private maintenenceUrl = environment.serverUrl+'/maintenances/';

  constructor(private http:Http){}

  getAllMaintenanceFromSingleFacility(facilityid: string){
        return this.http.get(this.maintenenceUrl)
          .toPromise()
          .then(res => {
            this.allMaintenance = res.json() as Maintenance[];

            console.log(this.allMaintenance);
            this.maintenanceForOneFacility = this.allMaintenance.filter(x =>  x.sportsFacility === facilityid);
            console.log(this.maintenanceForOneFacility);
        return this.maintenanceForOneFacility;
      })
      .catch(error => {
        return this.handleError(error);
      })
  }

  getSingleMaintenance(id:string){
    return this.http.get(this.maintenenceUrl+id)
      .toPromise()
      .then(res => {
        this.maintenance = res.json() as Maintenance;
        return res.json() as Maintenance;
      })
  }

  postSingleMaintenance(maintenance:Maintenancee){
    return this.http.post(this.maintenenceUrl,maintenance)
      .toPromise()
      .then(res => {
        console.log('Post succesvol: '+res)
      })
      .catch(error => {
        console.log(error+' ERRO!R!RRR');
        return this.handleError(error);
      })
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
