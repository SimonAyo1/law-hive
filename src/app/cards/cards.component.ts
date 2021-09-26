import { Component, OnInit } from '@angular/core';
import { ApiService } from '../config/api.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router'



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})


export class CardsComponent implements OnInit {
   a: any = setInterval(()=> {
    Math.ceil(Math.random());
   }, 1000)
   b : number = 10 + Math.ceil(Math.random());
   c : number = 20 + Math.ceil(Math.random());
   d : number = 30 + Math.ceil(Math.random());
   e : number = Math.ceil(Math.random());
  public datas : any = []
  constructor(private api : ApiService,
     private breakpointObserver: BreakpointObserver, 
     private route : Router) {
      
      setInterval(() => {
     
    }, 1000)
    this.api.getData() 
     .subscribe((e) => {
      this.datas = e.results
      
      console.log(this.datas)
   })
   this.api.getApiRoot() 
     .subscribe((d) => {
      console.log(d)
   })
   
 
  }
 
  
   
  onClick1() {
      this.route.navigate(['read/' + this.datas[0].name ])
  }
  onClick2() {
      this.route.navigate(['read/' + this.datas[1].name ])
  }
  onClick3() {
    this.route.navigate(['read/' + this.datas[2].name ])
}
onClick4() {
  this.route.navigate(['read/' + this.datas[3].name ])
}
onClick5() {
  this.route.navigate(['read/' + this.datas[4].name ])
}
onClick6() {
  this.route.navigate(['read/' + this.datas[5].name ])
}onClick7() {
  this.route.navigate(['read/' + this.datas[6].name ])
}
onClick8() {
      this.route.navigate(['read/' + this.datas[7].name ])
  }
  onClick9() {
    this.route.navigate(['read/' + this.datas[8].name ])
}
onClick10() {
  this.route.navigate(['read/' + this.datas[9].name ])
}
onClick11() {
  this.route.navigate(['read/' + this.datas[10].name ])
}
onClick12() {
  this.route.navigate(['read/' + this.datas[11].name ])
}
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
  }

}
