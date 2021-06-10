import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent implements OnInit {


  term: string = "";
  error: boolean = false;
  countrys: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  search( term: string) {
    this.error = false;
    this.term = term;
    this.countryService.searchCapital(this.term).subscribe( countrys => {
      this.countrys = countrys;
      console.log(countrys);

    }, (err) => {
     this.error = true;
     this.countrys = [];
    } );

  }


  suggestion(){
    this.error= false;
    //TODO: Crear Suggestion
  }
}
