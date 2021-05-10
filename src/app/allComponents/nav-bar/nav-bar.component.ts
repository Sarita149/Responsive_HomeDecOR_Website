import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  searchbar:boolean = false;
  showCategoryList:boolean=true;
  resultarray:any;
  constructor(private helpservice:HelperService , private routes : Router) { }
  
  showCat(){
    this.showCategoryList = !this.showCategoryList
  }
  showSearchBar(){
    this.searchbar =!this.searchbar
  }

  filterdata(name){
    this.helpservice.setfilterdata(name); 
    this.routes.navigate(['product'])
  }
  ngOnInit(): void {
    this.helpservice.getfilterdata().subscribe(res=>{
      this.resultarray = res;
      console.log(this.resultarray);
    })
  }
  

}
