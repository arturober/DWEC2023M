import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'vibration',
    pathMatch: 'full',
  },
  {
    path: 'vibration',
    loadComponent: () => import('./vibration/vibration.page').then( m => m.VibrationPage)
  },
  {
    path: 'camera',
    loadComponent: () => import('./camera/camera.page').then( m => m.CameraPage)
  },
  {
    path: 'clipboard',
    loadComponent: () => import('./clipboard/clipboard.page').then( m => m.ClipboardPage)
  },
  {
    path: 'device',
    loadComponent: () => import('./device/device.page').then( m => m.DevicePage)
  },
  {
    path: 'filesystem',
    loadComponent: () => import('./filesystem/filesystem.page').then( m => m.FilesystemPage)
  },
  {
    path: 'geolocation',
    loadComponent: () => import('./geolocation/geolocation.page').then( m => m.GeolocationPage)
  },
];
