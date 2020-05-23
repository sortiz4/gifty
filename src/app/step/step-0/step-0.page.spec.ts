import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Step0Page } from './step-0.page';

describe('Step0Page', () => {
  let component: Step0Page;
  let fixture: ComponentFixture<Step0Page>;

  beforeEach(async(() => {
    const config = {
      declarations: [
        Step0Page,
      ],
      imports: [
        IonicModule.forRoot(),
      ],
    };
    TestBed.configureTestingModule(config).compileComponents();

    fixture = TestBed.createComponent(Step0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
