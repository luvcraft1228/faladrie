import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HpTrackerComponent } from './hp-tracker/hp-tracker.component';
import { SheetComponent } from './sheet/sheet.component';
import { HealthComponent } from './sheet/health/health.component';
import { EssenceComponent } from './sheet/essence/essence.component';
import { HeaderComponent } from './sheet/header/header.component';
import { SkillComponent } from './sheet/skill/skill.component';
import { StatusComponent } from './sheet/status/status.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HpTrackerComponent,
    SheetComponent,
    HealthComponent,
    EssenceComponent,
    HeaderComponent,
    SkillComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
