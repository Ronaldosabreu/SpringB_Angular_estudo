import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-parking-spot',
  templateUrl: './edit-parking-spot.component.html',
  styleUrls: ['./edit-parking-spot.component.css']
})
export class EditParkingSpotComponent implements OnInit {

  public param: any;
  public param2: any;
  

  inp: any;
  
  //receber dado do Pai
  @Input() set inputObj(end: any) 
   {
    this.inp = end;
   }

  constructor(private route: ActivatedRoute
    , private cdref: ChangeDetectorRef) {
    
    this.route.params.subscribe(params => {
      this.param = params['id'],
      this.param2 = params['teste']
    }
      );
   }

  
   ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
  ngOnInit() {
    
    console.log(this.inputObj);
    
  }

}
