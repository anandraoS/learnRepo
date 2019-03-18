import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KavitaComponent } from './kavita.component';

describe('KavitaComponent', () => {
  let component: KavitaComponent;
  let fixture: ComponentFixture<KavitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KavitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KavitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
