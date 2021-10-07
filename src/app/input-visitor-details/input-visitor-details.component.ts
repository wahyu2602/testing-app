import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css'],
})
export class InputVisitorDetailsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  changePage(path) {
    this.router.navigate(['/' + path]);
  }
}
