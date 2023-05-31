import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']

})
export class ResultComponent implements OnInit{
  questions:any=[]
  userDetails:any={}
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.questions.subscribe((result:any)=>{
      this.questions=result.questiontoResult
      this.api.resultArray.subscribe((result:any)=>{
        this.userDetails=result.result
        console.log(this.userDetails);
        
        
      })
      console.log('hiamma',this.questions);
      
    })
  }
}
