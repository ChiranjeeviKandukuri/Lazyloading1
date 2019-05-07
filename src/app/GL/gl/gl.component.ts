import { Component, OnInit } from '@angular/core';
import { NavigationService } from "src/app/Shared/NavigationService";
import {NavigationItem} from 'src/app/models/models'


@Component({
  selector: 'app-gl',
  templateUrl: './gl.component.html',
  styleUrls: ['./gl.component.css']
})
export class GlComponent {
  constructor(navservice : NavigationService){    
    var item = new NavigationItem("account","account");
    var item1 = new NavigationItem("coverage","coverage");
    var item2 = new NavigationItem("application","application");
    navservice.navitems.push(item);    
    navservice.navitems.push(item1);    
    navservice.navitems.push(item2);    
  }
}
