import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public apiService: ApiService) { }
   searchText: string = ''
   previousSearch: string =''
   listData:Array<any>= [{
     id:'1234',
     name:'Dosa ',
     description:'dose is a thin pancake or crepe, originating from South India',
     amount: 60
   }];
   data:Array<any> = [];
  ngOnInit(): void {

  }
   search(){
     if(this.searchText && this.previousSearch !== this.searchText){
      this.previousSearch = this.searchText
      // this.apiService.getData().subscribe((res)=>{
      //   if(res){
      //    this.previousSearch = this.searchText
      //   }
      // })
      this.data = this.listData.filter((value)=>{
         if(value.id === this.searchText){
           return true;
         }
      })
     }
   }
}
