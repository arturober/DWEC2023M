import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'es.fullstackpro.ionic.capacitor',
  appName: 'Ionic Capacitor',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    cleartext: true, // Si tu servidor web es http
  }
};

export default config;
