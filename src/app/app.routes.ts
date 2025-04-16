import { Routes } from '@angular/router';
import { GotHomeComponent } from './got-home/got-home.component';
import { HouseInfoComponent } from './house-info/house-info.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '', title: 'GOT HOME', component: GotHomeComponent
    },
    { 
        path: 'house-info', title: 'House Info', component: HouseInfoComponent 
    },
    {
        path: '**', title: 'Page Not Found', component: NotFoundComponent
    }
];
