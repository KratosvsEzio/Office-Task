import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-display-new-html',
  templateUrl: './display-new-html.component.html',
  styleUrls: ['./display-new-html.component.css']
})
export class DisplayNewHtmlComponent implements OnInit {

  htmlCode: any;

  constructor(private sanitized: DomSanitizer) { }

  ngOnInit(): void {
    this.htmlCode =  `
    <!DOCTYPE html><html><head><title>Im a new Html</title></head><body>The content of the document......<div>Hello World</div></body></html>`;
    console.log('Sanitized', this.sanitized.bypassSecurityTrustHtml(this.htmlCode))
    this.htmlCode = this.sanitized.bypassSecurityTrustHtml(this.htmlCode)
  }

}
