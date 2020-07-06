import { Component, OnInit, OnDestroy } from '@angular/core';
import { Userservice } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated =false;
  private activateSub: Subscription;
  constructor(private userService: Userservice) {}

  ngOnInit() {
    this.activateSub = this.userService.activatedEmitter.subscribe(didActivate =>{
      this.userActivated=didActivate;
    });
  }

  ngOnDestroy(){
this.activateSub.unsubscribe();
  }
}
