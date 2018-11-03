import { Component, OnInit } from '@angular/core';
import { Electronic } from '../electronic';
import { ElectronicService } from '../electronic.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  electronics: Electronic[] = [];

  constructor(private electronicService: ElectronicService) { }

  ngOnInit() {
    this.getElectronics();
  }

  getElectronics(): void {
    this.electronicService.getElectronics()
      .subscribe(electronics => this.electronics = electronics.slice(0, 4));
  }
}