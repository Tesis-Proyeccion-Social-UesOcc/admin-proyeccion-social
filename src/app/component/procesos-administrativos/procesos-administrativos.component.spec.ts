import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesosAdministrativosComponent } from './procesos-administrativos.component';

describe('ProcesosAdministrativosComponent', () => {
  let component: ProcesosAdministrativosComponent;
  let fixture: ComponentFixture<ProcesosAdministrativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesosAdministrativosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesosAdministrativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
