import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-donar',
  templateUrl: './add-donar.component.html',
  styleUrls: ['./add-donar.component.css']
})
export class AddDonarComponent implements OnInit {

  constructor() { }

  name=""
  bloodGroup=""
  dob=""
  lastDonationDate=""
  previousDisease=""
  lastVaccinationDate=""
  address=""
  pinCode=""
  mobileNo=""
  emailId=""


  

  readValues=()=>{
    let data={
  "name":this.name,
  "bloodGroup":this.bloodGroup,
  "dob":this.dob,
  "lastDonationDate":this.lastDonationDate,
  "previousDisease":this.previousDisease,
  "lastVaccinationDate":this.lastVaccinationDate,
  "address":this.address,
  "pinCode":this.pinCode,
  "mobileNo":this.mobileNo,
  "emailId":this.emailId

    }
    console.log(data)
  }


  

  ngOnInit(): void {
  }

}
