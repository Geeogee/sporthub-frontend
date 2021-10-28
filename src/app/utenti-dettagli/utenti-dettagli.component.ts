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

  userToShowId?: number;
  showDetails = false;
  id?: number; // number | undefined

  @Input() utente!: Utente;
  @Output() notify = new EventEmitter();

  detailsCheckout = this.formBuilder.group({
    name : '',
    lastname : ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private utentiService: UtentiServiceService,
  ) { 

  }

  ngOnInit(): void {
    this.id = this.utente.user_id;
    this.detailsCheckout.get('name')?.setValue(this.utente.first_name);
    this.detailsCheckout.get('lastname')?.setValue(this.utente.last_name);
  }

  openUpdateForm(): void {
    console.log("aperto" + this.utente.user_id);
    this.showDetails = !this.showDetails;
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
      console.log(data);
    });
  }

}
