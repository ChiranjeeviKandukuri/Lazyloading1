import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch: 'full'},
  {path:'gl',loadChildren:'../app/GL/gl/gl.module#GlModule'},
  {path:'cpp',loadChildren:'../app/CPP/cpp/cpp.module#cppModule'},
  { path: '**', component: NotfoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
