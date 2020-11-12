import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperPortalComponent } from './developer-portal.component';

describe('DeveloperPortalComponent', () => {
  let component: DeveloperPortalComponent;
  let fixture: ComponentFixture<DeveloperPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
