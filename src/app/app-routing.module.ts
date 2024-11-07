import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './helpers/auth.guard';
import { RegisterComponent } from './components/security/register/register.component';
import { LoginComponent } from './components/security/login/login.component';
import { MyStoriesComponent } from './components/my-stories/my-stories.component';
import { NewStoryComponent } from './components/new-story/new-story.component';
import { ViewStoryComponent } from './components/view-story/view-story.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'my-stories',
    component: MyStoriesComponent,
  },
  {
    path: 'new-story',
    component: NewStoryComponent,
  },
  {
    path: 'view-story/:id',
    component: ViewStoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
