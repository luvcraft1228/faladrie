import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HpTrackerComponent } from './hp-tracker/hp-tracker.component';
import { SheetComponent } from './sheet/sheet.component';
import { HealthComponent } from './sheet/health/health.component';
import { EssenceComponent } from './sheet/essence/essence.component';
import { HeaderComponent } from './sheet/header/header.component';
import { StatusComponent } from './sheet/status/status.component';
import {FormsModule} from "@angular/forms";
import { TrackerComponent } from './tracker/tracker.component';
import { SkillsComponent } from './sheet/skills/skills.component';
import { SkillComponent } from './sheet/skills/skill/skill.component';
import { SkillLineComponent } from './sheet/skills/skill-line/skill-line.component';
import { InventoryComponent } from './sheet/inventory/inventory.component';
import { EquipmentComponent } from './sheet/inventory/equipment/equipment.component';

@NgModule({
  declarations: [
    AppComponent,
    HpTrackerComponent,
    SheetComponent,
    HealthComponent,
    EssenceComponent,
    HeaderComponent,
    StatusComponent,
    TrackerComponent,
    SkillsComponent,
    SkillComponent,
    SkillLineComponent,
    InventoryComponent,
    EquipmentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
