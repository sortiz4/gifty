import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Step2Page } from './step-2.page';

describe('Step2Page', () => {
  let component: Step2Page;
  let fixture: ComponentFixture<Step2Page>;

  beforeEach(async(() => {
    const config = {
      declarations: [Step2Page],
      imports: [IonicModule.forRoot()],
    };
    TestBed.configureTestingModule(config).compileComponents();

    fixture = TestBed.createComponent(Step2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
