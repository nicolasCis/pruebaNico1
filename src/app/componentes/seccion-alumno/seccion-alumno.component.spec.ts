import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionAlumnoComponent } from './seccion-alumno.component';

describe('SeccionAlumnoComponent', () => {
  let component: SeccionAlumnoComponent;
  let fixture: ComponentFixture<SeccionAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
