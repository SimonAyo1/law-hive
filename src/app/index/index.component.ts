import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


 
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
   options: any = [
     "simon",
     "dorcas"
   ]
   public query: any;

  constructor(
    private route : Router) {
     
   }
   search() {
    this.route.navigate(['search/' + this.query ])
    
  }
 

  ngOnInit(): void {
  }

}
