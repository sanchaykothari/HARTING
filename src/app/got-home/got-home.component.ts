import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { GotHousesService } from '../services/got-houses.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-got-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './got-home.component.html',
  styleUrl: './got-home.component.scss'
})
export class GotHomeComponent implements OnInit, OnDestroy  {

  page = 1;// represents the current page number for pagination.
  limit = 25; // represents the number of items to load per page.
  isLoading:boolean = false;
  bestHouses : any[] = [];
  subHouseList! : Subscription;
;
  constructor(
    private gotHouseService : GotHousesService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loadItems();
    
  }

  @HostListener('window:scroll',['$event'])
  onWindowScroll(event:any){
    
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight&&!this.isLoading){
      this.loadItems();
    }
  }

  loadItems() {
    this.isLoading=true;
    this.subHouseList = this.gotHouseService.getUser(this.page, this.limit).subscribe({
      next: (data) => {
        this.bestHouses.push(...data);
        this.page++;
        this.isLoading = false;
      }
    });
  }
  toDetailsPage(index: any){
    console.log(index + 1);
    this.router.navigate(['/house-info'], { queryParams: {page: index + 1}});
  }
  ngOnDestroy(){
    this.subHouseList.unsubscribe();
  }
}
