import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent implements OnInit {

  @Input() placeholder : string = '';

  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject;

  term: string = '';

  constructor() { }

  ngOnInit() {

     this.debouncer
     .pipe(debounceTime(300))
     .subscribe( value => {
       this.onDebounce.emit( value );
     });

  }

  search() {
    this.onEnter.emit( this.term );

  }


  keyPress(  ){
    this.debouncer.next( this.term );

  }
}
