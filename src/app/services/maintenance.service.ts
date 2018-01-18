import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Maintenance} from "../models/maintenance.model";
import {environment} from "../../environments/environment";

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
        this.maintenanceForOneFacility = this.allMaintenance.filter(x => x.sportsFacility === facilityid);
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

  postSingleMaintenance(maintenance:Maintenance){
    return this.http.post(this.maintenenceUrl,maintenance)
      .toPromise()
      .then(res => {
        console.log('Post succesvol: '+res)
      })
      .catch(error => {
        return this.handleError(error);
      })
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
