import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BotService } from 'src/app/services/bot/bot.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  
  constructor(public http:HttpClient) { }

  estado='desactivado';

  mensaje: string = '';
  mensajes: string = '';
  sendMessage() {
    let respuesta=new BotService(this.http);
    respuesta.getResponse(this.mensaje).subscribe((data:any)=>{
      console.log(data);
      this.mensajes+='\n'+'[karen]: '+this.mensaje+'\n'+'[bot]: '+data;
    });
    console.log(this.mensajes);
  }
  cambiarEstado(){
    if(this.estado=='desactivado'){
      this.estado='activado';
    }else{
      this.estado='desactivado';
      this.mensajes='';
      this.mensaje='';
    }
  }
}
