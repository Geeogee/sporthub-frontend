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

  utenti: Utente[] = []; //Lo creo vuoto perchè prima mi serve il servizio;

  checkoutForm = this.formBuilder.group({
    name: '',
    lastname: ''
  });

  constructor(
    private utentiService: UtentiServiceService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getUtenti();
    console.log(this.utenti);
  }

  getUtenti(): void {
    this.utentiService.getUtenti().subscribe(utenti => this.utenti = utenti);
  }

  deleteUser(user: Utente): void {
    this.utentiService.deleteUser(user).subscribe(() => {
      console.log("Utente cancellato");
      this.getUtenti();
    });
  }

}
