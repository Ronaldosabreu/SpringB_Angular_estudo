import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListParkingComponent } from './list-parking/list-parking.component';
import { ParkingComponent } from './Parking/Parking.component';

const routes: Routes = [
  { path: 'add', component: ParkingComponent },
  { path: 'list', component: ListParkingComponent },
  { path: '', component: ParkingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingSpotRoutingModule { }
