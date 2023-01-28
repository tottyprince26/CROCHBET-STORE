import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarProductoComponent } from './insertar-producto.component';

describe('InsertarProductoComponent', () => {
  let component: InsertarProductoComponent;
  let fixture: ComponentFixture<InsertarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
