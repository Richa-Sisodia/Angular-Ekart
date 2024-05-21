import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';

  //1st step Create an event(eventemitter) and bind event(@output)
  @Output()
  SearchTextOnChange: EventEmitter<string> = new EventEmitter<string>();

  //2nd step create a methiod and raise event with event method and emit value(this.searchtext) 
  OnSearchTextOnChange() {
    this.SearchTextOnChange.emit(this.searchText);
  }

  
  UpdateSearch(inputEl:HTMLInputElement){
    this.searchText = inputEl.value;
    this.SearchTextOnChange.emit(this.searchText);

  }
}
