import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ShowPracticesComponent } from './pages/show-practices/show-practices.component';
import { UpdateComponent } from './pages/update/update.component';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { HomeComponent } from './pages/home/home.component';

const redirectLoggedInToShow = () => redirectLoggedInTo(['show']);
const redirectUnauthorizedToShow = () => redirectUnauthorizedTo(['show']);

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'update', children: [
      { path: '', component: ShowPracticesComponent , canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToShow}},
      { path: ':id', component: UpdateComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToShow}},
    ]
  },
  {
    path: 'show', children: [
      { path: '', component: ShowPracticesComponent},
      { path: ':id', component: DetailComponent},
    ]
  },
  {path: 'add', component: AddComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToShow}},
  {path: 'home', component: HomeComponent},
  {path: 'cv', component: CurriculumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
