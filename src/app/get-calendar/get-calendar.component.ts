import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-get-calendar',
  templateUrl: './get-calendar.component.html',
  styleUrls: ['./get-calendar.component.css']
})
export class GetCalendarComponent implements OnInit {

  constructor() { }

  calendarForm= new FormGroup({

    email : new FormControl(),
    file : new FormControl()
  })


  submitCalendar(): void{
    alert(JSON.stringify(this.calendarForm.value));
  }

  ngOnInit(): void {
  }

}
