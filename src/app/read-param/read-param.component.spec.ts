import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadParamComponent } from './read-param.component';

describe('ReadParamComponent', () => {
  let component: ReadParamComponent;
  let fixture: ComponentFixture<ReadParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadParamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
