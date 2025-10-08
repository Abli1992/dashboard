import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-top-navigation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent {
  @Output() search = new EventEmitter<string>();
  @Output() bell = new EventEmitter<void>();
  @Output() settings = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();

  q = '';

  onSearchSubmit() {
    this.search.emit(this.q.trim());
  }
}
