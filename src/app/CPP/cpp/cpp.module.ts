import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import { cppComponent } from './cpp.component';
import { AccountComponent } from '../account/account.component';
import { ApplicationComponent } from '../application/application.component';
import { CoverageComponent } from '../coverage/coverage.component';
import { NavigationComponent } from 'src/app/navigation/navigation.component';
import { NavigationService } from "src/app/Shared/NavigationService";


const routes: Routes = [
  {
    path:'',component:cppComponent ,children:[
        {path:'',component:AccountComponent},  
        {path:'account',component:AccountComponent},  
        {path:'application',component:ApplicationComponent},
        {path:'coverage',component:CoverageComponent}
    ]
  }  
]

@NgModule({
  declarations: [
    NavigationComponent,
    cppComponent,
    AccountComponent,
    ApplicationComponent,
    CoverageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[],
  schemas: [  ],
  providers:[NavigationService]
})
export class cppModule { }
