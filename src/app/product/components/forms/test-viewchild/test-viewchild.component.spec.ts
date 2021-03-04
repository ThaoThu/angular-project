import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestViewchildComponent } from './test-viewchild.component';

describe('TestViewchildComponent', () => {
  let component: TestViewchildComponent;
  let fixture: ComponentFixture<TestViewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestViewchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
