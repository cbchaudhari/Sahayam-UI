import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SahayamDailogComponent } from './sahayam-dailog.component';

describe('SahayamDailogComponent', () => {
  let component: SahayamDailogComponent;
  let fixture: ComponentFixture<SahayamDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SahayamDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SahayamDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
