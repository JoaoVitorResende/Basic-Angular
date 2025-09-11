import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhapaginacomponentComponent } from './minhapaginacomponent.component';

describe('MinhapaginacomponentComponent', () => {
  let component: MinhapaginacomponentComponent;
  let fixture: ComponentFixture<MinhapaginacomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinhapaginacomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhapaginacomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
