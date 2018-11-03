import { Component, OnInit, Input } from '@angular/core';
import { Electronic } from '../electronic';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ElectronicService }  from '../electronic.service';
@Component({
  selector: 'app-electronic-detail',
  templateUrl: './electronic-detail.component.html',
  styleUrls: ['./electronic-detail.component.css']
})
export class ElectronicDetailComponent implements OnInit {
  @Input() electronic: Electronic;
  constructor(
  private route: ActivatedRoute,
  private electronicService: ElectronicService,
  private location: Location
  ) { }

  ngOnInit() {
  this.getElectronic();
}

getElectronic(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.electronicService.getElectronic(id)
    .subscribe(electronic => this.electronic = electronic);
}
goBack(): void {
  this.location.back();
}
}
