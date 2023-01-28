import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProveedorComponent } from './eliminar-proveedor.component';

describe('EliminarProveedorComponent', () => {
  let component: EliminarProveedorComponent;
  let fixture: ComponentFixture<EliminarProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
