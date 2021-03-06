/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViewCatalogComponent } from './view-catalog.component';

describe('ViewCatalogComponent', () => {
  let component: ViewCatalogComponent;
  let fixture: ComponentFixture<ViewCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
