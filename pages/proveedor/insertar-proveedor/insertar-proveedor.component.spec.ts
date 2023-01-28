import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarProveedorComponent } from './insertar-proveedor.component';

describe('InsertarProveedorComponent', () => {
  let component: InsertarProveedorComponent;
  let fixture: ComponentFixture<InsertarProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarProveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
