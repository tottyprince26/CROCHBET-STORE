import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarClienteComponent } from './insertar-cliente.component';

describe('InsertarClienteComponent', () => {
  let component: InsertarClienteComponent;
  let fixture: ComponentFixture<InsertarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
