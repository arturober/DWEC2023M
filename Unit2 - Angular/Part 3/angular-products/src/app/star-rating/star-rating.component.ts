import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent implements OnInit {
  @Input({required: true})
  set rating(rating: number) {
    this.#rating = rating;
    this.restoreRating();
  }
  @Output() ratingChange = new EventEmitter<number>();
  auxRating!: number;
  #rating!: number;

  ngOnInit(): void {
    this.restoreRating();
  }

  changeRating(rating: number) {
    this.ratingChange.emit(rating);
  }

  restoreRating() {
    this.auxRating = this.#rating;
  }
}
