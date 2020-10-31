import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailStructureComponent } from './email-structure.component';

describe('EmailStructureComponent', () => {
  let component: EmailStructureComponent;
  let fixture: ComponentFixture<EmailStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
