import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import './styles/styles.css';

enableProdMode();

const PLATFORM = platformBrowserDynamic();

PLATFORM.bootstrapModule(AppModule);
