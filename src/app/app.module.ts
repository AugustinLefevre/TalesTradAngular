import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconButton } from '@angular/material/button';
import { MatIconAnchor } from '@angular/material/button';
import {MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/security/login/login.component';
import { RegisterComponent } from './components/security/register/register.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './components/home/home.component';
import { StoryCreationFormComponent } from './components/story-creation-form/story-creation-form.component';
import { withFetch } from '@angular/common/http';

import { RxStompService  } from '@stomp/ng2-stompjs';
import { ChatComponent } from './components/chat/chat.component';
import { ChatSlidebarComponent } from './components/chat-slidebar/chat-slidebar.component';
import { MyStoriesComponent } from './components/my-stories/my-stories.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { NewStoryComponent } from './components/new-story/new-story.component';
import { AllStoriesComponent } from './components/all-stories/all-stories.component';
import { ViewStoryComponent } from './components/view-story/view-story.component';
import { HeaderComponent } from './components/header/header.component';
import { NewTextProposalComponent } from './components/new-text-proposal/new-text-proposal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    StoryCreationFormComponent,
    ChatComponent,
    ChatSlidebarComponent,
    MyStoriesComponent,
    UserMenuComponent,
    NewStoryComponent,
    AllStoriesComponent,
    ViewStoryComponent,
    HeaderComponent,
    NewTextProposalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatIconButton,
    MatIconAnchor,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    RxStompService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
