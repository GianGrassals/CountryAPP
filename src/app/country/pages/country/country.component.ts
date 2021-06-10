import { CountryService } from './../../services/country.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  term: string = "";
  error: boolean = false;
  countrys: Country[] = [];
  countrySuggestion: Country[] = [];
  showSuggestions: boolean = false;

  constructor(private countryService: CountryService) { }



  ngOnInit(): void {
  }

  search( term: string) {
    this.showSuggestions = false;
    this.error = false;
    this.term = term;
    this.countryService.searchCountry(this.term).subscribe( countrys => {
      this.countrys = countrys;
      console.log(countrys);

    }, (err) => {
     this.error = true;
     this.countrys = [];
    } );

    this.term = '';

  }

  suggestion( term: string){
    this.error= false;
    this.term = term;
    this.showSuggestions = true;

    this.countryService.searchCountry( term )
      .subscribe( countrys => {
        this.countrySuggestion = countrys.splice(0,5);
      },
      (err) =>{
        this.countrySuggestion = [];
      } )
  }

  searchSuggestion( term: string) {
    this.search(term);

  }

}
