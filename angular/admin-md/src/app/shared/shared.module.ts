import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MdModule} from 'src/app/md/md.module';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MenuProfileComponent } from './menu-profile/menu-profile.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [HeaderComponent, SideNavComponent, MenuProfileComponent, MenuComponent],
  imports: [
    CommonModule, MdModule, RouterModule
  ],
  exports: [
    HeaderComponent, SideNavComponent, MenuProfileComponent, MenuComponent
  ]
})
export class SharedModule { }
