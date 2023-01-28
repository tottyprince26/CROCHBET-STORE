import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { CarritoModule } from 'src/app/modules/carrito/carrito.module';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

    rol:string='';

  miCarrito=CarritoModule;
  constructor(private spinner:NgxSpinnerService,public dialogRef: MatDialogRef<CarritoComponent>,
    private router:Router,
    private route:ActivatedRoute, 
    @Inject(MAT_DIALOG_DATA) public data:string) {this.rol=this.data}

  ngOnInit(): void {
    this.initConfig();
    console.log(this.miCarrito.geTotalCarrito());
  }

  closeDialog() {
    this.dialogRef.close();
  }

  mostrarPasarela(){
    this.dialogRef.close();
    this.router.navigate(['pasarela']);
  }


  //Paypal Checkout !

  addScript: boolean = false;

  finalAmount: number=1;

  paypalConfig={
    env:"sandbox",
    Client:{
      sandbox:'',
      production:''
    }

  }



  //paypal
  
  public payPalConfig ? : IPayPalConfig;

  private initConfig(): void {
    let total:string=(((this.miCarrito.geTotalCarrito()*0.054)+0.3)+this.miCarrito.geTotalCarrito()).toFixed(2).toString();


    this.payPalConfig = {
        currency: 'EUR',
        clientId: 'AVXXg2veS19mhrbPoUX1NAKtdF8EPJfrBD3w1NVbDB00oyiCt5t8OKYUSrCpBJcvxxpqRhiT-8UYn2LB',
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'EUR',
                    value: total,
                    breakdown: {
                        item_total: {
                            currency_code: 'EUR',
                            value: total
                        }
                    }
                },
                items: [{
                    name: 'Enterprise Subscription',
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'EUR',
                        value: total,
                    },
                }]
            }]
        },
        advanced: {
            commit: 'true',
            extraQueryParams: [ { name: "disable-funding", value:"credit,card"} ] 
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            this.spinner.show();
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then((details: any) => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });

        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
            this.spinner.hide();
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
            

        },
        onError: err => {
            console.log('OnError', err);
            
        },
        onClick: (data, actions) => {
            if(total=='0.30'){
                total='0.00';
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No hay productos en el carrito!',
                    });
            }
            if (this.rol=='invitado'){
                Swal.fire({
                    icon: 'error',
                    title: 'Alto ahí!',
                    text: 'Debes estar registrado para realizar la compra!',
                    });
            }else{
                console.log('onClick', data, actions);
            }
        }
    };
}


}
