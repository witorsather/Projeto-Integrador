import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agenda';

  public contato:Contato = new Contato()

  public contatos: Contato[] = [];

  salvar(){
    this.contatos.push(this.contato);
    this.contato = new Contato();
    console.log(`funcionou Nome: ${this.contato.nome}`);
  }
}

export class Contato{
  public nome: string = ""
  public telefone: string = ""
  public endereco: string = ""
}