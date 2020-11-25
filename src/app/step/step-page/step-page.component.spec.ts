import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { StepPageComponent } from './step-page.component';

describe('StepPageComponent', () => {
  let component: StepPageComponent;
  let fixture: ComponentFixture<StepPageComponent>;

  beforeEach(waitForAsync(() => {
    const config = {
      declarations: [
        StepPageComponent,
      ],
      imports: [
        IonicModule.forRoot(),
      ],
    };
    TestBed.configureTestingModule(config).compileComponents();

    fixture = TestBed.createComponent(StepPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
