import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Input,
  SimpleChange,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-child-one',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss'],
  standalone: true,
})
export class ChildOneComponent {
  @Input() primitiveValue?: number;
  @Input() objectValue?: { value: number };
  constructor(private readonly cdr: ChangeDetectorRef) {}
  changePrimitiveValue() {
    console.log(this.primitiveValue);
    if (this.primitiveValue !== undefined) {
      this.primitiveValue++;
    }
    this.cdr.detectChanges();
  }
  changeObjectValue() {
    if (this.objectValue) {
      this.objectValue = {
        ...this.objectValue,
        value: this.objectValue.value + 1,
      };
    }
    this.cdr.detectChanges();
  }
  ////////////////////////////////
  ngOnChanges(simpleChange: SimpleChange) {
    console.log('ngOnChanges', simpleChange);
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    this.cdr.detach();
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
