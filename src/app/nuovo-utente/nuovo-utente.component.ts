import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Utente } from 'src/utente';
import { UtentiServiceService } from '../utenti-service.service';

@Component({
  selector: 'app-nuovo-utente',
  templateUrl: './nuovo-utente.component.html',
  styleUrls: ['./nuovo-utente.component.css']
})
export class NuovoUtenteComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    name: '',
    lastname: ''
  })

  @Output() refresh = new EventEmitter();

  constructor(
    private utentiService: UtentiServiceService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {

    let name = this.checkoutForm.get('name')?.value;
    let lastname = this.checkoutForm.get('lastname')?.value;

    let user: Utente = {
      "first_name": name,
      "last_name": lastname
    };

    this.utentiService.addNewUser(user).subscribe(data => {
      console.log(data);
      this.refresh.emit();
      //fare l'emit per aggiornare l'elenco
    });

    this.checkoutForm.reset();
  }

}
