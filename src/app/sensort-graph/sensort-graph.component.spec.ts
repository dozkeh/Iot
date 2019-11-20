import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensortGraphComponent } from './sensort-graph.component';

describe('SensortGraphComponent', () => {
  let component: SensortGraphComponent;
  let fixture: ComponentFixture<SensortGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensortGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensortGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
