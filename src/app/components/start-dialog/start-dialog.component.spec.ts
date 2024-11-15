import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartDialogComponent } from './start-dialog.component';

describe('StartDialogComponent', () => {
  let component: StartDialogComponent;
  let fixture: ComponentFixture<StartDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
