import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditParkingSpotComponent } from './edit-parking-spot/edit-parking-spot.component';
import { ListParkingComponent } from './list-parking/list-parking.component';
import { ParkingComponent } from './Parking/Parking.component';

const routes: Routes = [
  { path: 'add', component: ParkingComponent },
  { path: 'list', component: ListParkingComponent },
  { path: '', component: ParkingComponent},
  { path: 'editCar/:id/:teste', component: EditParkingSpotComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingSpotRoutingModule { }
