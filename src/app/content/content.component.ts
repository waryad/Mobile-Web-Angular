import { Component , Input, OnInit } from '@angular/core';
import { campusInfo } from '../myClasses/mycampuses';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent {
  constructor(){ }
@Input() contentFetch!: campusInfo;
  username: string = '';
  campus: string = '';
  department: string = '';
  campuses: string[] = ['Davis', 'Trafalgar', 'Oakville'];
  departments: string[] = ['Computer', 'Mathematics', 'Life Science'];
  age:number=0
  resetData(){
    this.username=""
    this.campus=""
    this.department=""
    this.age=0
  }
 
  getuserstyle(): any {
    if (this.username === '') {
      return 'red';
    } else {
      return 'white';
    }
  }
  getcampusStyle():any{
    if (this.campus!==""){
    return ( this.campus.toUpperCase() ==='DAVIS' ||  this.campus.toUpperCase() ==='TRAFALGAR'|| this.campus.toUpperCase() ==='OAKVILLE' ) ? 'green' : 'red'
   }
  
  }

  getdepartmentstyle():any{
    if(this.department!==""){
      return(this.department.toUpperCase()==='COMPUTER' || this.department.toUpperCase()==='MATHEMATICS' ||this.department.toUpperCase()==='LIFE SCIENCE' )?'green' : 'red'
    }
  }
  getagestyle():any{
    if (this.age === null || isNaN(this.age) || this.age < 0) {
      return 'red';
    } else if (this.age < 20) {
      return 'yellow';
    } else {
      return 'transparent';
    }
  }

  ngOnInit(): void {

  }
  ngAfterViewInit() : void{
    this.username=this.contentFetch.username
    this.campus = this.contentFetch.campusName
    this.department =this.contentFetch.department
    this.age=this.contentFetch.age
  }
  submitData(): void{
    alert("Successfully completed and for localstorage please click on ok");
    localStorage.setItem('username',this.username);
    localStorage.setItem('campus',this.campus);
    localStorage.setItem('department',this.department);
    localStorage.setItem('age',this.age.toString())
  }
  }

