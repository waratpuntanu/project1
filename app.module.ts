import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NEWSComponent } from './mainNEWS/app.NEWSComponent';
import { headnewComponent } from './headnew/app.headnewComponent';
import { botNEWSComponent } from './botNEWS/app.botNEWSComponent';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent, 
    NEWSComponent,
    headnewComponent,
    botNEWSComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
