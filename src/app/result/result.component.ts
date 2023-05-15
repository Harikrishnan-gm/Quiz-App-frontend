import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']

})
export class ResultComponent implements OnInit{
  questions:any=[]
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.questions.subscribe((result:any)=>{
      this.questions=result.questiontoResult
      console.log(this.questions);
      
    })
  }
}
