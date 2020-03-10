import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcomponent',
  template: 
  
  
  /* 
  <img [src]="imagePath"/>
  <img src={{imagePath}}/>
  <button disabled> click me</button>
  <button [disabled]="isDisabled">click me</button>
  <button disabled={{isDisabled}}> clik me</button> 
  <button (click)= "onButtonClicked($event)">click</button>
  <button (dblclick)="onButtonClicked1($event)">Double click</button>
  `,  */
   /* interpolation -- {{}} */
   /* property binding --[] */





  ` <h1 class="text-special"> Welcome Guest</h1>
    <h1 [class]="classSuccess"> Mark </h1>
    <h1 [class.text.success]="hasError">this is some  heading/>
    <h1 [nglass]="message">hello</h1>
   `,


  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {



  /* 
  onButtonClicked(event){
    console.log(event.type);
    
  }
  onButtonClicked1(event){
    console.log("double click");
    
  }
  imagePath="../assets/img/logo1.jpg"
  
  isDisabled=false;
  */
classSuccess="text=success"
hasLine=true
hasError=true



message={
"text-success":this.hasError,
"text-danger":!this.hasError,
"text-underline":this.hasLine
}

  constructor() { }

  ngOnInit(): void {
  }
  

}
