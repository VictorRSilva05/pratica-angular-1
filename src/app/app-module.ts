import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { App } from './app';
import { StatusCard } from './status-card/status-card';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [App, StatusCard],
  imports: [ BrowserModule ,ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {

}
