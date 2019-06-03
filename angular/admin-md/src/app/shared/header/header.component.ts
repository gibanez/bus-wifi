import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onMenuClick: EventEmitter<any> = new EventEmitter()
  @Output() onSettingClick: EventEmitter<any> = new EventEmitter()
  @Output() onProfileClick: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {

  }
  menuClick() {
    this.onMenuClick.emit();
  }
  settingClick() {
    this.onSettingClick.emit();
  }
  profileClick() {
    this.onProfileClick.emit();
  }

}
