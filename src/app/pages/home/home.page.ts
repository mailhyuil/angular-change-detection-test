import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  memos?: { id: string; content: string }[];
  firestore: Firestore = inject(Firestore);
  collection?: any;
  formGroup = new FormGroup({
    content: new FormControl(''),
  });
  constructor(private readonly httpClient: HttpClient) {}
  async ngOnInit() {
    this.collection = collection(this.firestore, 'memos');
  }
  async submit() {
    const body = this.formGroup.getRawValue();
    const docRef = addDoc(collection(this.firestore, 'memos'), body);
    console.log(docRef);
  }
  async remove(id: string) {
    console.log(id);
    deleteDoc(doc(this.firestore, 'memo', id));
  }
}
