import { Component } from '@angular/core';
import { GotHousesService } from '../services/got-houses.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-house-info',
  imports: [],
  templateUrl: './house-info.component.html',
  styleUrl: './house-info.component.scss'
})
export class HouseInfoComponent {

  houseInfoSub! : Subscription
  page!: any;
  houseDetails! : any;

  constructor(
    private gotHouseService : GotHousesService,
    private route : ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.page = params['page'];
      console.log("query param",this.page);
    });
    this.houseInfoSub = this.gotHouseService.getHouse(this.page).subscribe((value) => {
      this.houseDetails = value;
    });
  }

}
