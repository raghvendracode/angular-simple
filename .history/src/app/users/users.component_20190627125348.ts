import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: object;
total = {};
total1 = {};
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      (result) => {
       // console.log(result);
        this.users$ = result;
        this.total = result;
        this.total1 =  this.total;
        console.log(this.total1);
      }
    );
  }

}
