import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonTitle,
  Platform,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  camera,
  pulse,
  clipboard,
  phonePortrait,
  folder,
  pin,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonTitle,
  ],
})
export class AppComponent {
  public appPages = [
    { title: 'Camera', url: '/camera', icon: 'camera' },
    { title: 'Clipboard', url: '/clipboard', icon: 'clipboard' },
    { title: 'Device Info', url: '/device', icon: 'phone-portrait' },
    { title: 'Filesystem', url: '/filesystem', icon: 'folder' },
    { title: 'Geolocation', url: '/geolocation', icon: 'pin' },
    { title: 'Vibration', url: '/vibration', icon: 'pulse' },
  ];

  #platform = inject(Platform);

  constructor() {
    addIcons({
      camera,
      pulse,
      clipboard,
      phonePortrait,
      folder,
      pin,
    });

    this.initializeApp();
  }

  async initializeApp() {
    if (this.#platform.is('capacitor')) {
      await this.#platform.ready();
      SplashScreen.hide();
      StatusBar.setBackgroundColor({ color: '#3880ff' });
      StatusBar.setStyle({ style: Style.Dark });
      // GoogleAuth.initialize();
    }
  }
}
