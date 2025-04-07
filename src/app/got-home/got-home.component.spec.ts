import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotHomeComponent } from './got-home.component';

describe('GotHomeComponent', () => {
  let component: GotHomeComponent;
  let fixture: ComponentFixture<GotHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GotHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GotHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
