import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CarParkingDialogComponent } from './car-parking-dialog/car-parking-dialog.component';

@Component({
  selector: 'app-Parking',
  templateUrl: './Parking.component.html',
  styleUrls: ['./Parking.component.css']
})
export class ParkingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  
  addCarParking(): void {
    const dialogRef = this.dialog.open(CarParkingDialogComponent, {
      minWidth: '400px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}
