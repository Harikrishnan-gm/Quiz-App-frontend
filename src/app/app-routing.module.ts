import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'quiz',component:QuizPageComponent},
  {path:'loginReg',component:LoginRegComponent},
  {path:'result',component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
