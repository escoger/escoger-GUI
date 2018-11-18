import { Component, OnInit, Input } from '@angular/core';
import { Electronic } from '../electronic';
import { Mobile } from '../mobile';
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
  @Input() mobile: Mobile;
  constructor(
  private route: ActivatedRoute,
  private electronicService: ElectronicService,
  private location: Location
  ) { }

  ngOnInit() {
  this.getMobiles();
}

getElectronic(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.electronicService.getElectronic(id)
    .subscribe(electronic => this.electronic = electronic);
}
getMobiles(): void {
  console.log("hello");
  console.log(this.electronicService.getMobiles().subscribe(mobile => this.mobile = mobile));
}
goBack(): void {
  this.location.back();
}
}
