import { Component, OnInit } from '@angular/core';
import { NavigationService } from "../Shared/NavigationService";
import { NavigationItem } from '../models/models';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']  
})
export class NavigationComponent{
  public obj:NavigationItem[]=[]; 
  constructor(public navService :NavigationService) {     
    this.obj = navService.navitems;
  }  
}
