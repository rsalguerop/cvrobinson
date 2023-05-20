import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SkillComponent} from "./skill/skill.component";
import {ExperienceComponent} from "./experience/experience.component";
import {HobbiesComponent} from "./hobbies/hobbies.component";
import {AchievementsComponent} from "./achievements/achievements.component";
import {EducationComponent} from "./education/education.component";
import {SuggestionsComponent} from "./suggestions/suggestions.component";

const routes: Routes = [


  {path : 'home', component: HomeComponent },
  {path : 'skill', component: SkillComponent},
  {path : 'experience' , component: ExperienceComponent},
  {path : 'education', component: EducationComponent},
  {path : 'achievements', component: AchievementsComponent },
  {path : 'hobbies', component: HobbiesComponent},
  {path : 'suggestions' , component: SuggestionsComponent},
  {path : '**' , redirectTo : 'home' , pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
