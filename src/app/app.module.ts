import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { ShowPracticesComponent } from './pages/show-practices/show-practices.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AddComponent } from './pages/add/add.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './pages/update/update.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { HeaderComponent } from './pages/header/header.component';
import { ScullyLibModule } from '@scullyio/ng-lib';


@NgModule({
  declarations: [
    AppComponent,
    ShowPracticesComponent,
    DetailComponent,
    AddComponent,
    UpdateComponent,
    CurriculumComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
