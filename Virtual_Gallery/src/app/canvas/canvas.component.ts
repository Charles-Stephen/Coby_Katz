import { Component, OnInit } from '@angular/core';

declare function myexternaljsfiles():any;

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  constructor() {
  } 

  ngOnInit(): void {
    myexternaljsfiles();
  }

}
