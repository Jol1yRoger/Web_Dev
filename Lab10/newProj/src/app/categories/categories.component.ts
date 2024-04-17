import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  @Output() categorySelected = new EventEmitter<string>();

  categories: string[] = ['Phones', 'Beds', 'TV', 'Mouses'];

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }
}