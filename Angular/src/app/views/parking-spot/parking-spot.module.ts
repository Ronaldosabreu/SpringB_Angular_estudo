import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkingSpotRoutingModule } from './parking-spot-routing.module';
import { ListParkingComponent } from './list-parking/list-parking.component';
import { ParkingComponent } from './Parking/Parking.component';
import { MatTabsModule} from '@angular/material/tabs';
import { AddParkingComponent } from './add-parking/add-parking.component';
import { MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table' 
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarParkingDialogComponent } from './Parking/car-parking-dialog/car-parking-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    ListParkingComponent,
    ParkingComponent,
    AddParkingComponent,
    CarParkingDialogComponent
  ],
  imports: [
    CommonModule,
    ParkingSpotRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule
  ]
})
export class ParkingSpotModule { }
