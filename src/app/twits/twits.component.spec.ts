/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TwitsComponent } from './twits.component';

describe('TwitsComponent', () => {
  let component: TwitsComponent;
  let fixture: ComponentFixture<TwitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
