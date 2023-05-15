import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {
  questions:any=[]
  ResultQuestions:any=[]
  clickedQA:any={}
  count:number=0
  // questiontoResult:any={}
  resultStatus:boolean=false
  clickedStatus: boolean=false
  QuestionStatus:boolean=false
  clickedAnswer:number=0
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.searchTerm.subscribe((result:any)=>{

      let catname=result.catName
      let mode=result.mode
      this.api.Getquiz(catname,mode).subscribe((result:any)=>{
        
        this.questions=result.results
        
        // save questions  to Behavior for other component
        let questiontoResult=result.results
        
        this.api.questions.next({questiontoResult})
        // console.log(this.questions[1].category);
        // console.log(this.questions[0].incorrect_answers[0]);
        for(let item of this.questions ){
          
          item.incorrect_answers.push(item.correct_answer)
          console.log(item.incorrect_answers);
          
           (item.incorrect_answers).sort((a: any, b: any) => 0.5 - Math.random());

        }
      })
      
    })
  }
  valueRead(question:any,answer:any){

   this.clickedStatus=true

    this.questions.forEach((result:any)=>{
      // console.log(result.question);
      // console.log(question);
      // console.log(result.question);

      if(result.question==question){
        if(result.correct_answer==answer){
          console.log('Correct answer');
                        //  to avoid multiple clicking
                          if(this.clickedQA.question!=question){ 
                            this.clickedQA={question,answer}
                            this.count+=1
                           
                          }
                          else{ 
                          console.log(this.clickedQA);
                          }  
        }
        else{
          console.log('wrong answer');
        
        }
        
      }
     
    })
    console.log(this.count);
    
    
  }
  submit(){
    this.QuestionStatus=true
    console.log(this.count);
    this.resultStatus=true
    // when submit button clickes,

    // to store count in local storage
      // first convert to string
    let countLocal=this.count.toString()
    console.log(countLocal);
    // store to local storrage
    localStorage.setItem("count",countLocal)
    
   
  }

  

}
