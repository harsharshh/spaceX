import {HttpParams} from '@angular/common/http';
import * as _moment from 'moment';

let moment = _moment;


export class RequestUtility {
  public static createRequestOption(req?: any): HttpParams {
    let options: HttpParams = new HttpParams();
    if (req) {
      Object.keys(req).forEach(key => {
        if (key !== 'filter' && key !== 'sort' && !(req[key] == null || req[key] === '')) {
          options = options.set(key, req[key]);
        }
      });
      if (req.sort) {
        if (!(req.sort.val == null || req.sort.val === '')) {
          options = options.append('sort', req.sort.val);
        }
      }

      if (req.filter && req.filter.length > 0) {
        req.filter.forEach(filterPair => {
          if (!(filterPair.value == null || filterPair.value === '')) {
            if (filterPair.value instanceof Array && filterPair.value.length === 0) {
              return;
            }
            if (filterPair.value instanceof Date) {
              filterPair.value = moment(filterPair.value).format('YYYY-MM-DD');
            }
            options = options.append(filterPair.key, filterPair.value);
          }
        });
      }
    }
    return options;
  }
}
