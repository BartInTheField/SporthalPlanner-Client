import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Maintenance} from "../models/maintenance.model";

@Injectable()
export class maintenanceServer{
  private allMaintenance: Maintenance[];
  private maintenance: Maintenance;

  constructor(private http:Http){}

  getAllMaintenance(){
    return this.http.get('')
      .toPromise()
      .then(res => {
        this.allMaintenance = res.json() as Maintenance[];
        return res.json() as Maintenance[];
      })
      .catch(error => {
        return this.handleError(error);
      })
  }

  getSingleMaintenance(id:string){
    return this.http.get(''+id)
      .toPromise()
      .then(res => {
        this.maintenance = res.json() as Maintenance;
        return res.json() as Maintenance;
      })
  }

  postSingleMaintenance(maintenance:Maintenance){
    return this.http.post('',maintenance)
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
