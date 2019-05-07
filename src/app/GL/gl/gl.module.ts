import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import { GlComponent } from './gl.component';
import { AccountComponent } from '../account/account.component';
import { ApplicationComponent } from '../application/application.component';
import { CoverageComponent } from '../coverage/coverage.component';
import { NavigationComponent } from 'src/app/navigation/navigation.component';
import { NavigationService } from "src/app/Shared/NavigationService";
import {HeaderComponent} from 'src/app/Shared/header/header.component';



const routes: Routes = [
  {
    path:'',component:GlComponent ,children:[
        {path:'',component:AccountComponent,redirectTo:'account'},  
        {path:'account',component:AccountComponent},  
        {path:'application',component:ApplicationComponent},
        {path:'coverage',component:CoverageComponent}
    ]
  }  
]

@NgModule({
  declarations: [
    NavigationComponent,
    GlComponent,
    AccountComponent,
    ApplicationComponent,
    CoverageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[],
  schemas: [  ],
  providers:[NavigationService]
})
export class GlModule { }
