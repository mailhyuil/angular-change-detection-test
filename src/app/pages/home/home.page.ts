import { CommonModule } from '@angular/common';
import { Component, SimpleChange } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ChildOneComponent } from 'src/app/components/child-one/child-one.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ChildOneComponent, FormsModule, MatButtonModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  primitiveValue = 0;
  objectValue = { value: 0 };

  changePrimitiveValue() {
    this.primitiveValue++;
  }
  changeObjectValue() {
    this.objectValue.value++;
    // this.objectValue = {
    //   ...this.objectValue,
    //   value: this.objectValue.value + 1,
    // };
  }
  onClick() {
    console.log('clicked');
  }
  ////////////////////////////////
  ngOnChanges(simpleChange: SimpleChange) {
    console.log('ngOnChanges in parent', simpleChange);
  }
  ngOnInit(): void {
    console.log('ngOnInit in parent');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck in parent');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit in parent');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked in parent');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit in parent');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked in parent');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy in parent');
  }
}
