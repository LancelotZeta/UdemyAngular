import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
i: number = 0;
@Output() onInterval = new EventEmitter<number>();
ref;

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    console.log('start!!');
 this.ref=setInterval(()=>{
   this.i++;
this.onInterval.emit(this.i);
 },1000);
  }

  stopGame() {
clearInterval(this.ref);
  }
}
