import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  date : string = new Date().toISOString().split("T")[0];

  constructor() { }

  ngOnInit(): void {
  }

}
