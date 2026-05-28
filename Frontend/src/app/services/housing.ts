import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { iProperty } from '../property/iProperty.interface';
import { property } from '../model/property';
import { iproperty } from '../model/iproperty';
import { iPropertyBase } from '../model/Ipropertybase';

@Injectable({
  providedIn: 'root',
})
export class Housing {
  constructor(private http: HttpClient) {}
  getProperty(id: number): Observable<property> {
  return this.getAllProperties().pipe(
    map(propertiesArray => {
      return propertiesArray.find(p => Number(p.Id) === id) ?? new property();
    })
  );
}
  getAllProperties(SellRent?: number): Observable<property[]> {
  return this.http.get<any>('assets/data/properties.json').pipe(
    map(data => {
      const propertiesArray: Array<property> = [];
      const localProperties = JSON.parse(localStorage.getItem('newProp')!);
      if (localProperties) {
        for (const id in localProperties) {
          if(SellRent)
          {
            if (localProperties.hasOwnProperty(id) &&Number(localProperties[id]['SellRent']) === SellRent)
            {
              propertiesArray.push(localProperties[id]);
            }
          }
          else{
            propertiesArray.push(localProperties[id]);
          }
        }
      }

      for (const id in data) {
        if(SellRent){
          if (data.hasOwnProperty(id) && Number(data[id]['SellRent']) === SellRent)
          {
            propertiesArray.push(data[id]);
          }
        }
        else{
          propertiesArray.push(data[id]);
        }
      }
      return propertiesArray;
    })
  );
  return this.http.get<property[]>('data/properties.json');
}
  addProperty(property:property){
    let newProp=[property];
    const existingProps = localStorage.getItem('newProp');
    if(existingProps){
      newProp=[property,...JSON.parse(existingProps)];
    }
    localStorage.setItem('newProp',JSON.stringify(newProp));
  }
  newPropId(): number {
    if (localStorage.getItem('PID')) {
      const newId = +localStorage.getItem('PID')! + 1;
      localStorage.setItem('PID', String(newId));
      return newId;
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
}
