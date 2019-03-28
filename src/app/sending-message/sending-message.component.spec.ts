import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingMessageComponent } from './sending-message.component';

describe('SendingMessageComponent', () => {
  let component: SendingMessageComponent;
  let fixture: ComponentFixture<SendingMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendingMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendingMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
