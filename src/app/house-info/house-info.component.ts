import { Component, OnDestroy, OnInit } from '@angular/core';
import { GotHousesService } from '../services/got-houses.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-house-info',
  imports: [CommonModule],
  templateUrl: './house-info.component.html',
  styleUrl: './house-info.component.scss'
})
export class HouseInfoComponent implements OnInit, OnDestroy {

  houseInfoSub!: Subscription
  page!: any;
  houseDetails!: any;
  swornMembersAPIs!: any;
  swornMembers!: any;
  emptyMembers : Boolean = false;
  isLoading:boolean = false;

  constructor(
    private gotHouseService : GotHousesService,
    private route : ActivatedRoute,
    private router : Router
  ){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.page = params['page'];
    });

    this.houseInfoSub = this.gotHouseService.getHouse(this.page).subscribe({
      next: (response) => {
        this.houseDetails = response
        this.swornMembersAPIs = this.houseDetails?.swornMembers;
        if(this.swornMembersAPIs.length > 0){
          this.emptyMembers = false;
          this.isLoading = true;
          this.gotHouseService.getMembers(this.swornMembersAPIs).subscribe({
            next: (response) => {
              this.isLoading = false;
              this.swornMembers = response;
            }
          })
        }else{
          this.emptyMembers = true;
        }
      },
      error: (e) => this.router.navigate(['**'])
    });
  }

  goBackfn(){
    this.router.navigate(['']);
  }

  ngOnDestroy(){
    this.houseInfoSub.unsubscribe();
  }

}
