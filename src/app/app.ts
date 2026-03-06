import { Component, signal } from '@angular/core';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  constructor(private confirmationDialogService : ConfirmationDialogService){}
  public openConfirmationDialog():void{
    this.confirmationDialogService.confirm(
      'Please confirm...',
      'Tem certeza?',
      'Sim',
      'Cancelar'
    ).then((resposta) => console.log('A resposta foi: ', resposta))
    .catch(()=>console.log('Usuário fechou o modal com ESC ou clicando fora'));
  }
}
