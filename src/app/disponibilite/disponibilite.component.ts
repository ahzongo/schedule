import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-disponibilite',
  templateUrl: './disponibilite.component.html',
  styleUrls: ['./disponibilite.component.css']
})
export class DisponibiliteComponent implements OnInit{

  constructor() { }
  plage = new FormControl('2');
  plage_list : number[] =[];
  ngOnInit(): void {
    //this.plage.value= 2;
    //this.plage_list = this.range(this.plage.value);
    this.plage_list=this.range(Number(this.plage.value));
    console.log(this.plage_list);
    
  }

  update(): void{
    this.plage_list=this.range(Number(this.plage.value));
  }

  range(plage: number): number[]{
    const result = [];
    let i: number;
    for(i=plage; i<=24; i +=plage){
      result.push(i);
    }

    return result;
  }

}
