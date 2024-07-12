import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { ConfigThemeComponent } from './config-theme/config-theme.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    WeatherWidgetComponent,
    ConfigThemeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
