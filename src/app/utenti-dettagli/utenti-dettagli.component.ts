import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Utente } from 'src/utente';
import { EventEmitter } from '@angular/core';
import { UtentiServiceService } from '../utenti-service.service';

@Component({
  selector: 'app-utenti-dettagli',
  templateUrl: './utenti-dettagli.component.html',
  styleUrls: ['./utenti-dettagli.component.css']
})
export class UtentiDettagliComponent implements OnInit {

  detailsCheckout = this.formBuilder.group({
    first_name: '',
    last_name: ''
  });

  userToShowId?: number;
  showDetails = false;

  @Input() utente!: Utente;
  @Output() notify = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private utentiService: UtentiServiceService,
  ) { 

  }

  ngOnInit(): void {
  }

  openUpdateForm(): void {
    console.log("aperto" + this.utente.user_id);
    this.showDetails = !this.showDetails;
  }

  test(utente: Utente) {
    console.log(utente);
  }

}
