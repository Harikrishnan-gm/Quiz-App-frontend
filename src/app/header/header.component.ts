import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  topper:string=''
  photo:string=''
  sumArray:any=[]
  constructor(private api:ApiService){}
Topper(){
  this.api.Topper().subscribe((result:any)=>{
    console.log(result);
    
    result.map((item:any)=>{
      console.log(item);
      
      let sum=(item.score).reduce((a: any,b: any)=>a+b)
      
      console.log(Math.max(sum));
      
    })
    this.topper=result[0].name
    this.photo=result[0].photo
    console.log(this.photo);
    
  })
}
}
