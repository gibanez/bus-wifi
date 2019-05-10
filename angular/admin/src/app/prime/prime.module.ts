import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AutoCompleteModule,
  MenubarModule,
  ProgressBarModule,
  SidebarModule,
  SplitButtonModule,
  ToolbarModule
} from 'primeng/primeng';
import {PanelMenuModule} from 'primeng/panelmenu';
import {SlideMenuModule} from 'primeng/slidemenu';
import {ButtonModule} from 'primeng/button';

const MODULES = [
  SidebarModule,
  PanelMenuModule,
  SlideMenuModule,
  ButtonModule,
  MenubarModule,
  ToolbarModule,
  SplitButtonModule,
  AutoCompleteModule,
  ProgressBarModule
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
