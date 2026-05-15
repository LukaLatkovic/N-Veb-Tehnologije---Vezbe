import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registracija-forma',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registracija-forma.html',
  styleUrls: ['./registracija-forma.css']
})
export class RegistracijaForma {
  korisnik = {
    ime: '',
    prezime: '',
    email: ''
  };

  poruka = '';
  obrada = false;

  posaljiFormu(): void {
    if (!this.formaValidna()) {
      return;
    }

    const { ime, prezime, email } = this.korisnik;

    this.obrada = true;
    this.poruka = '';

    setTimeout(() => {
      this.obrada = false;
      this.poruka = `Uspešno ste se registrovali kao ${ime} ${prezime} (${email}).`;
    }, 500);
  }

  resetujFormu(): void {
    this.korisnik = {
      ime: '',
      prezime: '',
      email: ''
    };

    this.poruka = '';
    this.obrada = false;
  }

  formaValidna(): boolean {
    const { ime, prezime, email } = this.korisnik;

    return (
      ime.trim() !== '' &&
      prezime.trim() !== '' &&
      email.trim() !== ''
    );
  }
}