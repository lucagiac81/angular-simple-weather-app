import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule }   from '@angular/forms'

import { AppComponent } from './app.component'
import { DisplayComponent } from './components/display/display.component'
import { SelectionComponent } from './components/selection/selection.component'

import { HttpClientModule } from '@angular/common/http'
import { WeatherDataService } from './services/weather-data.service'

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
