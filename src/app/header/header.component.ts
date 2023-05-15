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
  constructor(private api:ApiService){}
Topper(){
  this.api.Topper().subscribe((result:any)=>{
    console.log(result[0].name);
    console.log(this.photo);
    
    this.topper=result[0].name
    this.photo=result[0].photo
    
  })
}
}
