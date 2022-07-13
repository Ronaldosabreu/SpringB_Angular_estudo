/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListParkingComponent } from './list-parking.component';

describe('ListParkingComponent', () => {
  let component: ListParkingComponent;
  let fixture: ComponentFixture<ListParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
