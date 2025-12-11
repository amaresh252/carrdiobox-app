import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTraining } from './personal-training';

describe('PersonalTraining', () => {
  let component: PersonalTraining;
  let fixture: ComponentFixture<PersonalTraining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalTraining]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalTraining);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
