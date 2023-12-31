import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  SimpleChange,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ChildChildOneComponent } from '../child-child-one/child-child-one.component';
@Component({
  selector: 'app-child-one',
  imports: [CommonModule, MatButtonModule, ChildChildOneComponent],
  standalone: true,
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildOneComponent {
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
    console.log('ngOnChanges in child', simpleChange);
  }
  ngOnInit(): void {
    console.log('ngOnInit in child');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck in child');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit in child');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked in child');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit in child');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked in child');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy in child');
  }
}
