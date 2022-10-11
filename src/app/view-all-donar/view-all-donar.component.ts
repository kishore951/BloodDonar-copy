import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-donar',
  templateUrl: './view-all-donar.component.html',
  styleUrls: ['./view-all-donar.component.css']
})
export class ViewAllDonarComponent implements OnInit {

  constructor( private myapi:ApiService) { 
    this.fetchData()
  }



  fetchData=()=>{
    this.myapi.donarData().subscribe(
      (data) =>{
        this.donarData=data
      }   )
  }
  donarData:any=[]

  ngOnInit(): void {
  }

}
