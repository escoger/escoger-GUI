import { Component, OnInit } from '@angular/core';
import { Electronic } from '../electronic';
import { ELECTRONICS } from '../mock-electronics';
import { ElectronicService } from '../electronic.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

   electronics : Electronic[];
   selectedElectronic: Electronic;
  constructor(private electronicService: ElectronicService) { }

  ngOnInit() {
    this.getElectronics();
  }

  getElectronics(): void {
  this.electronicService.getElectronics().subscribe(electronics => this.electronics = electronics);
  }
}
