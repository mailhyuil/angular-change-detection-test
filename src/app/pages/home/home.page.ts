import { CommonModule } from '@angular/common';
import { Component, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildOneComponent } from 'src/app/components/child-one/child-one.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ChildOneComponent, FormsModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnChanges {
  primitiveValue = 0;
  objectValue = { value: 0 };

  changePrimitiveValue() {
    this.primitiveValue++;
  }
  changeObjectValue() {
    this.objectValue = {
      ...this.objectValue,
      value: this.objectValue.value + 1,
    };
  }
  ngOnChanges() {
    console.log('CHANGE IN PARENT!!!!!!!!!!!!!');
  }
}
