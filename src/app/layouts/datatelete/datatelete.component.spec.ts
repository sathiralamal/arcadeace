import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatateleteComponent } from './datatelete.component';

describe('DatateleteComponent', () => {
  let component: DatateleteComponent;
  let fixture: ComponentFixture<DatateleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatateleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatateleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
