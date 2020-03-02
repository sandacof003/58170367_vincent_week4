import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.employees = this.route.snapshot.data["employees"];
  }

}
