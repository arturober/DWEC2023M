import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faCoffee,
  faStar as faStarSolid,
  faSquare,
  faSpinner,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-icons';
  // icons = { faCoffee, faStarSolid, faStarRegular };

  #faIconLibrary = inject(FaIconLibrary);

  constructor() {
    this.#faIconLibrary.addIcons(
      faCoffee,
      faStarSolid,
      faStarRegular,
      faSquare,
      faSpinner,
      faEnvelope
    );
  }
}
