import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
hideP: boolean = true;
clickLog = [];

showParagraph(){
  this.hideP = !this.hideP;
  this.clickLog.push(this.clickLog.length+1);
}

}
