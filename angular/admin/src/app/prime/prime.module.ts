import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AutoCompleteModule,
  MenubarModule,
  ProgressBarModule,
  SidebarModule,
  SplitButtonModule,
  ToolbarModule,
  ListboxModule,
  DropdownModule, PanelModule, DialogModule
} from 'primeng/primeng';
import {PanelMenuModule} from 'primeng/panelmenu';
import {SlideMenuModule} from 'primeng/slidemenu';
import {ButtonModule} from 'primeng/button';
import {DataViewModule} from 'primeng/dataview';
const MODULES = [
  SidebarModule,
  PanelMenuModule,
  SlideMenuModule,
  ButtonModule,
  MenubarModule,
  ToolbarModule,
  SplitButtonModule,
  AutoCompleteModule,
  ProgressBarModule,
  ListboxModule,
  DataViewModule,
  DropdownModule,
  PanelModule,
  DialogModule
];

@NgModule({
  declarations: [],
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class PrimeModule { }
