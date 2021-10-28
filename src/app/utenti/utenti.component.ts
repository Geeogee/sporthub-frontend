import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/utente';
import { UtentiServiceService } from '../utenti-service.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {

  utenti : Utente [] = []; //Lo creo vuoto perchè prima mi serve il servizio;

  checkoutForm = this.formBuilder.group({
    name: '',
    lastname: ''
  });

  constructor(
    private utentiService: UtentiServiceService,
    private formBuilder: FormBuilder
  ) { }

  onSubmit() {

    let name = this.checkoutForm.get('name')?.value;
    let lastname = this.checkoutForm.get('lastname')?.value;
    let flag: number;

    let user: Utente = {
      "first_name": name,
      "last_name": lastname
    };

    this.utentiService.addNewUser(user).subscribe( data => {
      console.log(data);
      this.getUtenti();
    });
  }

  ngOnInit(): void {
    this.getUtenti();
    console.log(this.utenti);
  }

  getUtenti() : void{
     this.utentiService.getUtenti().subscribe( utenti => this.utenti=utenti);
  }

  deleteUser(user: Utente): void {

    this.utentiService.deleteUser(user).subscribe( () => {
      console.log("Utente cancellato");
      this.getUtenti();
    });
  }

  // test(utente: Utente): void {
  //   console.log(utente);
  // }

  updateUser(id: any): void {
    console.log(id);

  }

}
