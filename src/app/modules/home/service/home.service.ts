import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../../environments/environment";
import {RequestUtility} from '../utility/requestUtility';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {
  }

  isActionDone: boolean;
  private isActionDoneSource = new BehaviorSubject(this.isActionDone);
  isActionDoneResponse = this.isActionDoneSource.asObservable();
  private baseUrl = environment.BASE_URL;
  private spaceXUrl = this.baseUrl + '/v3/';

  getSpaceXData(req?): Observable<any> {
    const options = RequestUtility.createRequestOption(req);
    return this.http.get(this.spaceXUrl + 'launches', {params: options});
  }

  setActionDone(value) {
    this.isActionDoneSource.next(value);
  }


}
