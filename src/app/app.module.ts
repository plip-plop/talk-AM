import { PageComponent } from './components/page/page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, // Import pour "mat-button", "mat-raised-button", etc.
    PageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
