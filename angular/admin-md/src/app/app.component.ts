import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-md';
  opened = Boolean(document.body.offsetWidth > 1000);
  mode = document.body.offsetWidth > 1000?'side':'over';
  onToggleSetting = false;
  @HostListener('window:resize', ['$event'])
  onResize(event){
    const width = event.target.innerWidth;
    this.opened = Boolean(width > 1000);
    this.mode = width > 1000?'side':'over';

  }

  toggleSetting() {
    this.onToggleSetting = !this.onToggleSetting;
  }
}
