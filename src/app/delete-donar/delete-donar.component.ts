import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-donar',
  templateUrl: './delete-donar.component.html',
  styleUrls: ['./delete-donar.component.css']
})
export class DeleteDonarComponent implements OnInit {

  constructor() { }

  donarId=""

  readValues=()=>{
    let data={
      "donarId":this.donarId
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
