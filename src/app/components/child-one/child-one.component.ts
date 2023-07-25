import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SomeService } from 'src/app/services/some.service';

@Component({
  selector: 'app-child-one',
  imports: [CommonModule],
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss'],
  standalone: true,
  providers: [SomeService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildOneComponent {
  @Input() primitiveValue?: number;
  @Input() objectValue?: { value: number };
  constructor(private readonly someService: SomeService) {}
  changePrimitiveValue() {
    this.someService.hi();
    if (this.primitiveValue) {
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
  ngOnChanges() {
    console.log('CHANGE IN CHILD!!!!!!!!!!!!!');
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
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
