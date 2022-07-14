import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Link, ParkingSpotModel } from 'src/app/shared/model/parking-spotModel.model';
import { ParkingService } from 'src/app/shared/service/parking.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-list-parking',
  templateUrl: './list-parking.component.html',
  styleUrls: ['./list-parking.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListParkingComponent implements OnInit {

  parkings: ParkingSpotModel[];

  parkingLoad: boolean=false;
  


  displayedColumns: string[] = ['id','parkingSpotNumber','responsibleName','actions'];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];


  constructor(public httpClient: HttpClient, public service: ParkingService
    , private cdref: ChangeDetectorRef) { }
  expandedElement = ParkingSpotModel;
  
  ngOnInit() 
  {
    this.getParkings();
  }

  getParkings()
    {
      // setTimeout(()=>
      // {
        this.service.getParkingWithPage(0,10).subscribe({
        next: (data: any) =>  { 
          this.parkings = data.content;  
         
        },
        complete: () => 
        { 
            this.parkingLoad = true;
         },
        error: (erro: Error) => {
            this.parkingLoad = true;
        }
        });


      // },0);
    }
    enviaPai()
    {
      this.parkings.push({
        apartment: '1',
        block: '1',
        brandCar: '1',
        colorCar: '1',
        licensePlateCar:'11',
        modelCar:'1',
        parkingSpotNumber:'1',
        responsibleName:'sss',
        id:'fsfsdfd',
        links: [{href:'',rel:''}]
      });
      this.parkings = [...this.parkings];//refresh the dataSource
    }
    
  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
    
}
