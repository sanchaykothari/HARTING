import { Routes } from '@angular/router';
import { GotHomeComponent } from './got-home/got-home.component';
import { HouseInfoComponent } from './house-info/house-info.component';
export const routes: Routes = [
    {
        path: '', title: 'GOT HOME', component: GotHomeComponent
    },
    { 
        path: 'house-info', title: 'House Info', component: HouseInfoComponent 
    }
];
