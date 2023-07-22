import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  SimpleChange,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-child-child-one',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './child-child-one.component.html',
  styleUrls: ['./child-child-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildChildOneComponent {
  @Input() primitiveValue?: number;
  @Input() objectValue?: { value: number };
  constructor(private readonly cdr: ChangeDetectorRef) {}
  changePrimitiveValue() {
    if (this.primitiveValue !== undefined) {
      this.primitiveValue++;
    }
  }
  changeObjectValue() {
    if (this.objectValue) {
      this.objectValue = {
        ...this.objectValue,
        value: this.objectValue.value + 1,
      };
    }
  }
  ////////////////////////////////
  ngOnChanges(simpleChange: SimpleChange) {
    console.log('ngOnChanges in child"s child', simpleChange);
  }
  ngOnInit(): void {
    console.log('ngOnInit in child"s child');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck in child"s child');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit in child"s child');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked in child"s child');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit in child"s child');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked in child"s child');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy in child"s child');
  }
}
