import { Component,  OnInit, Input } from '@angular/core';
import { MyInfo } from '../myClasses/Myheader';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
constructor(){ }
fullname: string ='';
mycountry:string='';
@Input() headerFetch!: MyInfo;
ngOnInit(): void {

}
// this function only take place after 

ngAfterViewInit():void{
  this.fullname = this.headerFetch.myName
  this.mycountry = this.headerFetch.myHomeCountry
}
}


