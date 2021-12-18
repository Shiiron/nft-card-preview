import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NftPreviewCardComponent } from './components/nft-preview-card/nft-preview-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NftPreviewCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
