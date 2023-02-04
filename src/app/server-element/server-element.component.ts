import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  SimpleChange,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // None, ShadowDOM (emulated is default one)
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element!: {
    type: string;
    name: string;
    content: string;
  };
  @Input() name!: string;
  @ViewChild('heading') header!: ElementRef;
  @ContentChild('contentParagraph') paragraph!: ElementRef;

  constructor() {
    console.log('Constructor called!');
    // we can't access template ref variable in ngOninit bcz view is not loaded yet
    console.log('Header: ', this.header?.nativeElement.textContent);
    // same for the contentParagraph
    console.log(
      'Content Paragraph: ',
      this.paragraph?.nativeElement.textContent
    );
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('ngOnChanges called!');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
    // only view the child content when it's loaded in component template
    console.log(
      'Content Paragraph: ',
      this.paragraph.nativeElement.textContent
    );
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    // after viewInit we can access bcz over view is loaded so template variable
    // could be accessible
    console.log('Header: ', this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
}
