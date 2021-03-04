import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestViewchildChildComponent } from './test-viewchild-child.component';

describe('TestViewchildChildComponent', () => {
  let component: TestViewchildChildComponent;
  let fixture: ComponentFixture<TestViewchildChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestViewchildChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestViewchildChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
