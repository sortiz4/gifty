import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Step1Page } from './step-1.page';

describe('Step1Page', () => {
  let component: Step1Page;
  let fixture: ComponentFixture<Step1Page>;

  beforeEach(waitForAsync(() => {
    const config = {
      declarations: [
        Step1Page,
      ],
      imports: [
        IonicModule.forRoot(),
      ],
    };
    TestBed.configureTestingModule(config).compileComponents();

    fixture = TestBed.createComponent(Step1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
