import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { window } from 'rxjs';

@Component({
  selector: 'app-pasarela-pago',
  templateUrl: './pasarela-pago.component.html',
  styleUrls: ['./pasarela-pago.component.css']
})
export class PasarelaPagoComponent {


  constructor( private router:Router) {}
  
  ngOnInit(): void {
    this.router.navigate(["pasarela"]);
  }
}
