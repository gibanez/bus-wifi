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
  DropdownModule,
  PanelModule,
  DialogModule, InputTextModule, EditorModule, MessagesModule, MessageModule, InputTextareaModule
} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
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
  DialogModule,
  TableModule,
  InputTextModule,
  MessagesModule,
  MessageModule,
  InputTextareaModule
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
