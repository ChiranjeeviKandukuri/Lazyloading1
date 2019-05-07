import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/models';
import { DataserviceService } from 'src/app/dataservice.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(public appservice:DataserviceService) { }

 public products:Product[];

  ngOnInit() {
    this.appservice.getProducts().subscribe(res=>{      
      this.products = res;
    });
  }
}
