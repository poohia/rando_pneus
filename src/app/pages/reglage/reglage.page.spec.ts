import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReglagePage } from './reglage.page';

describe('ReglagePage', () => {
  let component: ReglagePage;
  let fixture: ComponentFixture<ReglagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReglagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
