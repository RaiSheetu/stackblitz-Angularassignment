// import 'zone.js/dist/zone';
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppModule } from './app/app.module';

// @Component({
//   selector: 'app-app',
//   standalone: true,
//   imports: [CommonModule, AppModule],
// })
// export class App {
//   name = 'Angular';
// }

// bootstrapApplication(App);

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// if (environment.production) {
//   enableProdMode();
// }

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
