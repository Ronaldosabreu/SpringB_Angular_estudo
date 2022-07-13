/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddParkingComponent } from './add-parking.component';

describe('AddParkingComponent', () => {
  let component: AddParkingComponent;
  let fixture: ComponentFixture<AddParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
