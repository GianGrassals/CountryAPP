import { CountryService } from './../../services/country.service';
import { Country } from './../../interfaces/country.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActivated: string  = '';
  countrys: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }


  activateRegion( region: string) {

    if (region === this.regionActivated) {
      return ;
    }

    this.regionActivated = region;
    this.countrys = [];

    this.countryService.searchRegion( region ).subscribe( countrys => {
      this.countrys = countrys;
    });

  }

}
