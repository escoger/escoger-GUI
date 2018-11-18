import { Injectable } from '@angular/core';
import { Electronic } from './electronic';
import { Mobile } from './mobile';
import { ELECTRONICS } from './mock-electronics';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElectronicService {
  private electronicsUrl = 'http://localhost:8089/mobiles/electronics';
  private mobileUrl = 'http://localhost:8089/mobiles/All';
  constructor(private http: HttpClient, private messageService: MessageService) { }

getElectronics(): Observable<Electronic[]> {
  return this.http.get<Electronic[]>(this.electronicsUrl);
}
getElectronic(id: number): Observable<Electronic> {
  return of(ELECTRONICS.find(electronic => electronic.id === id));
}

getMobiles(): Observable<Mobile> {
  return this.http.get<Mobile>(this.mobileUrl);
}

private log(message: string) {
  this.messageService.add(`ElectronicService: ${message}`);
}
}