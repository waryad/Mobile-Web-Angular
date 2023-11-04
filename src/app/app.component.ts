import { Component} from '@angular/core';
import { MyInfo } from './myClasses/Myheader';
import { myFooterDetail } from './myClasses/Myfooter';
import { campusInfo } from './myClasses/mycampuses';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AssignmentWaryad3';
  student1: MyInfo ={
    myName: 'Deepinder Kaur Warya',
    myHomeCountry: 'Canada'

  }
  myinfofooter: myFooterDetail= {
    myEmail: 'deepinder@gmail.com',
    myCollege: 'Sheridan College',
    myCampus : 'Davis Campus'

  }
  myinfocontent: campusInfo={
    username: 'Deepinder Kaur Warya',
    campusName: 'Davis',
    department: 'computer',
    age:20
  }

  }

