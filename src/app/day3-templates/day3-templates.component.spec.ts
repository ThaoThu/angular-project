import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3TemplatesComponent } from './day3-templates.component';

describe('Day3TemplatesComponent', () => {
  let component: Day3TemplatesComponent;
  let fixture: ComponentFixture<Day3TemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3TemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3TemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
