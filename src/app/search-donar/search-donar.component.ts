import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-donar',
  templateUrl: './search-donar.component.html',
  styleUrls: ['./search-donar.component.css']
})
export class SearchDonarComponent implements OnInit {

  constructor() { }

  bloodGroup=""

  readValues=()=>{
    let data ={
      "bloodGroup":this.bloodGroup
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
