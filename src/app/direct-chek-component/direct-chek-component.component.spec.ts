import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectChekComponentComponent } from './direct-chek-component.component';

describe('DirectChekComponentComponent', () => {
  let component: DirectChekComponentComponent;
  let fixture: ComponentFixture<DirectChekComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectChekComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectChekComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
