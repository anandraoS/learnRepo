import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarComponentComponent } from './star-component.component';

describe('StarComponentComponent', () => {
  let component: StarComponentComponent;
  let fixture: ComponentFixture<StarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
