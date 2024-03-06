import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerEditComponent } from './engineer-edit.component';

describe('EngineerEditComponent', () => {
  let component: EngineerEditComponent;
  let fixture: ComponentFixture<EngineerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngineerEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
