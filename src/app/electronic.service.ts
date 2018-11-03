import { Injectable } from '@angular/core';
import { Electronic } from './electronic';
import { ELECTRONICS } from './mock-electronics';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElectronicService {
  private electronicsUrl = 'api/electronics';
  constructor(private http: HttpClient, private messageService: MessageService) { }

getElectronics(): Observable<Electronic[]> {
  return this.http.get<Electronic[]>(this.electronicsUrl);
}
getElectronic(id: number): Observable<Electronic> {
  return of(ELECTRONICS.find(electronic => electronic.id === id));
}

private log(message: string) {
  this.messageService.add(`ElectronicService: ${message}`);
}
}