import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSelectionComponent } from './client-selection.component';

describe('ClientSelectionComponent', () => {
  let component: ClientSelectionComponent;
  let fixture: ComponentFixture<ClientSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
