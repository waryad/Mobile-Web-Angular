import { Component,OnInit, Input} from '@angular/core';
import { myFooterDetail } from '../myClasses/Myfooter';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  todayDate = new Date();
  constructor(){ }
  Emailid: string ='';
  College:string='';
  Campus:string='';
  @Input() footerFetch!: myFooterDetail;
  ngOnInit(): void {
  
  }
  // this function only take place after 
  
  ngAfterViewInit():void{
    
    this.Emailid = this.footerFetch.myEmail
    this.College = this.footerFetch.myCollege
    this.Campus = this.footerFetch.myCampus
  }
  }

