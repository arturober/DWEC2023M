import { Component, NgZone, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GoogleLoginDirective } from './google-login/google-login.directive';
import { Subscription } from 'rxjs';
import { LoadGoogleApiService } from './google-login/load-google-api.service';
import { FbLoginDirective } from './facebook-login/fb-login.directive';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

interface GoogleInfo {
  name: string;
  email: string;
  picture: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    GoogleLoginDirective,
    FbLoginDirective,
    FaIconComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  #loadGoogle = inject(LoadGoogleApiService);
  #ngZone = inject(NgZone);
  credentialsSub!: Subscription;

  googleInfo?: GoogleInfo;
  iconFacebook = faFacebook;

  ngOnInit(): void {
    this.credentialsSub = this.#loadGoogle.credential$.subscribe(
      (resp) => {
        const encoded = resp.credential.split(".")[1];
        const decoded = JSON.parse(atob(encoded));
        this.#ngZone.run(() => { // Angular notices these changes
          this.googleInfo = {
            email: decoded.email,
            name: decoded.name,
            picture: decoded.picture
          }
        });


        console.log(decoded) // Send this to your back-end
      }
    );
  }

  ngOnDestroy(): void {
    this.credentialsSub.unsubscribe();
  }

  loggedFacebook(resp: fb.StatusResponse) {
    // Send this to your server
    console.log(resp.authResponse.accessToken);
  }

  showError(error: any) {
    console.error(error);
  }
}
