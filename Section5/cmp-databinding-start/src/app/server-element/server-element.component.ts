import { Component, OnInit, Input, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,AfterContentInit {
@Input('srvElement') element:{type: string, name: string, content: string};
@ContentChild('contentParagraph',{static: true}) paragraph: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit called: '+this.paragraph.nativeElement.textContent);
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called: '+this.paragraph.nativeElement.textContent);
  }

}
