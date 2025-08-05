import { AfterViewInit, Component, ElementRef, input, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-common-header',
  imports: [],
  templateUrl: './common-header.html',
  styleUrl: './common-header.css'
})
export class CommonHeader implements AfterViewInit {
  ngAfterViewInit(): void {
    this.small.nativeElement.style.width = this.smallLineWidth;
    this.small.nativeElement.style.height = this.smallLineHeight;
    this.big.nativeElement.style.width = this.bigLineWidth;
    this,this.big.nativeElement.style.height = this.bigLineHeight
  }
  @Input() header : string = "Place your header here";
  @Input() smallLineWidth : string = "0px";
  @Input() smallLineHeight : string = "0px";
  @Input() bigLineWidth : string = "0px";
  @Input() bigLineHeight : string = "0px";

  @ViewChild('small') small! : ElementRef;
  @ViewChild('big') big! : ElementRef;
}
