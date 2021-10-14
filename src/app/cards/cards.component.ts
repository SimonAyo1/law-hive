import { Component, OnInit } from '@angular/core';
import { ApiService } from '../config/api.service';
import { Router } from '@angular/router'



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})


export class CardsComponent implements OnInit {
   
   width: number = screen.width;
   isMobile: boolean = false;
   isNotMobile: boolean = false;
   isLarge: boolean = false;

  public datas : any = []
  constructor(private api : ApiService,
     private route : Router) {
      
      if(this.width <= 600) {
        this.isMobile = true
      }
      else if(this.width >= 601) {
        this.isNotMobile = true
      }
      else if(this.width <= 600) {
        this.isLarge = true
      }
      
  


    
    this.api.getData() 
     .subscribe((e) => {
      this.datas = e.results
   })
   
 
  }
 
  
  onClick(i:number) {
    this.route.navigate(['read/' + this.datas[i].name + "/" + this.datas[i].id])
}

  onClick1() {
      this.route.navigate(['read/' + this.datas[0].name + "/" + this.datas[0].id])
  }
  onClick2() {
    this.route.navigate(['read/' + this.datas[1].name + "/" + this.datas[1].id])
  }
  onClick3() {
    this.route.navigate(['read/' + this.datas[2].name + "/" + this.datas[2].id])
}
onClick4() {
  this.route.navigate(['read/' + this.datas[3].name + "/" + this.datas[3].id])
}
onClick5() {
  this.route.navigate(['read/' + this.datas[4].name + "/" + this.datas[4].id])
}
onClick6() {
  this.route.navigate(['read/' + this.datas[5].name + "/" + this.datas[5].id])
}onClick7() {
  this.route.navigate(['read/' + this.datas[6].name + "/" + this.datas[6].id])
}
onClick8() {
  this.route.navigate(['read/' + this.datas[7].name + "/" + this.datas[7].id])
  }
  onClick9() {
    this.route.navigate(['read/' + this.datas[8].name + "/" + this.datas[8].id])
}
onClick10() {
  this.route.navigate(['read/' + this.datas[9].name + "/" + this.datas[9].id])
}
onClick11() {
  this.route.navigate(['read/' + this.datas[10].name + "/" + this.datas[10].id])
}
onClick12() {
  this.route.navigate(['read/' + this.datas[11].name + "/" + this.datas[11].id])
}


  ngOnInit(): void {
  }

}
