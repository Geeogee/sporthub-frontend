import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Utente } from 'src/utente';
import { EventEmitter } from '@angular/core';
import { UtentiServiceService } from '../utenti-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-utenti-dettagli',
  templateUrl: './utenti-dettagli.component.html',
  styleUrls: ['./utenti-dettagli.component.css']
})
export class UtentiDettagliComponent implements OnInit {

  @Input() utente!: Utente;

  @Output() refresh = new EventEmitter();

  id!: number;

  detailsCheckout = this.formBuilder.group({
    name: '',
    lastname: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private utentiService: UtentiServiceService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('userId'));
    this.getUtente(this.id);
  }

  getUtente(id: number): void {
    this.utentiService.getUtente(id).subscribe(utente => {
      console.log(utente);
      this.detailsCheckout.get('name')?.setValue(utente.first_name);
      this.detailsCheckout.get('lastname')?.setValue(utente.last_name);
    });
  }

  updateUser() {

    let name = this.detailsCheckout.get('name')?.value;
    let lastname = this.detailsCheckout.get('lastname')?.value;

    let user: Utente = {
      "user_id": this.id,
      "first_name": name,
      "last_name": lastname
    };

    this.utentiService.update(user).subscribe(data => {
      this.location.back();
    });
  }

}
