import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StatusService } from 'src/app/shared/status.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  companyNameControl = new FormControl();

  constructor(
    private statusService: StatusService
  ) { }

  ngOnInit(): void {
  }

  submitCompany() {
    this.statusService.submitName(this.companyNameControl.value).subscribe(result => {
      console.log(result)
    })
    console.log(this.companyNameControl.value)
  }

  deleteCompany() {
    this.statusService.deleteWorker(this.companyNameControl.value).subscribe(result => {
      console.log(result)
    })
  }

}
