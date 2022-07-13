import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ParkingService } from 'src/app/shared/service/parking.service';
import { ParkingComponent } from '../Parking.component';

@Component({
  selector: 'app-car-parking-dialog',
  templateUrl: './car-parking-dialog.component.html',
  styleUrls: ['./car-parking-dialog.component.css']
})
export class CarParkingDialogComponent implements OnInit {

public carForm: FormGroup;


  constructor(public dialogRef: MatDialogRef<CarParkingDialogComponent>,
    private fb: FormBuilder,
    private rest: ParkingService
    ) { }

  ngOnInit() {
    this.carForm = this.fb.group({
      parkingSpotNumber: ['teste', [Validators.required]],
      licensePlateCar:  ['teste', [Validators.required]],
      brandCar:  ['1', [Validators.required]],
      modelCar:  ['1', [Validators.required]],
      colorCar:  ['1', [Validators.required]],
      responsibleName:  ['1', [Validators.required]],
      apartment:  ['1', [Validators.required]],
      block:  ['1', [Validators.required]]
    })
  }

  cancel(): void 
  {
    this.dialogRef.close();
    this.carForm.reset();
    
  }
  createLive()
  {
    this.rest.postParking(this.carForm.value).subscribe(result=>{});
    this.dialogRef.close();
    this.carForm.reset();
    window.location.reload();
  }


            postItem(item: any)
            {
              this.rest.post(item).subscribe({
                next: () => { },
                error: (e) => {},
                complete: () => 
                { }
              }); 
            };

            updateItem(item: any) 
            {
              item.id = 1

              this.rest.update(item).subscribe({
                next: () => { },
                error: (e) => {},
                complete: () => 
                { 
                
                },
                
              });

          }

          deleteItem()
            {
              this.rest.delete("1").subscribe(() =>
              {
                alert("Removido com sucesso");
              });
            };
}
