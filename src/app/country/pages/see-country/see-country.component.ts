import { Country } from './../../interfaces/country.interface';
import { CountryService } from './../../services/country.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css']
})
export class SeeCountryComponent implements OnInit {

  country!: Country;

  constructor(private activatedRoute: ActivatedRoute,
              private countryService: CountryService ) { }

  ngOnInit(): void {

    // Utilizando el operador rxjs (switchMap)

    this.activatedRoute.params
    .pipe(
      switchMap( ( params ) => this.countryService.getCountryByAlpha(params.id)),
      tap(console.log)
    )
    .subscribe( country => {
      this.country = country;
    })

    // Metodo regular realizando subscribe dentro de un subscribe >>>

    // this.activatedRoute.params.subscribe( params =>{
    //   console.log(params.id);

    //   this.countryService.getCountryByAlpha( params.id ).subscribe( country => {
    //     console.log(country);
    //   })
    // } )

  }

}
